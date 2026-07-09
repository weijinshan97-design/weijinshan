"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SCROLL_KEY = "home-scroll";

export function ScrollRestoration() {
  const pathname = usePathname();
  const isBack = useRef(false);

  useEffect(() => {
    // Detect back/forward navigation
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type === "back_forward") {
      isBack.current = true;
    }
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    if (window.location.hash) {
      sessionStorage.removeItem(SCROLL_KEY);
      return;
    }

    const saved = sessionStorage.getItem(SCROLL_KEY);

    if (isBack.current && saved) {
      // Back navigation: restore position
      const y = parseInt(saved, 10);
      if (y > 0) {
        let attempts = 0;
        const tryScroll = () => {
          if (document.documentElement.scrollHeight >= y || attempts >= 10) {
            window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
            return;
          }
          attempts++;
          requestAnimationFrame(tryScroll);
        };
        requestAnimationFrame(tryScroll);
      }
      sessionStorage.removeItem(SCROLL_KEY);
      isBack.current = false;
    } else {
      // Fresh load or no saved position: always go to top
      sessionStorage.removeItem(SCROLL_KEY);
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
