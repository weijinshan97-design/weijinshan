import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CapabilitiesNav } from "@/components/sections/CapabilitiesNav";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Systems } from "@/components/sections/Systems";
import { Thinking } from "@/components/sections/Thinking";
import { ScrollText } from "@/components/sections/ScrollText";
import { Contact } from "@/components/sections/Contact";
import { FadeIn } from "@/components/ui/FadeIn";
import { SlideIn } from "@/components/ui/SlideIn";
import { ScrollingText } from "@/components/ui/ScrollingText";

function SectionDivider() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
      <div className="section-divider" />
    </div>
  );
}

function CaseBridge() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-background border-y border-border-light">
      {/* Edge fade masks */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
      <ScrollingText
        text="过往经历沉淀为方法 → 真实项目验证为结果 · 过往经历沉淀为方法 → 真实项目验证为结果 · 过往经历沉淀为方法 → 真实项目验证为结果"
        textEn="EXPERIENCE INTO PRACTICE · EXPERIENCE INTO PRACTICE · EXPERIENCE INTO PRACTICE · EXPERIENCE INTO PRACTICE"
      />
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <CaseBridge />
      </FadeIn>
      <SectionDivider />
      <FadeIn>
        <CapabilitiesNav />
      </FadeIn>
      <SectionDivider />
      <FadeIn>
        <SelectedWork />
      </FadeIn>
      <SectionDivider />
      <FadeIn>
        <Systems />
      </FadeIn>
      <SectionDivider />
      <FadeIn>
        <Thinking />
      </FadeIn>
      <FadeIn>
        <ScrollText />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </>
  );
}
