import { ComparisonTable } from "@/components/ComparisonTable";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Comparison() {
  return (
    <section id="why" className="max-lg:scroll-mt-0 max-lg:py-0 lg:scroll-mt-24 lg:py-20 sm:py-28">
      <Container className="flex h-full min-h-0 flex-col justify-center">
        <Reveal>
          <SectionHeading
            eyebrow="Compare"
            title="Why IronBuddy?"
            description="Most fitness apps need your email, your attention, and a monthly fee. IronBuddy asks for none of that."
          />
        </Reveal>
        <Reveal delay={90} className="mx-auto mt-4 min-h-0 max-w-4xl overflow-y-auto lg:mt-12">
          <ComparisonTable />
        </Reveal>
      </Container>
    </section>
  );
}
