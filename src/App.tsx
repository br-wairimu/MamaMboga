import { useState } from "react";

const skills = [
  "Systems Analysis",
  "Alt-Data Modeling",
  "Financial Inclusion Design",
  "Socio-Technical Mapping",
  "Trust Architecture",
  "M-Pesa Integration",
  "Credit Scoring",
  "Informal Economy Research",
];

const bridgeCards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="6" width="10" height="20" rx="2" fill="#C0624A" opacity="0.2" />
        <rect x="3" y="6" width="10" height="20" rx="2" stroke="#C0624A" strokeWidth="1.5" />
        <path d="M7 12h2M7 16h2M7 20h2" stroke="#C0624A" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="19" y="6" width="10" height="20" rx="2" fill="#2B5219" opacity="0.12" />
        <rect x="19" y="6" width="10" height="20" rx="2" stroke="#2B5219" strokeWidth="1.5" />
        <path d="M23 12h2M23 16h2M23 20h2" stroke="#2B5219" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 16h6" stroke="#C0624A" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    ),
    accent: "#C0624A",
    accentBg: "rgba(192,98,74,0.08)",
    label: "Data Integration",
    headline: "M-Pesa history meets community trust",
    body:
      "Transaction velocity, recurrence, and peer vouching signals from rotating savings groups (chamas) are aggregated into a structured, queryable data layer — without requiring a formal bank account.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" fill="#2B5219" opacity="0.1" stroke="#2B5219" strokeWidth="1.5" />
        <path d="M11 16l3.5 3.5L21 11" stroke="#2B5219" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="5" fill="none" stroke="#C0624A" strokeWidth="1" strokeDasharray="3 2" />
      </svg>
    ),
    accent: "#2B5219",
    accentBg: "rgba(43,82,25,0.07)",
    label: "Trust Architecture",
    headline: "Alternative credit scoring for real people",
    body:
      "A weighted scoring model that treats behavioral consistency, supplier relationships, and market tenure as credit signals — producing a portable trust score legible to formal lenders and MFIs.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 24 C 8 8, 24 8, 28 24" stroke="#C0624A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="4" cy="24" r="3" fill="#C0624A" />
        <circle cx="28" cy="24" r="3" fill="#2B5219" />
        <circle cx="16" cy="10" r="3" fill="#E0CBA8" stroke="#C0624A" strokeWidth="1.5" />
        <path d="M13 10l-6 11M19 10l6 11" stroke="#2B5219" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    ),
    accent: "#9E4D38",
    accentBg: "rgba(158,77,56,0.07)",
    label: "Socio-Technical Bridge",
    headline: "Invisible infrastructure for daily traders",
    body:
      "The system maps informal workflows — daily stock purchases, verbal credit arrangements, hawker routes — into structured records without disrupting how Mama Mboga already runs her business.",
  },
];

function FlowDiagram() {
  const [active, setActive] = useState<number | null>(null);

  const steps = [
    {
      id: 0,
      icon: "🧺",
      label: "Informal Vendor",
      sub: "Gikomba Market trader, daily operations",
      color: "#C0624A",
    },
    {
      id: 1,
      icon: "📊",
      label: "Verified Trust Score",
      sub: "Behavioral + transactional signals scored",
      color: "#2B5219",
    },
    {
      id: 2,
      icon: "💳",
      label: "Micro-Financing Access",
      sub: "MFI / mobile lender credit unlock",
      color: "#6B7A3E",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-0 w-full max-w-3xl mx-auto">
      {steps.map((step, i) => (
        <div key={step.id} className="flex flex-col sm:flex-row items-center">
          <button
            onMouseEnter={() => setActive(step.id)}
            onMouseLeave={() => setActive(null)}
            style={{
              borderColor: active === step.id ? step.color : "rgba(192,98,74,0.2)",
              backgroundColor:
                active === step.id
                  ? step.color === "#C0624A"
                    ? "rgba(192,98,74,0.12)"
                    : "rgba(43,82,25,0.1)"
                  : "#F8F2E7",
              transform: active === step.id ? "translateY(-3px)" : "none",
              boxShadow:
                active === step.id
                  ? `0 8px 24px ${step.color}28`
                  : "0 2px 8px rgba(28,23,18,0.06)",
            }}
            className="flex flex-col items-center gap-2 px-6 py-5 rounded-2xl border-2 w-44 transition-all duration-200 cursor-default"
          >
            <span style={{ fontSize: 28 }}>{step.icon}</span>
            <span
              className="text-sm font-semibold text-center leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: step.color,
              }}
            >
              {step.label}
            </span>
            <span
              className="text-xs text-center leading-snug"
              style={{ color: "#5A4F43", fontFamily: "var(--font-body)" }}
            >
              {step.sub}
            </span>
          </button>

          {i < steps.length - 1 && (
            <div className="flex sm:flex-row flex-col items-center sm:mx-2 my-2 sm:my-0">
              <div
                className="hidden sm:flex items-center gap-1"
                style={{ color: "#C0624A" }}
              >
                <div
                  className="h-px w-10"
                  style={{ background: "linear-gradient(90deg, #C0624A55, #C0624A)" }}
                />
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="#C0624A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="sm:hidden flex flex-col items-center" style={{ color: "#C0624A" }}>
                <div
                  className="w-px h-8"
                  style={{ background: "linear-gradient(180deg, #C0624A55, #C0624A)" }}
                />
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: "rotate(90deg)" }}>
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="#C0624A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(160deg, #F0E3C8 0%, #EDD9B5 60%, #E8D5A8 100%)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        {/* decorative background blobs */}
        <div
          className="absolute -top-16 -right-16 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #C0624A 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-20 w-64 h-64 rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #2B5219 0%, transparent 70%)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase"
              style={{
                background: "rgba(192,98,74,0.12)",
                color: "#C0624A",
                fontFamily: "var(--font-mono)",
                border: "1px solid rgba(192,98,74,0.25)",
              }}
            >
              Systems Design Initiative
            </span>
          </div>

          <h1
            className="text-5xl sm:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "#1C1712" }}
          >
            Mama Mboga
          </h1>
          <p
            className="text-lg sm:text-2xl font-light mb-3 italic"
            style={{ fontFamily: "var(--font-display)", color: "#9E4D38" }}
          >
            Informal Trader Creditworthiness &amp; Trust Architecture
          </p>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#5A4F43" }}
          >
            Turning trust into creditworthiness for Kenya's informal market economy.
          </p>

          {/* market-texture strip */}
          <div
            className="mt-10 mx-auto w-24 h-1 rounded-full"
            style={{ background: "linear-gradient(90deg, #C0624A, #2B5219)" }}
          />
        </div>
      </section>

      {/* ── THE GAP ── */}
      <section className="px-6 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-3xl px-8 py-10 sm:px-12 sm:py-12 relative overflow-hidden"
            style={{
              background: "#2B5219",
              boxShadow: "0 4px 32px rgba(43,82,25,0.18)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, #F0E3C8, transparent 70%)", transform: "translate(30%, -30%)" }}
            />
            <p
              className="text-xs font-medium tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "rgba(240,227,200,0.55)" }}
            >
              The Gap
            </p>
            <h2
              className="text-2xl sm:text-3xl font-semibold mb-5 leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "#F0E3C8" }}
            >
              Visible income. Invisible credit.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "rgba(240,227,200,0.8)" }}>
              Vendors at Gikomba Market and Wakulima Market move real money daily — restocking inventory,
              extending peer credit, and managing seasonal cash flows — yet hold no collateral, audited
              financial statements, or formal bank history recognized by conventional lenders.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mt-4" style={{ color: "rgba(240,227,200,0.75)" }}>
              This invisibility isn't economic reality. It's a data problem — and a design challenge.
              Despite provable, recurring income activity, 83% of Kenya's informal traders remain
              outside the formal credit system, locked out by instruments built for a different economy.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE BRIDGE ── */}
      <section className="px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs font-medium tracking-widest uppercase mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "#C0624A" }}
            >
              The Bridge
            </p>
            <h2
              className="text-3xl sm:text-4xl font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "#1C1712" }}
            >
              Three pillars of the architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {bridgeCards.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl p-7 flex flex-col gap-4 transition-shadow duration-200 hover:shadow-lg"
                style={{
                  background: "#F8F2E7",
                  border: `1.5px solid ${card.accentBg}`,
                  boxShadow: "0 2px 12px rgba(28,23,18,0.06)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: card.accentBg }}
                >
                  {card.icon}
                </div>
                <div>
                  <p
                    className="text-xs font-medium tracking-widest uppercase mb-1"
                    style={{ fontFamily: "var(--font-mono)", color: card.accent }}
                  >
                    {card.label}
                  </p>
                  <h3
                    className="text-lg font-semibold leading-snug mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "#1C1712" }}
                  >
                    {card.headline}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5A4F43" }}>
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEM OUTCOME ── */}
      <section className="px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-mono)", color: "#C0624A" }}
          >
            System Outcome
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold mb-12"
            style={{ fontFamily: "var(--font-display)", color: "#1C1712" }}
          >
            From invisible to investable
          </h2>

          <div
            className="rounded-3xl px-6 py-12 sm:py-14"
            style={{
              background: "linear-gradient(135deg, #F8F2E7 0%, #EDD9B5 100%)",
              border: "1.5px solid rgba(192,98,74,0.15)",
              boxShadow: "0 4px 24px rgba(28,23,18,0.07)",
            }}
          >
            <FlowDiagram />

            <p
              className="mt-10 text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "#5A4F43", fontFamily: "var(--font-body)" }}
            >
              The trust score is portable, auditable, and designed to grow — incentivizing
              consistent market participation and building a credit history that travels with
              the vendor, not the institution.
            </p>
          </div>
        </div>
      </section>

      {/* ── SKILLS DEMONSTRATED ── */}
      <section className="px-6 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-mono)", color: "#C0624A" }}
          >
            Skills Demonstrated
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-8"
            style={{ fontFamily: "var(--font-display)", color: "#1C1712" }}
          >
            Capabilities this project represents
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 hover:scale-105 cursor-default"
                style={{
                  background: i % 3 === 0
                    ? "rgba(192,98,74,0.12)"
                    : i % 3 === 1
                    ? "rgba(43,82,25,0.1)"
                    : "rgba(224,203,168,0.6)",
                  color: i % 3 === 0 ? "#9E4D38" : i % 3 === 1 ? "#2B5219" : "#5A4F43",
                  border: `1px solid ${
                    i % 3 === 0
                      ? "rgba(192,98,74,0.2)"
                      : i % 3 === 1
                      ? "rgba(43,82,25,0.18)"
                      : "rgba(90,79,67,0.15)"
                  }`,
                  fontFamily: "var(--font-body)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="mt-4 px-6 py-10 sm:py-12"
        style={{ borderTop: "1px solid rgba(192,98,74,0.18)" }}
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ color: "#5A4F43" }}>
          <div className="text-center sm:text-left">
            <span style={{ fontFamily: "var(--font-display)", color: "#1C1712", fontWeight: 600 }}>
              Mama Mboga
            </span>{" "}
            — Trust Architecture for Kenya's Informal Economy
          </div>
          <p className="text-center sm:text-right" style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#5A4F43" }}>
            Research foundation: Health-Sync Supply Chain Analysis.{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-terracotta transition-colors"
              style={{ color: "#C0624A" }}
            >
              More on GitHub ↗
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
