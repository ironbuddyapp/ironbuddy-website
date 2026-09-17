import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "IronBuddy does not require an account, does not store your data in the cloud, and does not sell or advertise against your information.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | IronBuddy",
    description:
      "IronBuddy does not require an account, does not store your data in the cloud, and does not sell or advertise against your information.",
    url: `${siteConfig.url}/privacy`,
    images: [siteConfig.ogImage],
  },
};

const sections = [
  {
    title: "1. Introduction",
    body: [
      "IronBuddy (“we”, “us”, or “the app”) is an Android workout tracker designed around a simple idea: your training data belongs to you. This Privacy Policy explains what information IronBuddy handles, where it lives, and what we do not do with it.",
      "By installing or using IronBuddy, you agree to this policy. If you do not agree, please do not use the app.",
    ],
  },
  {
    title: "2. No account required",
    body: [
      "IronBuddy does not require you to create an account. We do not ask for an email address, username, password, phone number, or social login to use the core features of the app.",
      "Because there is no IronBuddy account, we do not maintain a user profile on our servers and we cannot look up your workouts, body metrics, or training history.",
    ],
  },
  {
    title: "3. Local storage only",
    body: [
      "Workout logs, training splits, estimated strength progress, body metrics, notes, and related app settings are stored locally on your device.",
      "We do not operate a user cloud. We do not sync your training data to IronBuddy servers. If you uninstall the app or clear its data without exporting first, that local information may be permanently lost from the device.",
    ],
  },
  {
    title: "4. No cloud storage of training data",
    body: [
      "IronBuddy is built offline-first. Your sets, reps, weights, programs, and body measurements are not uploaded to a remote database that we control.",
      "If you choose to export your data, the export file is created on your device so you can store or transfer it yourself. We do not receive a copy of that export unless you independently choose to send it to us (for example, as an attachment when contacting support).",
    ],
  },
  {
    title: "5. Information we do not collect",
    body: [
      "We do not collect your workout history, body weight, body fat percentage, exercise notes, or other training content for advertising, analytics products, or resale.",
      "We do not sell user data. We do not share training data with data brokers. We do not build advertising profiles from your gym activity.",
    ],
  },
  {
    title: "6. No third-party advertising",
    body: [
      "IronBuddy does not show third-party ads. We do not integrate advertising SDKs to track you across apps or websites for marketing.",
      "The app is offered as a one-time purchase. We do not monetize the product through advertising against your attention or your data.",
    ],
  },
  {
    title: "7. App store and device information",
    body: [
      "When you download IronBuddy from Google Play, Google may process information according to Google’s own policies (for example, purchase records, device compatibility, and crash reports you choose to share with Google).",
      "IronBuddy itself is designed so that your training log stays on-device. Any diagnostics you send through the Play Store or through email are controlled by you at the moment you send them.",
    ],
  },
  {
    title: "8. Permissions",
    body: [
      "IronBuddy may request only the device permissions needed to provide the features you use, such as storing files when you export or import data. We do not request permissions for advertising identifiers or unnecessary location tracking.",
      "You can review and revoke permissions in your Android system settings at any time.",
    ],
  },
  {
    title: "9. Data retention and deletion",
    body: [
      "Because training data is stored locally, retention is under your control. You can delete information inside the app, clear the app’s storage in Android settings, or uninstall IronBuddy.",
      "We do not keep a cloud copy of your workout history that you would need to request we delete, because we do not host that history.",
    ],
  },
  {
    title: "10. Children’s privacy",
    body: [
      "IronBuddy is not directed at children under 13, and we do not knowingly collect personal information from children. If you believe a child has provided us personal information through a support email, contact us and we will delete that correspondence.",
    ],
  },
  {
    title: "11. International users",
    body: [
      "IronBuddy is intended to keep your training data on the device you use. We do not operate a global user database of workout logs. If you contact us by email, that message is processed where we read support mail.",
    ],
  },
  {
    title: "12. Changes to this policy",
    body: [
      "We may update this Privacy Policy to reflect product changes or legal requirements. The “Last updated” date at the top of this page will change when we do. Continued use of IronBuddy after an update means you accept the revised policy.",
    ],
  },
  {
    title: "13. Contact",
    body: [
      `If you have questions about privacy, email ${siteConfig.contactEmail}.`,
      "Please do not send passwords or unnecessary personal documents. IronBuddy support does not need access to your Google account to answer questions about local data.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main id="main" className="pb-24 pt-12 sm:pt-16">
      <Container>
        <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: September 17, 2026</p>
        <p className="mt-6 text-base leading-relaxed text-muted">
          IronBuddy is a privacy-first workout tracker. There is no account, no cloud locker for your
          training log, no third-party advertising, and no sale of user data. What you lift stays on
          your phone.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold tracking-tight text-white">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-muted sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
        </div>
      </Container>
    </main>
  );
}
