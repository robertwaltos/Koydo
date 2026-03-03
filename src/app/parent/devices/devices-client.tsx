"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QRCodeCanvas from "react-qrcode-logo";

type Device = {
  id: string;
  device_name: string;
  device_type: string;
  linked_via: string;
  is_active: boolean;
  last_seen_at: string | null;
  created_at: string;
};

const DEVICE_ICONS: Record<string, string> = {
  ios: "📱",
  android: "📱",
  tablet: "📲",
  web: "🌐",
  desktop: "🖥️",
};

function formatDate(d: string | null): string {
  if (!d) return "Never";
  const date = new Date(d);
  return date.toLocaleDateString("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function DevicesClient() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [linkCode, setLinkCode] = useState<string | null>(null);
  const [linkExpiry, setLinkExpiry] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [removing, setRemoving] = useState<string | null>(null);
  const [registering, setRegistering] = useState(false);

  const fetchDevices = useCallback(async () => {
    try {
      const res = await fetch("/api/parent/devices", { cache: "no-store" });
      if (res.ok) {
        const data = (await res.json()) as { devices: Device[] };
        setDevices(data.devices);
      }
    } catch {
      /* silent */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchDevices();
  }, [fetchDevices]);

  const generateQR = async () => {
    setGenerating(true);
    try {
      const res = await fetch("/api/parent/devices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "generate_code" }),
      });
      if (res.ok) {
        const data = (await res.json()) as { linkCode: string; expiresAt: string };
        setLinkCode(data.linkCode);
        setLinkExpiry(data.expiresAt);
      }
    } catch {
      /* silent */
    } finally {
      setGenerating(false);
    }
  };

  const registerThisDevice = async () => {
    setRegistering(true);
    try {
      const res = await fetch("/api/parent/devices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "register",
          userAgent: navigator.userAgent,
        }),
      });
      if (res.ok) {
        await fetchDevices();
      }
    } catch {
      /* silent */
    } finally {
      setRegistering(false);
    }
  };

  const removeDevice = async (deviceId: string) => {
    setRemoving(deviceId);
    try {
      const res = await fetch("/api/parent/devices", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId }),
      });
      if (res.ok) {
        setDevices((prev) => prev.filter((d) => d.id !== deviceId));
      }
    } catch {
      /* silent */
    } finally {
      setRemoving(null);
    }
  };

  const qrUrl = linkCode
    ? `${typeof window !== "undefined" ? window.location.origin : ""}/parent/devices/link?code=${linkCode}`
    : "";

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#697386]">
          Family Portal
        </p>
        <h1 className="mt-1 text-[22px] font-semibold text-[#1a1f36]">
          Connected Devices
        </h1>
        <p className="mt-1 text-[13px] text-[#697386]">
          Link devices to receive notifications and manage your family across all screens
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* ── QR Code Section ─────────────────────────────────────────── */}
        <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-sm">
          <h2 className="text-[14px] font-semibold text-[#1a1f36]">
            Link a New Device
          </h2>
          <p className="mt-1 text-[12px] text-[#697386]">
            Scan the QR code from another device to instantly link it
          </p>

          <div className="mt-5 flex flex-col items-center gap-4">
            {linkCode ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="rounded-2xl border-2 border-[#635bff] p-3">
                  <QRCodeCanvas
                    value={qrUrl}
                    size={200}
                    bgColor="#ffffff"
                    fgColor="#1a1f36"
                    qrStyle="dots"
                    eyeRadius={8}
                  />
                </div>
                <div className="text-center">
                  <p className="text-[13px] font-semibold text-[#1a1f36]">
                    Code: <span className="font-mono tracking-widest text-[#635bff]">{linkCode}</span>
                  </p>
                  {linkExpiry && (
                    <p className="mt-1 text-[11px] text-[#697386]">
                      Expires: {formatDate(linkExpiry)}
                    </p>
                  )}
                </div>
                <button
                  onClick={generateQR}
                  className="text-[12px] font-semibold text-[#635bff] hover:underline"
                >
                  Generate New Code
                </button>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="grid h-[200px] w-[200px] place-items-center rounded-2xl border-2 border-dashed border-[#c4cdd8] bg-[#f6f9fc]">
                  <span className="text-[40px]">📲</span>
                </div>
                <button
                  onClick={generateQR}
                  disabled={generating}
                  className="ui-focus-ring rounded-lg bg-[#635bff] px-6 py-2.5 text-[13px] font-semibold text-white shadow-sm hover:bg-[#5a52f0] disabled:opacity-50"
                >
                  {generating ? "Generating…" : "Generate QR Code"}
                </button>
              </div>
            )}
          </div>

          {/* Or register this device */}
          <div className="mt-6 border-t border-[#e3e8ee] pt-4">
            <button
              onClick={registerThisDevice}
              disabled={registering}
              className="ui-focus-ring w-full rounded-lg border border-[#e3e8ee] bg-[#f6f9fc] py-2.5 text-center text-[13px] font-semibold text-[#3c4257] hover:bg-[#edf0f7] disabled:opacity-50"
            >
              {registering ? "Registering…" : "📍 Register This Device Instead"}
            </button>
          </div>
        </div>

        {/* ── Device List ─────────────────────────────────────────────── */}
        <div className="rounded-xl border border-[#e3e8ee] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-[14px] font-semibold text-[#1a1f36]">
            Your Devices ({devices.filter((d) => d.is_active).length})
          </h2>

          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-16 animate-pulse rounded-lg border border-[#f0f0f5] bg-[#f6f9fc]"
                />
              ))}
            </div>
          ) : devices.filter((d) => d.is_active).length === 0 ? (
            <div className="rounded-lg border border-dashed border-[#c4cdd8] bg-[#f6f9fc] p-6 text-center">
              <p className="text-[13px] text-[#697386]">
                No devices linked yet. Generate a QR code or register this device.
              </p>
            </div>
          ) : (
            <AnimatePresence>
              <div className="space-y-3">
                {devices
                  .filter((d) => d.is_active)
                  .map((device) => (
                    <motion.div
                      key={device.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="flex items-center justify-between rounded-lg border border-[#e3e8ee] bg-white p-4 transition hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[20px]">
                          {DEVICE_ICONS[device.device_type] ?? "📱"}
                        </span>
                        <div>
                          <p className="text-[13px] font-semibold text-[#1a1f36]">
                            {device.device_name}
                          </p>
                          <p className="text-[11px] text-[#697386]">
                            {device.device_type.toUpperCase()} · via {device.linked_via} ·{" "}
                            Last seen {formatDate(device.last_seen_at)}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeDevice(device.id)}
                        disabled={removing === device.id}
                        className="rounded-md border border-red-200 bg-red-50 px-3 py-1 text-[11px] font-semibold text-red-600 hover:bg-red-100 disabled:opacity-50"
                      >
                        {removing === device.id ? "…" : "Remove"}
                      </button>
                    </motion.div>
                  ))}
              </div>
            </AnimatePresence>
          )}

          {/* Instructions */}
          <div className="mt-6 rounded-lg bg-[#f6f9fc] p-4">
            <h3 className="text-[12px] font-semibold text-[#1a1f36]">
              How it works
            </h3>
            <ol className="mt-2 space-y-1.5 text-[11px] text-[#697386]">
              <li>1. Click &quot;Generate QR Code&quot; on this device</li>
              <li>2. Open the camera app on your other device</li>
              <li>3. Scan the QR code — it will open a link</li>
              <li>4. Sign in on the new device to complete pairing</li>
              <li>5. Or enter the 6-digit code manually</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
