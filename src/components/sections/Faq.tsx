import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Faq() {
  return (
    <section id="faq" className="max-lg:scroll-mt-0 max-lg:py-0 lg:scroll-mt-24 lg:py-20 sm:py-28">
      <Container className="flex h-full min-h-0 flex-col justify-center">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered."
            description="Straight answers about accounts, offline use, pricing, and platforms."
          />
        </Reveal>
        <Reveal delay={80} className="mx-auto mt-4 w-full max-w-3xl lg:mt-12">
          <FaqAccordion />
        </Reveal>
      </Container>
    </section>
  );
}
