"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SCROLL_KEY = "home-scroll";

export function ScrollRestoration() {
  const pathname = usePathname();
  const isBack = useRef(false);
  const inited = useRef(false);

  // Disable browser scroll restoration immediately
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // Detect back/forward on first mount
  useEffect(() => {
    if (inited.current) return;
    inited.current = true;
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    isBack.current = nav?.type === "back_forward";
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    if (window.location.hash) {
      sessionStorage.removeItem(SCROLL_KEY);
      return;
    }

    const saved = sessionStorage.getItem(SCROLL_KEY);

    if (isBack.current && saved) {
      const y = parseInt(saved, 10);
      if (y > 0) {
        let attempts = 0;
        const tryScroll = () => {
          if (document.documentElement.scrollHeight >= y || attempts >= 10) {
            window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
            sessionStorage.removeItem(SCROLL_KEY);
            return;
          }
          attempts++;
          requestAnimationFrame(tryScroll);
        };
        requestAnimationFrame(tryScroll);
      }
      isBack.current = false;
    } else {
      sessionStorage.removeItem(SCROLL_KEY);
      // Force to top — run immediately and again after paint
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [pathname]);

  return null;
}
