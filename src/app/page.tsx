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

export default function Home() {
  return (
    <>
      <Hero />
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
