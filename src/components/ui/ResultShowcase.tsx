"use client";

import { useState, useCallback, useEffect } from "react";

const screens = [
  { title: "找补贴", img: "/images/webp/wbit-carousel-1.webp" },
  { title: "工具合并", img: "/images/webp/wbit-carousel-2.webp" },
  { title: "查风险", img: "/images/webp/wbit-carousel-3.webp" },
  { title: "找客户", img: "/images/webp/wbit-carousel-4.webp" },
  { title: "视觉UI", img: "/images/webp/wbit-carousel-5.webp" },
];

export function ResultShowcase() {
  const [current, setCurrent] = useState(2);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % screens.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + screens.length) % screens.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <div className="relative overflow-hidden py-8">
      {/* Carousel Track */}
      <div className="flex items-center justify-center h-[350px] md:h-[420px]">
        <div
          className="flex items-center gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(50% - ${current * 340}px - 190px))`,
          }}
        >
          {screens.map((screen, i) => {
            const isCenter = i === current;
            const distance = Math.abs(i - current);

            return (
              <div
                key={i}
                className="flex-shrink-0 transition-all duration-500 cursor-pointer"
                style={{
                  width: isCenter ? "480px" : "300px",
                  opacity: distance > 1 ? 0 : isCenter ? 1 : 0.5,
                  filter: isCenter ? "none" : "brightness(0.8)",
                }}
                onClick={() => setCurrent(i)}
              >
                <div
                  className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                    isCenter
                      ? "shadow-[0_25px_80px_-20px_rgba(0,0,0,0.3)] border-2 border-[#fca039]/30"
                      : "shadow-lg border border-gray-100"
                  }`}
                >
                  <img
                    alt={screen.title}
                    className="w-full object-cover transition-all duration-500"
                    src={screen.img}
                    style={{
                      aspectRatio: "1200 / 740",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 active:scale-95 transition-all z-20"
      >
        <span className="material-symbols-outlined text-gray-800 text-2xl">chevron_left</span>
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 active:scale-95 transition-all z-20"
      >
        <span className="material-symbols-outlined text-gray-800 text-2xl">chevron_right</span>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-4">
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-[#fca039] w-8 h-3"
                : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
