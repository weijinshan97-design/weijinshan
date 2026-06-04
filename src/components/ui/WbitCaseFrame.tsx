"use client";

import { useEffect, useRef, useState } from "react";

export function WbitCaseFrame() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(8000);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const resize = () => {
      try {
        const doc = frame.contentDocument;
        if (!doc) return;

        const nextHeight = Math.max(
          doc.documentElement.scrollHeight,
          doc.body?.scrollHeight ?? 0,
        );

        if (nextHeight > 0) {
          setHeight(nextHeight);
        }
      } catch {
        // Cross-origin or other error, keep current height
      }
    };

    frame.addEventListener("load", resize);
    const timer = window.setInterval(resize, 1000);
    window.addEventListener("resize", resize);

    // Initial resize attempts
    setTimeout(resize, 500);
    setTimeout(resize, 1500);
    setTimeout(resize, 3000);

    return () => {
      frame.removeEventListener("load", resize);
      window.clearInterval(timer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <iframe
      ref={frameRef}
      src="/wbit-case-study/index.html"
      title="Wbit AI Agent UX Case Study"
      className="block w-full border-0 bg-[#050606]"
      scrolling="no"
      style={{ height, minHeight: "100vh" }}
    />
  );
}
