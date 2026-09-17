import { Container } from "@/components/Container";
import { GooglePlayButton } from "@/components/GooglePlayButton";
import { Reveal } from "@/components/Reveal";

export function Download() {
  return (
    <section id="download" className="scroll-mt-24 pb-24 pt-8 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(183,255,42,0.14),transparent_55%)]" />
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Download
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Pay Once. Train Forever.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                One purchase. No subscription. Your workouts stay on your phone — ready every time you walk into the gym.
              </p>
              <div className="mt-8 flex justify-center">
                <GooglePlayButton />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
