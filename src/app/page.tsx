import { Hero } from "@/components/sections/Hero";
import { CapabilitiesNav } from "@/components/sections/CapabilitiesNav";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Systems } from "@/components/sections/Systems";
import { AIWorkflow } from "@/components/sections/AIWorkflow";
import { Thinking } from "@/components/sections/Thinking";
import { ScrollText } from "@/components/sections/ScrollText";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilitiesNav />
      <SelectedWork />
      <Systems />
      <AIWorkflow />
      <Thinking />
      <ScrollText />
      <Contact />
    </>
  );
}
