/**
 * Network Monitor
 *
 * Wraps @capacitor/network to provide:
 *  - Current network status (online/offline)
 *  - Connection type (wifi, cellular, none)
 *  - Change listeners with debounce
 *  - Integration with the OfflineBanner component via a React hook
 *
 * On web, falls back to the browser's navigator.onLine + online/offline events.
 *
 * Usage:
 * ```ts
 * // One-time init (call in app root)
 * const cleanup = initNetworkMonitor({ onChange: (status) => { ... } });
 *
 * // React hook usage
 * const { isOnline, connectionType } = useNetworkStatus();
 * ```
 */

'use client';

import { useEffect, useState, useRef } from 'react';
import { Capacitor } from '@capacitor/core';

// ─── Types ───────────────────────────────────────────────────────────────────

export type ConnectionType =
  | 'wifi'
  | 'cellular'
  | 'none'
  | 'ethernet'
  | 'unknown';

export interface NetworkStatus {
  isConnected: boolean;
  connectionType: ConnectionType;
}

export interface NetworkMonitorOptions {
  /** Called whenever the network status changes */
  onChange?: (status: NetworkStatus) => void;
  /** Debounce delay in ms (default: 300) */
  debounceMs?: number;
}

// ─── Initialization ──────────────────────────────────────────────────────────

let _networkChangeHandler: ((status: NetworkStatus) => void) | null = null;
let _capacitorListenerHandle: { remove: () => void } | null = null;

/**
 * Initialize the network monitor.
 * Should be called once at app root level.
 *
 * @returns Cleanup function to remove listeners.
 */
export async function initNetworkMonitor(
  options: NetworkMonitorOptions = {}
): Promise<() => void> {
  const { onChange, debounceMs = 300 } = options;

  _networkChangeHandler = onChange ?? null;

  let debounceTimer: ReturnType<typeof setTimeout> | null = null;

  const emitChange = (status: NetworkStatus) => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      _networkChangeHandler?.(status);
      // Publish to any active useNetworkStatus listeners
      _networkStatusListeners.forEach((listener) => listener(status));
    }, debounceMs);
  };

  if (Capacitor.isNativePlatform()) {
    // Use @capacitor/network on native
    const { Network } = await import('@capacitor/network');

    _capacitorListenerHandle = await Network.addListener(
      'networkStatusChange',
      (status) => {
        emitChange({
          isConnected: status.connected,
          connectionType: status.connectionType as ConnectionType,
        });
      }
    );
  } else {
    // Web fallback: use navigator.onLine
    const handleOnline = () =>
      emitChange({ isConnected: true, connectionType: 'unknown' });
    const handleOffline = () =>
      emitChange({ isConnected: false, connectionType: 'none' });

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }

  return () => {
    _capacitorListenerHandle?.remove();
    _capacitorListenerHandle = null;
    if (debounceTimer) clearTimeout(debounceTimer);
  };
}

// ─── React Hook ──────────────────────────────────────────────────────────────

const _networkStatusListeners = new Set<(status: NetworkStatus) => void>();

/**
 * React hook to subscribe to network status.
 *
 * @returns Current network status with isOnline and connectionType.
 *
 * @example
 * const { isOnline, connectionType } = useNetworkStatus();
 * if (!isOnline) return <OfflineBanner />;
 */
export function useNetworkStatus(): {
  isOnline: boolean;
  connectionType: ConnectionType;
  isLoading: boolean;
} {
  const [status, setStatus] = useState<NetworkStatus>({
    isConnected: true, // Optimistic default
    connectionType: 'unknown',
  });
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    // Get current status on mount
    const fetchCurrentStatus = async () => {
      try {
        if (Capacitor.isNativePlatform()) {
          const { Network } = await import('@capacitor/network');
          const current = await Network.getStatus();
          if (isMounted.current) {
            setStatus({
              isConnected: current.connected,
              connectionType: current.connectionType as ConnectionType,
            });
          }
        } else {
          if (isMounted.current) {
            setStatus({
              isConnected: navigator.onLine,
              connectionType: navigator.onLine ? 'unknown' : 'none',
            });
          }
        }
      } catch {
        // Keep optimistic default on error
      } finally {
        if (isMounted.current) {
          setIsLoading(false);
        }
      }
    };

    fetchCurrentStatus();

    // Subscribe to changes
    const listener = (newStatus: NetworkStatus) => {
      if (isMounted.current) {
        setStatus(newStatus);
      }
    };
    _networkStatusListeners.add(listener);

    return () => {
      isMounted.current = false;
      _networkStatusListeners.delete(listener);
    };
  }, []);

  return {
    isOnline: status.isConnected,
    connectionType: status.connectionType,
    isLoading,
  };
}

/**
 * One-shot helper to get the current network status.
 * Returns a promise — use this in non-React contexts.
 */
export async function getNetworkStatus(): Promise<NetworkStatus> {
  if (Capacitor.isNativePlatform()) {
    const { Network } = await import('@capacitor/network');
    const status = await Network.getStatus();
    return {
      isConnected: status.connected,
      connectionType: status.connectionType as ConnectionType,
    };
  }
  return {
    isConnected: navigator.onLine,
    connectionType: navigator.onLine ? 'unknown' : 'none',
  };
}
