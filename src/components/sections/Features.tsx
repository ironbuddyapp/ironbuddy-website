import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { features } from "@/lib/content";

export function Features() {
  return (
    <section id="features" className="max-lg:scroll-mt-0 max-lg:py-0 lg:scroll-mt-24 lg:py-20 sm:py-28">
      <Container className="flex h-full min-h-0 flex-col justify-center">
        <Reveal>
          <SectionHeading
            eyebrow="Features"
            title="Everything you need. Nothing you don't."
            description="A focused Android toolkit for serious training — logging, programming, progress, and privacy in one quiet interface."
          />
        </Reveal>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-4 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 70}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
