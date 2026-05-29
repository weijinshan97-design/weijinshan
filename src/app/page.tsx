import { Hero } from "@/components/sections/Hero";
import { CapabilitiesNav } from "@/components/sections/CapabilitiesNav";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Systems } from "@/components/sections/Systems";
import { Thinking } from "@/components/sections/Thinking";
import { ScrollText } from "@/components/sections/ScrollText";
import { Contact } from "@/components/sections/Contact";

function SectionDivider() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
      <div className="section-divider" />
    </div>
  );
}

function CaseBridge() {
  return (
    <section className="bg-background px-6 pb-9 pt-14 md:px-8 md:pb-10 md:pt-16 lg:px-12">
      <div className="mx-auto grid max-w-[1200px] gap-8 border-t border-border/70 pt-8 md:grid-cols-[0.82fr_1.18fr] md:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Experience Into Practice
          </p>
          <p className="mt-4 font-serif text-lg leading-9 text-foreground/85 whitespace-nowrap md:text-2xl">
            过往经历沉淀为方法，真实项目验证为结果。
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <CaseBridge />
      <SectionDivider />
      <CapabilitiesNav />
      <SectionDivider />
      <SelectedWork />
      <SectionDivider />
      <Systems />
      <SectionDivider />
      <Thinking />
      <ScrollText />
      <Contact />
    </>
  );
}
