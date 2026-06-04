"use client";

import { useEffect, useRef, useState } from "react";

export function WbitCaseFrame() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const resize = () => {
      const doc = frame.contentDocument;
      if (!doc) return;

      const nextHeight = Math.max(
        doc.documentElement.scrollHeight,
        doc.body?.scrollHeight ?? 0,
      );

      if (nextHeight > 0) {
        setHeight(nextHeight);
      }
    };

    frame.addEventListener("load", resize);
    // Check periodically but with a shorter interval
    const timer = window.setInterval(resize, 500);
    window.addEventListener("resize", resize);

    // Also try to resize after a short delay
    const initialTimer = setTimeout(resize, 1000);

    return () => {
      frame.removeEventListener("load", resize);
      window.clearInterval(timer);
      window.removeEventListener("resize", resize);
      clearTimeout(initialTimer);
    };
  }, []);

  // Don't render iframe until we have a height, or use a reasonable default
  if (height === 0) {
    return (
      <div className="w-full bg-[#050606]" style={{ minHeight: "100vh" }}>
        <iframe
          ref={frameRef}
          src="/wbit-case-study/index.html"
          title="Wbit AI Agent UX Case Study"
          className="block w-full border-0 bg-[#050606]"
          scrolling="no"
          style={{ height: "100vh" }}
        />
      </div>
    );
  }

  return (
    <iframe
      ref={frameRef}
      src="/wbit-case-study/index.html"
      title="Wbit AI Agent UX Case Study"
      className="block w-full border-0 bg-[#050606]"
      scrolling="no"
      style={{ height }}
    />
  );
}
