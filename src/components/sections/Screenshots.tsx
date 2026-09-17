import { Reveal } from "@/components/Reveal";
import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { Container } from "@/components/Container";

export function Screenshots() {
  return (
    <section id="screenshots" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Screenshots"
            title="Built for the gym floor."
            description="A dark, distraction-free interface designed to stay out of the way while you train."
          />
        </Reveal>
      </Container>
      <Reveal delay={80} className="mt-12">
        <ScreenshotCarousel />
      </Reveal>
    </section>
  );
}
