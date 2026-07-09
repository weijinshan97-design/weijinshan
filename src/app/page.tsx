import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CreatorMedia } from "@/components/sections/CreatorMedia";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Systems } from "@/components/sections/Systems";
import { Thinking } from "@/components/sections/Thinking";
import { Contact } from "@/components/sections/Contact";
import { AmbientInteractions } from "@/components/ui/AmbientInteractions";
import { FadeIn } from "@/components/ui/FadeIn";
import { StoryRail } from "@/components/ui/StoryRail";

export default function Home() {
  return (
    <>
      <AmbientInteractions />
      <StoryRail />
      <Hero />
      <FadeIn>
        <SelectedWork />
      </FadeIn>
      <FadeIn>
        <CreatorMedia />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Systems />
      </FadeIn>
      <FadeIn>
        <Thinking />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </>
  );
}
