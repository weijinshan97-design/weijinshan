"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser's native scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // On homepage, always scroll to top
    if (pathname === "/") {
      sessionStorage.removeItem(`scroll-${pathname}`);
      window.scrollTo(0, 0);
      return;
    }

    // Save scroll position before navigating away
    const handleBeforeUnload = () => {
      sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString());
    };

    // Restore scroll position when component mounts
    const savedPosition = sessionStorage.getItem(`scroll-${pathname}`);
    if (savedPosition) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem(`scroll-${pathname}`);
      }, 50);
    }

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]);

  return null;
}
