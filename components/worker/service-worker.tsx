"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (
      process.env.NODE_ENV !== "development" &&
      "serviceWorker" in navigator
    ) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => {
          console.log("SW registered successfully");
        })
        .catch(() => {
          console.error("SW registration failed");
        });
    }
  }, []);

  return null;
}
