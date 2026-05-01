import {
  startTransition,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
import {
  communityNotes,
  communitySections,
  dashboardLanes,
  groups,
  heroSignals,
  highRiskCalls,
  investmentNotes,
  methods,
  realityCards,
  scamList,
  sheetSections,
  sourceLinks,
  type DashboardLane,
  type Method,
  type RiskLevel,
} from "./content";

const riskFilters: Array<"All" | RiskLevel> = [
  "All",
  "Low",
  "Low-Medium",
  "Medium",
  "Medium-High",
  "High",
];

const navLinks = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Methods", href: "#methods" },
  { label: "Categories", href: "#categories" },
  { label: "Spreadsheet", href: "#spreadsheet" },
  { label: "Community", href: "#community" },
  { label: "Scams", href: "#scams" },
  { label: "Sources", href: "#sources" },
];

const allLane: DashboardLane = {
  id: "all",
  title: "All lanes",
  eyebrow: "Overview",
  summary:
    "One board for build-heavy methods, surveys, passive apps, games, trading, and the high-risk junk that should stay flagged.",
  methodIds: methods.map((method) => method.id),
  links: [
    { label: "Google AdSense", href: "https://adsense.google.com/start/" },
    { label: "Google Play Console", href: "https://play.google.com/console/about/" },
    { label: "AttaPoll", href: "https://attapoll.com/en-us/" },
    { label: "CoinDCX", href: "https://coindcx.com/" },
  ],
};

const laneViews = [allLane, ...dashboardLanes];

function includesQuery(method: Method, query: string) {
  const haystack = [
    method.name,
    method.category,
    method.stance,
    method.blurb,
    method.caution,
    ...method.tips,
    ...(method.links ?? []).map((link) => link.label),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark" as const;
  }

  const savedTheme = window.localStorage.getItem("osh-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? ("dark" as const)
    : ("light" as const);
}

export default function App() {
  const [query, setQuery] = useState("");
  const [activeRisk, setActiveRisk] = useState<"All" | RiskLevel>("All");
  const [activeLane, setActiveLane] = useState("all");
  const [activeMethodId, setActiveMethodId] = useState(methods[0]?.id ?? "");
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("osh-theme", theme);
  }, [theme]);

  const filteredMethods = methods.filter((method) => {
    const matchesRisk = activeRisk === "All" ? true : method.risk === activeRisk;
    const matchesLane = activeLane === "all" ? true : method.lanes.includes(activeLane);
    const matchesQuery = deferredQuery.trim()
      ? includesQuery(method, deferredQuery.trim())
      : true;

    return matchesRisk && matchesLane && matchesQuery;
  });

  useEffect(() => {
    if (!filteredMethods.some((method) => method.id === activeMethodId)) {
      setActiveMethodId(filteredMethods[0]?.id ?? methods[0]?.id ?? "");
    }
  }, [activeMethodId, filteredMethods]);

  const activeLaneInfo =
    laneViews.find((lane) => lane.id === activeLane) ?? laneViews[0];

  const spotlightMethod =
    filteredMethods.find((method) => method.id === activeMethodId) ??
    methods.find((method) => method.id === activeMethodId) ??
    methods[0];

  const highlightedSheetTitle =
    activeLane === "passive"
      ? "Passive income sites"
      : activeLane === "surveys" ||
          activeLane === "high-risk" ||
          activeLane === "trading"
        ? "Task / GPT sites"
        : "";

  return (
    <div className="page-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <div className="topbar panel reveal">
        <div className="brand-lockup">
          <span className="brand-mark">OSH</span>
          <div>
            <p className="eyebrow">Interactive dashboard</p>
            <strong>Online Side Hustles</strong>
          </div>
        </div>

        <nav className="topnav" aria-label="Section navigation">
          {navLinks.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={() => {
            startTransition(() => {
              setTheme((currentTheme) =>
                currentTheme === "dark" ? "light" : "dark",
              );
            });
          }}
          type="button"
        >
          {theme === "dark" ? "Light theme" : "Dark theme"}
        </button>
      </div>

      <header className="hero">
        <div className="hero-copy panel reveal reveal-delay-1">
          <p className="eyebrow">TypeScript money board</p>
          <h1>Cooler UI, darker mode, and actual jump-off links for each lane.</h1>
          <p className="hero-text">
            This version works like a dashboard instead of a long note. You can
            switch lanes like surveys, passive apps, games, trading, and build
            paths, then drill into the methods and links that actually matter.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#methods">
              Open method explorer
            </a>
            <a className="secondary-action" href="#spreadsheet">
              Browse imported sites
            </a>
          </div>

          <div className="signal-strip">
            {heroSignals.map((signal) => (
              <span className="signal-pill" key={signal}>
                {signal}
              </span>
            ))}
          </div>
        </div>

        <aside className="hero-board panel reveal reveal-delay-2">
          <div className="board-topline">
            <span>Lane focus</span>
            <span>{activeLaneInfo.title}</span>
          </div>

          <h2 className="board-title">{activeLaneInfo.summary}</h2>

          <div className="board-metrics">
            <article>
              <span>Visible methods</span>
              <strong>{filteredMethods.length}</strong>
            </article>
            <article>
              <span>Risk filter</span>
              <strong>{activeRisk}</strong>
            </article>
            <article>
              <span>Spotlight</span>
              <strong>{spotlightMethod?.name ?? "None"}</strong>
            </article>
          </div>

          <div className="hero-link-cloud">
            {activeLaneInfo.links.map((link) => (
              <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>

          {activeLaneInfo.warning ? (
            <p className="lane-warning">{activeLaneInfo.warning}</p>
          ) : null}
        </aside>
      </header>

      <main className="main-layout">
        <section className="panel section reveal" id="dashboard">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Lane dashboard</p>
              <h2>Switch between surveys, games, trading, build paths, and the danger zone.</h2>
            </div>

            <p className="section-note">
              The lane buttons below drive the explorer and spotlight panel.
            </p>
          </div>

          <div className="lane-grid">
            {laneViews.map((lane, index) => (
              <button
                className={lane.id === activeLane ? "lane-card active" : "lane-card"}
                key={lane.id}
                onClick={() => {
                  startTransition(() => {
                    setActiveLane(lane.id);
                  });
                }}
                type="button"
              >
                <span className={`lane-chip lane-tone-${(index % 4) + 1}`}>
                  {lane.eyebrow}
                </span>
                <h3>{lane.title}</h3>
                <p>{lane.summary}</p>
                <div className="lane-footer">
                  <span>{lane.methodIds.length} tracked methods</span>
                  <span>{lane.links.length} quick links</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="panel section reveal reveal-delay-1">
          <div className="section-heading">
            <p className="eyebrow">Reality filters</p>
            <h2>Good online income is still a trade-off between time, skill, and risk.</h2>
          </div>

          <div className="metric-grid">
            {realityCards.map((card, index) => (
              <article
                className={`metric-card metric-tone-${index + 1}`}
                key={card.label}
              >
                <p className="metric-label">{card.label}</p>
                <h3>{card.value}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel section reveal reveal-delay-2" id="methods">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Method explorer</p>
              <h2>Search, filter, click a card, and inspect the links behind it.</h2>
            </div>

            <p className="section-note">
              Ranked from higher-upside, lower-risk paths toward weaker or riskier ones.
            </p>
          </div>

          <div className="explorer-layout">
            <div>
              <div className="controls">
                <label className="search-box">
                  <span>Search</span>
                  <input
                    type="search"
                    value={query}
                    placeholder="Try AdSense, AttaPoll, Play Store, CoinDCX, Telegram..."
                    onChange={(event) => {
                      const nextValue = event.target.value;
                      startTransition(() => {
                        setQuery(nextValue);
                      });
                    }}
                  />
                </label>

                <div className="filter-group" aria-label="Risk filters">
                  {riskFilters.map((filter) => (
                    <button
                      className={
                        filter === activeRisk ? "filter-chip active" : "filter-chip"
                      }
                      key={filter}
                      onClick={() => {
                        startTransition(() => {
                          setActiveRisk(filter);
                        });
                      }}
                      type="button"
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="method-grid">
                {filteredMethods.map((method) => (
                  <article
                    className={
                      method.id === spotlightMethod?.id
                        ? "method-card selected"
                        : "method-card"
                    }
                    key={method.id}
                    onClick={() => {
                      startTransition(() => {
                        setActiveMethodId(method.id);
                      });
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        startTransition(() => {
                          setActiveMethodId(method.id);
                        });
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="method-card-top">
                      <div className="rank-badge">#{method.rank}</div>
                      <div className="badge-row">
                        <span className="tone-badge">{method.category}</span>
                        <span className={`risk-badge risk-${slugify(method.risk)}`}>
                          {method.risk} risk
                        </span>
                      </div>
                    </div>

                    <h3>{method.name}</h3>
                    <p className="method-stance">{method.stance}</p>
                    <p className="method-blurb">{method.blurb}</p>

                    <dl className="stat-list">
                      <div>
                        <dt>Money</dt>
                        <dd>{method.income}</dd>
                      </div>
                      <div>
                        <dt>Time to payout</dt>
                        <dd>{method.timeToPayout}</dd>
                      </div>
                      <div>
                        <dt>Skill</dt>
                        <dd>{method.skill}</dd>
                      </div>
                    </dl>

                    <ul className="tip-list">
                      {method.tips.map((tip) => (
                        <li key={tip}>{tip}</li>
                      ))}
                    </ul>

                    {method.links?.length ? (
                      <div className="card-link-row">
                        {method.links.map((link) => (
                          <a
                            className="inline-link"
                            href={link.href}
                            key={link.href}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}

                    <p className="caution-callout">
                      <strong>Watch for:</strong> {method.caution}
                    </p>
                  </article>
                ))}
              </div>

              {!filteredMethods.length ? (
                <div className="empty-state">
                  No matches. Try a broader term or reset the lane and risk filters.
                </div>
              ) : null}
            </div>

            <aside className="focus-panel">
              <p className="eyebrow">Selected method</p>
              <h3>{spotlightMethod?.name}</h3>
              <p className="focus-stance">{spotlightMethod?.stance}</p>
              <p className="focus-copy">{spotlightMethod?.blurb}</p>

              <div className="focus-stats">
                <article>
                  <span>Money</span>
                  <strong>{spotlightMethod?.income}</strong>
                </article>
                <article>
                  <span>Time</span>
                  <strong>{spotlightMethod?.timeToPayout}</strong>
                </article>
                <article>
                  <span>Skill</span>
                  <strong>{spotlightMethod?.skill}</strong>
                </article>
              </div>

              {spotlightMethod?.links?.length ? (
                <div className="focus-link-stack">
                  {spotlightMethod.links.map((link) => (
                    <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}

              <div className="focus-subsection">
                <strong>Practical tips</strong>
                <ul className="tip-list">
                  {spotlightMethod?.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>

              <p className="caution-callout">
                <strong>Main caution:</strong> {spotlightMethod?.caution}
              </p>
            </aside>
          </div>
        </section>

        <section className="section split-section" id="categories">
          <div className="panel reveal">
            <div className="section-heading">
              <p className="eyebrow">Category map</p>
              <h2>Every major bucket now has a direct path out to the platforms behind it.</h2>
            </div>

            <div className="group-stack">
              {groups.map((group, index) => (
                <section
                  className={`group-card reveal reveal-delay-${(index % 3) + 1}`}
                  key={group.title}
                >
                  <div className="group-header">
                    <h3>{group.title}</h3>
                    <p>{group.intro}</p>
                  </div>

                  <div className="group-items">
                    {group.cards.map((card) => (
                      <a
                        className="group-item"
                        href={card.href}
                        key={card.name}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <h4>{card.name}</h4>
                        <p>{card.body}</p>
                        <span>{card.note}</span>
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <div className="panel danger-panel reveal reveal-delay-2">
            <div className="section-heading">
              <p className="eyebrow">High-risk lane</p>
              <h2>Telegram bundles, fake reviews, bad trading hype, and wager loops stay flagged.</h2>
            </div>

            <ul className="danger-list">
              {highRiskCalls.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="panel section reveal" id="spreadsheet">
          <div className="section-heading">
            <p className="eyebrow">Spreadsheet import</p>
            <h2>Imported sites now feel like cards, not a pasted table.</h2>
          </div>

          <div className="sheet-stack">
            {sheetSections.map((section) => {
              const isHighlighted = highlightedSheetTitle === section.title;
              const shouldDim = Boolean(highlightedSheetTitle) && !isHighlighted;

              return (
                <section
                  className={
                    shouldDim
                      ? "sheet-section dimmed"
                      : isHighlighted
                        ? "sheet-section highlighted"
                        : "sheet-section"
                  }
                  key={section.title}
                >
                  <div className="sheet-heading">
                    <div>
                      <h3>{section.title}</h3>
                      <p>{section.intro}</p>
                    </div>
                    <span className="sheet-note">{section.note}</span>
                  </div>

                  <div className="sheet-entry-grid">
                    {section.entries.map((entry) => (
                      <article className="sheet-entry-card" key={entry.name}>
                        <div className="sheet-entry-top">
                          <div>
                            <h4>{entry.name}</h4>
                            <p>{entry.earnings}</p>
                          </div>
                          <span className="min-payout-chip">
                            Min payout {entry.minPayout}
                          </span>
                        </div>

                        <p className="sheet-description">{entry.description}</p>

                        <div className="sheet-meta">
                          <div>
                            <span>Payout methods</span>
                            <strong>{entry.payoutMethods.join(" • ")}</strong>
                          </div>
                        </div>

                        <ul className="sheet-benefits">
                          {entry.benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                          ))}
                        </ul>

                        <div className="sheet-links">
                          {entry.referral ? (
                            <a href={entry.referral} rel="noreferrer" target="_blank">
                              Open referral link
                            </a>
                          ) : (
                            <span className="proof-pending">No direct link added</span>
                          )}
                          {entry.paymentProof.startsWith("http") ? (
                            <a
                              href={entry.paymentProof}
                              rel="noreferrer"
                              target="_blank"
                            >
                              Payment proof
                            </a>
                          ) : (
                            <span className="proof-pending">{entry.paymentProof}</span>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <section className="panel section reveal" id="community">
          <div className="section-heading">
            <p className="eyebrow">Community notes</p>
            <h2>User-contributed earning stacks, archives, and platform lists with clearer labels.</h2>
          </div>

          <div className="note-strip">
            {communityNotes.map((note) => (
              <article className="note-pill" key={note}>
                {note}
              </article>
            ))}
          </div>

          <div className="sheet-stack">
            {communitySections.map((section) => (
              <section className="sheet-section" key={section.title}>
                <div className="sheet-heading">
                  <div>
                    <h3>{section.title}</h3>
                    <p>{section.intro}</p>
                  </div>
                  <span className="sheet-note">{section.note}</span>
                </div>

                <div className="sheet-entry-grid">
                  {section.entries.map((entry) => (
                    <article className="sheet-entry-card" key={`${section.title}-${entry.name}`}>
                      <div className="sheet-entry-top">
                        <div>
                          <h4>{entry.name}</h4>
                          <p>{entry.earnings}</p>
                        </div>
                        <span className="min-payout-chip">
                          Min payout {entry.minPayout}
                        </span>
                      </div>

                      <p className="sheet-description">{entry.description}</p>

                      <div className="sheet-meta">
                        <div>
                          <span>Payout methods</span>
                          <strong>{entry.payoutMethods.join(" • ")}</strong>
                        </div>
                      </div>

                      <ul className="sheet-benefits">
                        {entry.benefits.map((benefit) => (
                          <li key={benefit}>{benefit}</li>
                        ))}
                      </ul>

                      <div className="sheet-links">
                        {entry.referral ? (
                          <a href={entry.referral} rel="noreferrer" target="_blank">
                            Open site
                          </a>
                        ) : (
                          <span className="proof-pending">Name only, no direct link added</span>
                        )}
                        {entry.paymentProof.startsWith("http") ? (
                          <a
                            href={entry.paymentProof}
                            rel="noreferrer"
                            target="_blank"
                          >
                            Payment proof
                          </a>
                        ) : (
                          <span className="proof-pending">{entry.paymentProof}</span>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="panel section reveal" id="scams">
          <div className="section-heading">
            <p className="eyebrow">Scam radar</p>
            <h2>The site should explain the trap, not just wave a warning sign.</h2>
          </div>

          <div className="radar-grid">
            {scamList.map((scam) => (
              <article className="radar-card" key={scam.name}>
                <h3>{scam.name}</h3>
                <p>{scam.detail}</p>
                <div className="signal-line">{scam.signal}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div className="panel reveal reveal-delay-1">
            <div className="section-heading">
              <p className="eyebrow">Investments</p>
              <h2>Trading and crypto are on the board, but they stay in the risk bucket.</h2>
            </div>

            <div className="investment-stack">
              {investmentNotes.map((note) => (
                <article className="investment-note" key={note}>
                  <p>{note}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="panel source-panel reveal reveal-delay-2" id="sources">
            <div className="section-heading">
              <p className="eyebrow">Source links</p>
              <h2>Every major claim should stay one click away from a source.</h2>
            </div>

            <div className="source-list">
              {sourceLinks.map((source) => (
                <a
                  className="source-item"
                  href={source.href}
                  key={source.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <strong>{source.title}</strong>
                  <span>{source.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}
