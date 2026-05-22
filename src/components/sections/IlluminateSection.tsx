"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "为什么很多设计问题本质上是流程问题？",
    answer:
      "同一个操作重复100次之后，问题不在于操作本身，而在于没有把流程系统化。设计执行只是冰山一角，水面下是协作、规范和工具的缺失。",
  },
  {
    question: "为什么AI出图不能解决所有问题？",
    answer:
      "AI可以生成好看的图，但商业设计需要精确控制——品牌一致性、业务理解、交付协作，这些AI无法替代人的判断。AI应该做执行，人做决策。",
  },
  {
    question: "为什么开始关注自动化？",
    answer:
      "当重复劳动占设计师40%的时间，问题就不是'做得不够快'，而是'流程需要被重新设计'。自动化的目标不是替代设计师，而是把机械劳动省下来，把时间还给创造性工作。",
  },
];

export function IlluminateSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-light font-medium mb-2">
            Questions
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-12">
            我在思考的问题
          </h2>

          <div className="space-y-1">
            {items.map((item, i) => (
              <div key={i} className="border-b border-border-light last:border-b-0">
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === i ? null : i)
                  }
                  className="w-full text-left py-6 group"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span
                      className={`text-lg md:text-xl font-medium leading-relaxed transition-colors duration-500 ${
                        activeIndex === i
                          ? "text-foreground"
                          : "text-muted-light group-hover:text-muted"
                      }`}
                    >
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: activeIndex === i ? 45 : 0 }}
                      className="text-muted-light text-xl shrink-0 mt-0.5"
                    >
                      +
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pb-2">
                          {/* Illuminated answer area */}
                          <div className="p-6 rounded-lg bg-accent-surface border border-accent/10">
                            <p className="text-sm md:text-base text-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
