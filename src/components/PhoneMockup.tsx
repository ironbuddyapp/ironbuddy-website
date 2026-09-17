import { cn } from "@/lib/cn";

export function PhoneMockup({
  children,
  className,
  float = false,
}: {
  children: React.ReactNode;
  className?: string;
  float?: boolean;
}) {
  return (
    <div className={cn("relative mx-auto w-[240px] sm:w-[270px] lg:w-[292px]", className)}>
      <div
        className={cn(
          "relative aspect-[9/19.4] rounded-[2.35rem] border border-white/12 bg-[#070d18] p-[7px] shadow-[0_40px_90px_-24px_rgba(0,0,0,0.85)]",
          float && "animate-float",
        )}
      >
        <div className="pointer-events-none absolute inset-x-16 top-[7px] z-20 h-[22px] rounded-b-2xl bg-black" />
        <div className="relative h-full overflow-hidden rounded-[1.95rem] bg-surface">
          {children}
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 text-[9px] font-medium text-white/80">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-3 rounded-sm bg-white/80" />
        <span className="h-2 w-4 rounded-[3px] border border-white/70">
          <span className="ml-[1px] mt-[1px] block h-1 w-2.5 rounded-[1px] bg-primary" />
        </span>
      </span>
    </div>
  );
}

function ScreenChrome({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col bg-background">
      <StatusBar />
      <div className="px-4 pb-1 pt-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary/90">
          IronBuddy
        </p>
        <h3 className="mt-1 text-[15px] font-semibold tracking-tight text-white">{title}</h3>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden px-4 pb-5 pt-3">{children}</div>
    </div>
  );
}

function Pill({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 text-[8px] font-semibold",
        active ? "bg-primary text-background" : "bg-white/6 text-muted",
      )}
    >
      {children}
    </span>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-white/8 bg-surface p-3", className)}>
      {children}
    </div>
  );
}

export function DashboardScreen() {
  return (
    <ScreenChrome title="Dashboard">
      <div className="space-y-3">
        <Card>
          <p className="text-[9px] text-muted">Today</p>
          <p className="mt-1 text-[13px] font-semibold text-white">Push Day</p>
          <p className="mt-1 text-[10px] text-muted">5 exercises · 18 sets</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
            <div className="h-full w-2/3 rounded-full bg-primary" />
          </div>
        </Card>
        <div className="grid grid-cols-2 gap-2">
          <Card>
            <p className="text-[8px] uppercase tracking-wider text-muted">Week volume</p>
            <p className="mt-1 text-sm font-semibold text-white">12,450 kg</p>
          </Card>
          <Card>
            <p className="text-[8px] uppercase tracking-wider text-muted">Sessions</p>
            <p className="mt-1 text-sm font-semibold text-white">4</p>
          </Card>
        </div>
        <Card>
          <p className="text-[9px] font-medium text-muted">Last session</p>
          <div className="mt-2 space-y-1.5">
            {["Bench Press  80 × 5", "OHP  45 × 6", "Incline DB  28 × 8"].map((row) => (
              <div key={row} className="flex items-center justify-between text-[10px] text-white/90">
                <span>{row.split("  ")[0]}</span>
                <span className="text-primary">{row.split("  ")[1]}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </ScreenChrome>
  );
}

export function LoggingScreen() {
  const sets = [
    { set: 1, kg: "80", reps: "5" },
    { set: 2, kg: "80", reps: "5" },
    { set: 3, kg: "82.5", reps: "4" },
    { set: 4, kg: "82.5", reps: "4" },
  ];

  return (
    <ScreenChrome title="Bench Press">
      <div className="space-y-3">
        <div className="flex gap-1.5">
          <Pill active>Chest</Pill>
          <Pill>Barbell</Pill>
        </div>
        <Card className="p-0">
          <div className="grid grid-cols-[28px_1fr_1fr] border-b border-white/8 px-3 py-2 text-[8px] uppercase tracking-wider text-muted">
            <span>Set</span>
            <span>kg</span>
            <span>Reps</span>
          </div>
          {sets.map((row) => (
            <div
              key={row.set}
              className="grid grid-cols-[28px_1fr_1fr] items-center px-3 py-2 text-[11px] text-white"
            >
              <span className="text-muted">{row.set}</span>
              <span>{row.kg}</span>
              <span>{row.reps}</span>
            </div>
          ))}
        </Card>
        <div className="rounded-full bg-primary py-2 text-center text-[11px] font-semibold text-background">
          Add set
        </div>
        <p className="text-[10px] leading-relaxed text-muted">
          Notes: Pause the last two reps. Felt strong.
        </p>
      </div>
    </ScreenChrome>
  );
}

export function SplitsScreen() {
  const splits = [
    { name: "Push Pull Legs", meta: "6 days · Active", active: true },
    { name: "Upper Lower", meta: "4 days", active: false },
    { name: "Full Body", meta: "3 days", active: false },
    { name: "Custom", meta: "Build your own", active: false },
  ];

  return (
    <ScreenChrome title="Training Splits">
      <div className="space-y-2">
        {splits.map((split) => (
          <Card
            key={split.name}
            className={cn(split.active && "border-primary/40 shadow-[0_0_18px_rgba(183,255,42,0.08)]")}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] font-semibold text-white">{split.name}</p>
                <p className="mt-0.5 text-[9px] text-muted">{split.meta}</p>
              </div>
              {split.active ? <Pill active>On</Pill> : <Pill>Set</Pill>}
            </div>
          </Card>
        ))}
      </div>
    </ScreenChrome>
  );
}

export function ProgressScreen() {
  const bars = [38, 52, 47, 61, 70, 66, 78];

  return (
    <ScreenChrome title="Strength">
      <div className="space-y-3">
        <Card>
          <p className="text-[9px] text-muted">Estimated 1RM · Bench</p>
          <p className="mt-1 text-lg font-semibold tracking-tight text-white">102.5 kg</p>
          <p className="mt-1 text-[10px] text-primary">+4.5 kg this block</p>
          <div className="mt-4 flex h-16 items-end gap-1.5">
            {bars.map((h, i) => (
              <div
                key={i}
                className={cn("flex-1 rounded-sm", i === bars.length - 1 ? "bg-primary" : "bg-white/12")}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </Card>
        <Card>
          <p className="text-[9px] text-muted">Weekly volume</p>
          <p className="mt-1 text-sm font-semibold text-white">18,920 kg</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
            <div className="h-full w-[72%] rounded-full bg-primary" />
          </div>
        </Card>
      </div>
    </ScreenChrome>
  );
}

export function MetricsScreen() {
  return (
    <ScreenChrome title="Body Metrics">
      <div className="space-y-3">
        <Card>
          <p className="text-[9px] text-muted">Body weight</p>
          <p className="mt-1 text-lg font-semibold text-white">82.4 kg</p>
          <svg viewBox="0 0 160 42" className="mt-3 h-10 w-full" aria-hidden="true">
            <path
              d="M0 28 C20 26, 30 18, 48 20 S80 32, 100 18 S140 8, 160 12"
              fill="none"
              stroke="#B7FF2A"
              strokeWidth="2"
            />
          </svg>
        </Card>
        <Card>
          <p className="text-[9px] text-muted">Body fat</p>
          <p className="mt-1 text-lg font-semibold text-white">14.2%</p>
          <p className="mt-1 text-[10px] text-primary">-0.8% in 8 weeks</p>
        </Card>
        <div className="grid grid-cols-2 gap-2">
          <Card>
            <p className="text-[8px] text-muted">Waist</p>
            <p className="mt-1 text-sm font-semibold text-white">81 cm</p>
          </Card>
          <Card>
            <p className="text-[8px] text-muted">Logged</p>
            <p className="mt-1 text-sm font-semibold text-white">24 wks</p>
          </Card>
        </div>
      </div>
    </ScreenChrome>
  );
}

export function LibraryScreen() {
  const exercises = [
    { name: "Barbell Bench Press", tag: "Chest" },
    { name: "Romanian Deadlift", tag: "Posterior" },
    { name: "Overhead Press", tag: "Shoulders" },
    { name: "Lat Pulldown", tag: "Back" },
    { name: "Bulgarian Split Squat", tag: "Legs" },
  ];

  return (
    <ScreenChrome title="Exercise Library">
      <div className="space-y-3">
        <div className="rounded-full border border-white/8 bg-white/4 px-3 py-2 text-[10px] text-muted">
          Search exercises
        </div>
        <div className="space-y-2">
          {exercises.map((item) => (
            <Card key={item.name} className="flex items-center gap-3 py-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-[9px] font-bold text-primary">
                {item.name.slice(0, 1)}
              </span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-medium text-white">{item.name}</p>
                <p className="text-[9px] text-muted">{item.tag}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ScreenChrome>
  );
}

const screens = {
  dashboard: DashboardScreen,
  logging: LoggingScreen,
  splits: SplitsScreen,
  progress: ProgressScreen,
  metrics: MetricsScreen,
  library: LibraryScreen,
} as const;

export function AppScreen({ id }: { id: keyof typeof screens }) {
  const Screen = screens[id];
  return <Screen />;
}
