"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n/provider";
import { useNetworkStatus } from "@/lib/platform/network-monitor";

export default function OfflineBanner() {
  const { t } = useI18n();
  const { isOnline, isLoading } = useNetworkStatus();
  const [showOnlineMessage, setShowOnlineMessage] = useState(false);
  const wasOfflineRef = useRef(false);

  useEffect(() => {
    if (isLoading) return;

    if (!isOnline) {
      wasOfflineRef.current = true;
      return;
    }

    if (wasOfflineRef.current) {
      const showTimer = window.setTimeout(() => {
        setShowOnlineMessage(true);
      }, 0);
      const hideTimer = window.setTimeout(() => {
        setShowOnlineMessage(false);
      }, 3000);
      wasOfflineRef.current = false;
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [isOnline, isLoading]);

  if (isLoading) {
    return null;
  }

  if (!isOnline) {
    return (
      <div className="sticky top-0 z-50 w-full bg-amber-100 px-4 py-2 text-center text-sm text-amber-900 dark:bg-amber-900/40 dark:text-amber-200">
        {t("offline_banner")}
      </div>
    );
  }

  if (showOnlineMessage) {
    return (
      <div className="sticky top-0 z-50 w-full bg-emerald-100 px-4 py-2 text-center text-sm text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-200">
        {t("online_banner")}
      </div>
    );
  }

  return null;
}
