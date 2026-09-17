import { ComparisonTable } from "@/components/ComparisonTable";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Comparison() {
  return (
    <section id="why" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Compare"
            title="Why IronBuddy?"
            description="Most fitness apps need your email, your attention, and a monthly fee. IronBuddy asks for none of that."
          />
        </Reveal>
        <Reveal delay={90} className="mx-auto mt-12 max-w-4xl">
          <ComparisonTable />
        </Reveal>
      </Container>
    </section>
  );
}
