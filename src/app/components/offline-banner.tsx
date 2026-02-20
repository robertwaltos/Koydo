"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n/provider";

export default function OfflineBanner() {
  const { t } = useI18n();
  const [isOnline, setIsOnline] = useState(true);
  const [showOnlineMessage, setShowOnlineMessage] = useState(false);
  const hasInitialized = useRef(false);

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine;
      setIsOnline(online);

      if (hasInitialized.current && online) {
        setShowOnlineMessage(true);
        window.setTimeout(() => setShowOnlineMessage(false), 3000);
      }
    };

    updateOnlineStatus();
    hasInitialized.current = true;

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

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
