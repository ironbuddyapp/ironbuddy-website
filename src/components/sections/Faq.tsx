import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered."
            description="Straight answers about accounts, offline use, pricing, and platforms."
          />
        </Reveal>
        <Reveal delay={80} className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion />
        </Reveal>
      </Container>
    </section>
  );
}
