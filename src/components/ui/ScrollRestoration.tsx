"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SCROLL_KEY = "home-scroll";

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    // If there's a hash, let the browser handle it natively
    if (window.location.hash) {
      sessionStorage.removeItem(SCROLL_KEY);
      return;
    }

    // Only restore on back/forward navigation, not fresh load
    const navType = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (!navType || navType.type !== "back_forward") {
      sessionStorage.removeItem(SCROLL_KEY);
      return;
    }

    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (!saved) return;

    const y = parseInt(saved, 10);
    if (y <= 0) return;

    let attempts = 0;
    const maxAttempts = 8;
    const tryScroll = () => {
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight >= y || attempts >= maxAttempts) {
        window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
        sessionStorage.removeItem(SCROLL_KEY);
        return;
      }
      attempts++;
      requestAnimationFrame(tryScroll);
    };
    requestAnimationFrame(tryScroll);
  }, [pathname]);

  return null;
}
