import { AppScreen, PhoneMockup } from "@/components/PhoneMockup";
import { Container } from "@/components/Container";
import { GooglePlayButton } from "@/components/GooglePlayButton";
import { Icon } from "@/components/icons";
import { heroBullets } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />

      <Container className="relative grid items-center gap-12 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="animate-fade-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Your lifelong gym companion.
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            The Workout Tracker That Doesn&apos;t Need an Account.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Offline workout tracking built for lifters who want complete ownership of their data.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {heroBullets.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-white">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <GooglePlayButton />
            <a
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View Features
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:140ms]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-3xl" />
          <PhoneMockup float className="relative">
            <AppScreen id="dashboard" />
          </PhoneMockup>
        </div>
      </Container>
    </section>
  );
}
