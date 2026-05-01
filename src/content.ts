export type RiskLevel = "Low" | "Low-Medium" | "Medium" | "Medium-High" | "High";
export type IncomeBand =
  | "Low"
  | "Low-Medium"
  | "Medium"
  | "Medium-High"
  | "High"
  | "Low-Unclear";

export type LinkItem = {
  label: string;
  href: string;
};

export type Method = {
  id: string;
  rank: number;
  name: string;
  category: string;
  income: IncomeBand;
  risk: RiskLevel;
  timeToPayout: string;
  skill: string;
  stance: string;
  blurb: string;
  tips: string[];
  caution: string;
  lanes: string[];
  links?: LinkItem[];
};

export type Group = {
  title: string;
  intro: string;
  cards: Array<{
    name: string;
    body: string;
    note: string;
    href: string;
  }>;
};

export type Scam = {
  name: string;
  detail: string;
  signal: string;
};

export type Source = {
  title: string;
  href: string;
  label: string;
};

export type SheetEntry = {
  name: string;
  referral: string;
  links?: LinkItem[];
  earnings: string;
  description: string;
  benefits: string[];
  payoutMethods: string[];
  minPayout: string;
  paymentProof: string;
};

export type SheetSection = {
  title: string;
  intro: string;
  note: string;
  entries: SheetEntry[];
};

export type DashboardLane = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  methodIds: string[];
  links: LinkItem[];
  warning?: string;
};

export const heroSignals = [
  "Real money usually costs time, skill, or audience-building.",
  "Never pay upfront to unlock earnings, get verified, or receive a payout.",
  "Telegram task groups and fake-review jobs belong in the scam-first bucket.",
];

export const realityCards = [
  {
    label: "Best Long Game",
    value: "Skills + content",
    copy: "Freelance work, self-built apps, AdSense sites, and content engines have the strongest upside without mystery deposits.",
  },
  {
    label: "Fastest Small Cash",
    value: "Surveys + passive apps",
    copy: "AttaPoll, Swagbucks, and passive browser or bandwidth tools can help with pocket money, but they stay inconsistent.",
  },
  {
    label: "Highest Risk",
    value: "Trading + task traps",
    copy: "Telegram tasks, crypto speculation, and wager-style apps can all burn money faster than they create it.",
  },
];

export const methods: Method[] = [
  {
    id: "freelance",
    rank: 1,
    name: "Freelance work",
    category: "Sites",
    income: "High",
    risk: "Low-Medium",
    timeToPayout: "Fast once hired",
    skill: "Medium to high",
    stance: "Best upside if you already have a useful skill.",
    blurb:
      "Writing, design, coding, editing, SEO, marketing, and virtual assistant work beat most low-effort apps because they scale with skill and reputation.",
    tips: [
      "Stay on trusted platforms when possible.",
      "Package clear offers instead of generic 'I can do anything' posts.",
      "Use gig boards like Fiverr and r/forhire carefully.",
    ],
    caution: "Off-platform payment links and fake clients are the biggest risk.",
    lanes: ["build", "skills"],
    links: [
      { label: "Fiverr", href: "https://www.fiverr.com/" },
      { label: "r/forhire", href: "https://www.reddit.com/r/forhire/" },
    ],
  },
  {
    id: "apps",
    rank: 2,
    name: "Coding + app publishing",
    category: "Apps / Platforms",
    income: "High",
    risk: "Medium",
    timeToPayout: "Slow to medium",
    skill: "High",
    stance: "Strong upside if you can build useful apps and distribute them well.",
    blurb:
      "Building your own apps and publishing them to the Play Store can create compounding income through ads, paid upgrades, subscriptions, or small utility sales.",
    tips: [
      "Simple niche tools often outperform giant app ideas.",
      "Monetization can come from ads, premium features, or both.",
      "Play Store policy compliance matters as much as coding skill.",
    ],
    caution: "Ad revenue is not guaranteed, and app discovery is the hard part.",
    lanes: ["build", "apps"],
    links: [
      { label: "Google Play Console", href: "https://play.google.com/console/about/" },
      { label: "Google AdMob", href: "https://admob.google.com/" },
    ],
  },
  {
    id: "adsense-sites",
    rank: 3,
    name: "Self-made websites + AdSense",
    category: "Sites / Build",
    income: "Medium-High",
    risk: "Low-Medium",
    timeToPayout: "Slow build",
    skill: "Medium to high",
    stance: "A real long-term lane if you can build useful pages and attract search traffic.",
    blurb:
      "Owning websites lets you earn from Google AdSense, affiliate links, sponsorships, and digital products, but it usually takes months of content and traffic work first.",
    tips: [
      "Niche websites beat broad 'everything' blogs.",
      "AdSense works better once traffic is consistent.",
      "Useful tools, calculators, directories, and guides can outperform thin articles.",
    ],
    caution: "Traffic takes time, and low-quality content can kill the model fast.",
    lanes: ["build", "content"],
    links: [{ label: "Google AdSense", href: "https://adsense.google.com/start/" }],
  },
  {
    id: "bug-bounty",
    rank: 4,
    name: "Bug bounty / vulnerability research",
    category: "Security / Build",
    income: "High",
    risk: "Low-Medium",
    timeToPayout: "Slow to medium",
    skill: "High",
    stance: "Insane payouts are possible, but only with real technical depth and patience.",
    blurb:
      "Bug bounty is one of the few online methods where a single finding can beat months of survey or task income, but the barrier is high and the payout path is uneven.",
    tips: [
      "Learn web, API, auth, and mobile security before chasing payouts.",
      "Consistency matters more than jackpot thinking.",
      "Use recognized platforms instead of random private bounty pitches.",
    ],
    caution: "Huge prize stories are real, but most people earn nothing until their skill is strong enough.",
    lanes: ["build", "skills"],
    links: [
      { label: "HackerOne", href: "https://www.hackerone.com/" },
      { label: "Bugcrowd", href: "https://www.bugcrowd.com/" },
    ],
  },
  {
    id: "tutoring",
    rank: 5,
    name: "Online tutoring",
    category: "Sites",
    income: "Medium-High",
    risk: "Low-Medium",
    timeToPayout: "Medium",
    skill: "Medium",
    stance: "Solid if you actually know a subject well.",
    blurb:
      "Chegg-style tutoring and subject coaching work better than random microtasks because you are paid for expertise, not clicks.",
    tips: [
      "Focus on one subject instead of broad academic claims.",
      "Expect ratings and demand to take time.",
      "Use tutoring platforms as credibility layers, not magic traffic sources.",
    ],
    caution: "Homework-help requests can drift into academic-integrity or scam issues.",
    lanes: ["skills"],
    links: [{ label: "Chegg", href: "https://www.chegg.com/" }],
  },
  {
    id: "youtube",
    rank: 6,
    name: "YouTube channel",
    category: "Apps / Platforms",
    income: "Medium-High",
    risk: "Low-Medium",
    timeToPayout: "Slow start",
    skill: "Medium",
    stance: "Slow to start but strong long-term upside.",
    blurb:
      "YouTube can stack multiple monetization layers: ads, sponsors, affiliate links, memberships, and product sales.",
    tips: [
      "Pick a repeatable niche before you chase monetization.",
      "Useful or entertaining formats outperform 'make money fast' channels over time.",
      "Treat consistency as the actual moat.",
    ],
    caution: "Do not assume views equal income early on.",
    lanes: ["content", "social"],
    links: [{ label: "YouTube", href: "https://www.youtube.com/" }],
  },
  {
    id: "social",
    rank: 7,
    name: "Social media pages",
    category: "Social Media",
    income: "Medium-High",
    risk: "Medium",
    timeToPayout: "Slow to medium",
    skill: "Medium",
    stance: "Can pay well, but audience-building is the hard part.",
    blurb:
      "Twitter/X, Facebook, and Instagram work best when they support a niche, not when they chase random viral clips with no business attached.",
    tips: [
      "Turn attention into sponsors, affiliates, communities, or products.",
      "Instagram works well for creator pages, faceless themes, and UGC.",
      "Facebook still matters for groups and local-service leads.",
    ],
    caution: "Fake sponsorship and fake ambassador offers are common.",
    lanes: ["social", "content"],
    links: [
      { label: "X", href: "https://x.com/" },
      { label: "Facebook", href: "https://www.facebook.com/" },
      { label: "Instagram", href: "https://www.instagram.com/" },
    ],
  },
  {
    id: "digital-products",
    rank: 8,
    name: "Digital products + affiliate content",
    category: "Others",
    income: "Medium",
    risk: "Low-Medium",
    timeToPayout: "Slow build",
    skill: "Medium",
    stance: "Works better as a layer on top of content or niche expertise.",
    blurb:
      "Templates, ebooks, prompts, printables, presets, mini-courses, and newsletters can scale better than hourly work after the creation phase.",
    tips: [
      "Attach products to a niche where trust already exists.",
      "Use affiliate links only where they fit naturally.",
      "Think compounding, not instant cash.",
    ],
    caution: "Most people overestimate how fast digital products sell without distribution.",
    lanes: ["content", "build"],
    links: [
      { label: "YouTube", href: "https://www.youtube.com/" },
      { label: "Google AdSense", href: "https://adsense.google.com/start/" },
    ],
  },
  {
    id: "bandwidth",
    rank: 9,
    name: "Internet-sharing / bandwidth-sharing",
    category: "Sites",
    income: "Low",
    risk: "Medium",
    timeToPayout: "Slow",
    skill: "Low",
    stance: "Passive, but payouts are usually tiny.",
    blurb:
      "These platforms are often pitched as easy money, but privacy, bandwidth use, electricity cost, and trust matter more than the ad copy suggests.",
    tips: [
      "Treat it as side cash, not income.",
      "Read platform terms and privacy details closely.",
      "Check whether the usage is even worth the wear and bandwidth.",
    ],
    caution: "Passive does not mean low-consequence.",
    lanes: ["passive"],
    links: [
      { label: "EarnApp", href: "https://earnapp.com/i/J9XF4PXJ" },
      { label: "Honeygain", href: "https://r.honeygain.me/SAMUEC73" },
    ],
  },
  {
    id: "surveys",
    rank: 10,
    name: "Survey and rewards apps",
    category: "Apps",
    income: "Low",
    risk: "Low-Medium",
    timeToPayout: "Fast when available",
    skill: "Low",
    stance: "Useful for extra cash, not serious income.",
    blurb:
      "AttaPoll and Swagbucks can pay via PayPal and gift vouchers in many regions, but survey supply fluctuates and screenouts are part of the game.",
    tips: [
      "Complete your profile accurately and keep answers consistent.",
      "Turn on notifications and check multiple times a day.",
      "Expect dry days with few or zero good matches.",
    ],
    caution: "Faking age, salary, job, or household data can trigger rejections or bans.",
    lanes: ["surveys"],
    links: [
      { label: "AttaPoll", href: "https://attapoll.com/en-us/" },
      { label: "Swagbucks", href: "https://www.swagbucks.com/" },
    ],
  },
  {
    id: "rewards-points",
    rank: 11,
    name: "Rewards points + gift cards",
    category: "Rewards",
    income: "Low",
    risk: "Low",
    timeToPayout: "Slow and steady",
    skill: "Low",
    stance: "Low-risk pocket rewards through search, steps, and matched surveys.",
    blurb:
      "Microsoft Rewards through Bing, YouGov, and step-based apps like WeWard are better treated as slow reward programs than real income streams.",
    tips: [
      "Point values and redemption costs change by region and over time.",
      "This is best for gift cards and small rewards, not rent money.",
      "Use it as a side layer while doing other low-risk methods.",
    ],
    caution: "Reward thresholds can move, and the effective hourly rate is usually low.",
    lanes: ["surveys", "passive"],
    links: [
      {
        label: "Microsoft Rewards",
        href: "https://www.microsoft.com/en-us/rewards/about",
      },
      { label: "YouGov", href: "https://yougov.com/" },
      {
        label: "WeWard",
        href: "https://play.google.com/store/apps/details?hl=en_US&id=com.weward",
      },
    ],
  },
  {
    id: "gaming",
    rank: 12,
    name: "Gaming side hustles",
    category: "Games",
    income: "Low-Medium",
    risk: "Medium-High",
    timeToPayout: "Slow",
    skill: "Medium to high",
    stance: "Usually needs real skill, content, or audience.",
    blurb:
      "Game testing, guides, coaching, and streaming are more realistic than most play-to-earn claims.",
    tips: [
      "Lean toward coaching, testing, or content instead of token hype.",
      "Audience-backed gaming income is stronger than marketplace flipping.",
      "Assume most 'easy' gaming income offers are exaggerated.",
    ],
    caution: "Account sales and off-market item trades are scam-heavy.",
    lanes: ["games"],
    links: [
      {
        label: "Google Play Games",
        href: "https://play.google.com/store/apps/details?id=com.google.android.play.games",
      },
    ],
  },
  {
    id: "trading",
    rank: 13,
    name: "Trading / crypto speculation",
    category: "Investments",
    income: "Low-Unclear",
    risk: "High",
    timeToPayout: "Fast or negative",
    skill: "High",
    stance: "Possible upside, frequent losses, and no reliable floor.",
    blurb:
      "Trading crypto or short-term price moves can produce profits, but for most people it behaves more like a high-risk speculative activity than a side hustle.",
    tips: [
      "Assume loss is part of the base case, not an edge case.",
      "Platform trust matters, but platform trust does not remove market risk.",
      "If a strategy sounds guaranteed, it probably exists to sell you something.",
    ],
    caution: "Leverage, hype, and 'signals' can empty an account quickly.",
    lanes: ["trading", "high-risk"],
    links: [
      { label: "CoinDCX", href: "https://coindcx.com/" },
      {
        label: "FTC crypto scam warning",
        href: "https://consumer.ftc.gov/spotting-cryptocurrency-investment-scams",
      },
    ],
  },
  {
    id: "rummy",
    rank: 14,
    name: "Rummy / wagering apps",
    category: "Games / Wagering",
    income: "Low-Unclear",
    risk: "High",
    timeToPayout: "Fast or negative",
    skill: "Medium",
    stance: "Treat it as gambling-style risk, not dependable income.",
    blurb:
      "Real-money rummy and similar wager apps can feel like earning because money moves fast, but the downside is just as fast and usually much more reliable.",
    tips: [
      "Do not classify wagering as stable income.",
      "Short winning streaks often hide the long-run loss pattern.",
      "If you play at all, keep it in the entertainment bucket.",
    ],
    caution: "Fast cashout loops are exactly what make these apps easy to overplay.",
    lanes: ["games", "high-risk"],
  },
  {
    id: "task-groups",
    rank: 15,
    name: "Telegram or WhatsApp task groups",
    category: "High risk",
    income: "Low-Unclear",
    risk: "High",
    timeToPayout: "Unclear",
    skill: "Low",
    stance: "Most are unreliable, deceptive, or scam-heavy.",
    blurb:
      "These groups often promise small payments for account creation, review work, AI content tasks, or simple clicks, then use that early activity to build trust.",
    tips: [
      "A tiny starter payout does not prove legitimacy.",
      "Never deposit money, buy crypto, or pay unlock fees.",
      "Assume the risk goes up the moment the group adds urgency or secrecy.",
    ],
    caution: "FTC warnings specifically call out task scams that start on WhatsApp or Telegram.",
    lanes: ["high-risk"],
    links: [
      {
        label: "FTC task scam warning",
        href: "https://consumer.ftc.gov/consumer-alerts/2025/08/how-spot-and-avoid-task-scams",
      },
    ],
  },
];

export const groups: Group[] = [
  {
    title: "Social media",
    intro:
      "Audience businesses are slower than quick-task apps, but they are much easier to defend long term if you build real trust.",
    cards: [
      {
        name: "Twitter / X",
        body: "Strong for niche commentary, threads, affiliate angles, and community-led offers.",
        note: "Best when tied to a specific topic instead of generic motivation posts.",
        href: "https://x.com/",
      },
      {
        name: "Facebook",
        body: "Useful for groups, communities, local lead generation, and service-based opportunities.",
        note: "Marketplace and listing scams are common, so separate community building from shady flipping.",
        href: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        body: "Works well for reels, creator pages, faceless themes, UGC work, and visual affiliate content.",
        note: "Fake sponsorship and ambassador offers are one of the platform's oldest traps.",
        href: "https://www.instagram.com/",
      },
    ],
  },
  {
    title: "Sites",
    intro:
      "The safer internet money methods usually involve actual work: skill exchange, tutoring, service delivery, or community reputation.",
    cards: [
      {
        name: "Fiverr",
        body: "Useful for productized services and packaged offers with clear deliverables.",
        note: "Never click external payment links or move the deal off-platform early.",
        href: "https://www.fiverr.com/",
      },
      {
        name: "Self-made websites + AdSense",
        body: "A stronger long-term play if you can build niche websites, tools, or content pages that actually attract repeat traffic.",
        note: "AdSense is traffic-dependent. The website matters first, the ad code comes later.",
        href: "https://adsense.google.com/start/",
      },
      {
        name: "Bug bounty",
        body: "One of the highest-upside technical lanes online, but it only works if you build real security depth instead of chasing headline bounty stories.",
        note: "High skill, uneven payouts, zero guaranteed floor.",
        href: "https://www.hackerone.com/",
      },
      {
        name: "Chegg-style tutoring",
        body: "Better for users with subject knowledge than for people chasing fast, low-effort cash.",
        note: "Expect a slower reputation curve than random survey apps.",
        href: "https://www.chegg.com/",
      },
      {
        name: "r/forhire",
        body: "A live community board for gigs across writing, editing, design, development, and odd online jobs.",
        note: "Post quality varies. If the offer sounds too easy for the pay, treat it as suspect.",
        href: "https://www.reddit.com/r/forhire/",
      },
      {
        name: "Internet-sharing",
        body: "Occasionally used for passive cash, but the payout-to-risk ratio is usually weak.",
        note: "Read the privacy and network impact details before touching it.",
        href: "https://r.honeygain.me/SAMUEC73",
      },
    ],
  },
  {
    title: "Apps",
    intro:
      "Apps are easy to start and easy to overestimate. The difference between pocket money and real income is usually much larger than people expect.",
    cards: [
      {
        name: "AttaPoll",
        body: "Often pays better per survey than many mainstream reward apps, with PayPal and voucher options in many regions.",
        note: "Optional referral code: oafzl. Use accurate profile details and expect screenouts.",
        href: "https://attapoll.com/en-us/",
      },
      {
        name: "Swagbucks",
        body: "Works across surveys, cashback, and offer walls, with payouts often available via PayPal and vouchers.",
        note: "Good for stacking small tasks, not for replacing real income.",
        href: "https://www.swagbucks.com/",
      },
      {
        name: "YouTube",
        body: "The strongest long-term app-based model here because it can stack ads, sponsors, affiliates, and products.",
        note: "The hard part is not setup. It is staying useful long enough to compound.",
        href: "https://www.youtube.com/",
      },
      {
        name: "Microsoft Rewards",
        body: "Bing and Microsoft account activity can stack into gift cards and small redemptions over time without direct monetary risk.",
        note: "Useful for small gift-card goals, not serious monthly income.",
        href: "https://www.microsoft.com/en-us/rewards/about",
      },
      {
        name: "Play Store apps",
        body: "Coding your own apps can create ad-driven or freemium income that scales better than hourly work once a useful app finds users.",
        note: "Publishing is easy. Getting installs and keeping policy compliance is the real work.",
        href: "https://play.google.com/console/about/",
      },
      {
        name: "AdMob for app ads",
        body: "If the app is free, ads are usually the first monetization layer people test before subscriptions or paid upgrades.",
        note: "AdMob is the direct Google route for in-app ads.",
        href: "https://admob.google.com/",
      },
    ],
  },
  {
    title: "Games + risk",
    intro:
      "Games can turn into money only when there is skill, distribution, or an audience behind them. The closer it gets to wagering, the weaker it becomes as an income strategy.",
    cards: [
      {
        name: "Play Games ecosystem",
        body: "Useful for spotting game-driven content angles, testing trends, and understanding what players actually spend time on.",
        note: "Good for content and research. Not automatic income.",
        href: "https://play.google.com/store/apps/details?id=com.google.android.play.games",
      },
      {
        name: "Trading / crypto",
        body: "Some people treat trading as an earning lane, but the risk profile is closer to speculation than dependable side income.",
        note: "Use risk language, not promise language.",
        href: "https://coindcx.com/",
      },
      {
        name: "Rummy / wagering",
        body: "These apps move money quickly, which is exactly why they should be classified as gambling-style risk rather than normal earning.",
        note: "Short-term wins are not proof of a good model.",
        href: "https://consumer.ftc.gov/spotting-cryptocurrency-investment-scams",
      },
    ],
  },
];

export const dashboardLanes: DashboardLane[] = [
  {
    id: "build",
    title: "Build + publish",
    eyebrow: "High upside",
    summary:
      "Best lane for long-term compounding: freelance skills, AdSense sites, Play Store apps, and products you own.",
    methodIds: ["freelance", "apps", "adsense-sites", "digital-products"],
    links: [
      { label: "Google AdSense", href: "https://adsense.google.com/start/" },
      { label: "Google Play Console", href: "https://play.google.com/console/about/" },
      { label: "HackerOne", href: "https://www.hackerone.com/" },
      { label: "Google AdMob", href: "https://admob.google.com/" },
    ],
  },
  {
    id: "surveys",
    title: "Surveys",
    eyebrow: "Fast small cash",
    summary:
      "Good for small payouts, bad for predictability. This is where AttaPoll, Swagbucks, and GPT-style survey stacks live.",
    methodIds: ["surveys"],
    links: [
      { label: "AttaPoll", href: "https://attapoll.com/en-us/" },
      { label: "Swagbucks", href: "https://www.swagbucks.com/" },
      { label: "ySense", href: "https://www.ysense.com/?rb=129358291" },
      { label: "FreeCash", href: "https://freecash.com/r/73754b483d" },
      { label: "Microsoft Rewards", href: "https://www.microsoft.com/en-us/rewards/about" },
      {
        label: "Prime Opinion",
        href: "https://primeopinion.com/register?ref=9eb693d7-d6b3-4f30-9581-6effb7b70e76",
      },
    ],
  },
  {
    id: "passive",
    title: "Passive apps",
    eyebrow: "Low effort",
    summary:
      "Bandwidth and browser tools can run quietly in the background, but the payout-to-risk ratio is usually modest.",
    methodIds: ["bandwidth"],
    links: [
      { label: "EarnApp", href: "https://earnapp.com/i/J9XF4PXJ" },
      { label: "Honeygain", href: "https://r.honeygain.me/SAMUEC73" },
      { label: "PawnsApp", href: "https://pawns.app/?r=1112060" },
      { label: "Slice", href: "https://addslice.com/?crew=tS1P3dO4" },
      { label: "ByteLixir", href: "https://bytelixir.com/r/F8UM7WKUQHRZ" },
    ],
  },
  {
    id: "social",
    title: "Social + content",
    eyebrow: "Audience play",
    summary:
      "YouTube, Instagram, Facebook, and X only turn serious when they connect to sponsors, affiliates, or products.",
    methodIds: ["youtube", "social", "digital-products"],
    links: [
      { label: "YouTube", href: "https://www.youtube.com/" },
      { label: "Instagram", href: "https://www.instagram.com/" },
      { label: "Facebook", href: "https://www.facebook.com/" },
      { label: "X", href: "https://x.com/" },
    ],
  },
  {
    id: "games",
    title: "Games",
    eyebrow: "Skill or audience",
    summary:
      "The cleaner game-based money paths are testing, coaching, guides, and content. Wager-style apps should be treated separately.",
    methodIds: ["gaming", "rummy"],
    links: [
      {
        label: "Google Play Games",
        href: "https://play.google.com/store/apps/details?id=com.google.android.play.games",
      },
      {
        label: "WeWard",
        href: "https://play.google.com/store/apps/details?hl=en_US&id=com.weward",
      },
    ],
  },
  {
    id: "trading",
    title: "Trading",
    eyebrow: "Speculation",
    summary:
      "Trading is not stable income. It belongs on the dashboard because people ask for it, but it should sit in the high-risk zone.",
    methodIds: ["trading"],
    links: [
      { label: "CoinDCX", href: "https://coindcx.com/" },
      {
        label: "FTC crypto scam warning",
        href: "https://consumer.ftc.gov/spotting-cryptocurrency-investment-scams",
      },
    ],
    warning: "Possible profit exists, but so do fast losses and scam-heavy ecosystems.",
  },
  {
    id: "high-risk",
    title: "High risk",
    eyebrow: "Red flags",
    summary:
      "Telegram tasks, fake reviews, account farming, trading hype, and wager loops all belong here. This lane exists to warn, not recommend.",
    methodIds: ["task-groups", "trading", "rummy"],
    links: [
      {
        label: "FTC task scam warning",
        href: "https://consumer.ftc.gov/consumer-alerts/2025/08/how-spot-and-avoid-task-scams",
      },
      {
        label: "FTC fake reviews warning",
        href: "https://consumer.ftc.gov/consumer-alerts/2025/12/ftc-warns-businesses-about-fake-reviews",
      },
      {
        label: "FTC crypto scams",
        href: "https://consumer.ftc.gov/spotting-cryptocurrency-investment-scams",
      },
    ],
    warning: "If a method depends on deposits, secrecy, or fake activity, it is already in the danger lane.",
  },
];

export const highRiskCalls = [
  "Paid Google Maps reviews are deceptive and not a stable earning method.",
  "Bulk Gmail or account creation work can be tied to spam, abuse, or future bans.",
  "Selling old groups, channels, or aged accounts has both scam risk and platform-rule risk.",
  "AI video task bundles can be real low-end labor, but many are underpaid or used as bait for larger scams.",
];

export const scamList: Scam[] = [
  {
    name: "Task scams",
    detail:
      "You get paid for a few tiny actions, then get pushed toward bigger tasks, fake balances, and locked withdrawals.",
    signal: "The moment a payout needs a deposit, the game is over.",
  },
  {
    name: "Fake recruiter / job scams",
    detail:
      "The offer arrives through a text, DM, or messaging app and rushes you into simple remote work with inflated pay.",
    signal: "Real employers do not hire serious roles by random Telegram or WhatsApp outreach.",
  },
  {
    name: "Fake checks",
    detail:
      "A fake employer sends a check for equipment or overpayment and asks you to send money back or buy from their vendor.",
    signal: "The bank may show the deposit first, then reverse it later and leave you with the loss.",
  },
  {
    name: "Off-platform phishing",
    detail:
      "Common on gig sites: a fake buyer sends a payment page, verification screen, or fake order link.",
    signal: "Any card-entry or login request outside the official platform is a stop sign.",
  },
  {
    name: "Recovery scams",
    detail:
      "After someone loses money, another scammer appears and claims they can get it back for a fee.",
    signal: "Anyone promising guaranteed recovery is usually running a second scam.",
  },
  {
    name: "Fake reviews",
    detail:
      "Businesses paying for scripted positive reviews distort platforms and can pull workers into deceptive schemes.",
    signal: "If the job is 'just say something good' instead of giving a real experience, it is not clean work.",
  },
];

export const investmentNotes = [
  "Trading and crypto are not income substitutes. They are high-risk investment activities with real loss potential.",
  "CoinDCX can be described as a crypto platform with transparency reporting, not as guaranteed profit.",
  "Never use phrases like 'safe profit', 'fixed return', or 'secret method' on the site.",
  "If money cannot be lost, it is not really an investment decision. If it promises guaranteed returns, it is closer to a scam pitch.",
];

export const sheetSections: SheetSection[] = [
  {
    title: "Passive income sites",
    intro:
      "The spreadsheet groups these as install-once or low-effort tools, mostly around bandwidth sharing or passive browser earnings.",
    note:
      "Estimated earnings below are spreadsheet claims, not guarantees. Passive tools still carry privacy, platform, and payout-threshold tradeoffs.",
    entries: [
      {
        name: "EarnApp",
        referral: "https://earnapp.com/i/J9XF4PXJ",
        earnings: "$5 – $20 / mo",
        description:
          "Your internet connection is worth money, and EarnApp pays you for it automatically. Install once, leave it running, and it earns in the background with no tasks or surveys.",
        benefits: [
          "Earn while you sleep with a hands-free setup.",
          "Pay-per-runtime model is framed as more predictable than older styles.",
          "Works on phone and desktop at the same time.",
          "Cashout options include PayPal, Wise, and gift cards.",
          "Presented as a large, established user base.",
        ],
        payoutMethods: ["PayPal", "Wise", "Gift Cards"],
        minPayout: "$2.50",
        paymentProof: "https://imgur.com/a/Qk7sb0p",
      },
      {
        name: "Honeygain",
        referral: "https://r.honeygain.me/SAMUEC73",
        earnings: "$10 – $20 / mo",
        description:
          "The sheet positions Honeygain as the most established bandwidth-sharing app, with publicly discussed payouts and multi-device use.",
        benefits: [
          "Marketed as a trusted passive income app.",
          "Transparency reporting is highlighted.",
          "Supports stacking across multiple devices and networks.",
          "Payout options include PayPal or crypto.",
          "Set-and-forget positioning with low maintenance.",
        ],
        payoutMethods: ["PayPal", "Crypto"],
        minPayout: "$20.00",
        paymentProof: "https://imgur.com/a/IMJoSnb",
      },
      {
        name: "PawnsApp",
        referral: "https://pawns.app/?r=1112060",
        earnings: "$3 – $6 / mo",
        description:
          "PawnsApp combines passive bandwidth sharing with optional surveys, aiming to blend low-effort background earnings and occasional active tasks.",
        benefits: [
          "Dual income model: bandwidth and surveys.",
          "Spreadsheet claims many users hit first payout inside the first week.",
          "Low $5 PayPal withdrawal floor.",
          "Runs on iOS, Android, Windows, and Mac.",
          "Simple setup with no technical barrier.",
        ],
        payoutMethods: ["PayPal"],
        minPayout: "$5.00",
        paymentProof: "https://imgur.com/a/BJUytpT",
      },
      {
        name: "Slice",
        referral: "https://addslice.com/?crew=tS1P3dO4",
        earnings: "$8 – $12 / mo",
        description:
          "Slice is presented as a browser extension that adds passive ad-based earnings to normal browsing with almost no behavior change.",
        benefits: [
          "Keeps the existing browsing routine intact.",
          "Very low $0.25 withdrawal threshold.",
          "Non-intrusive ad model is part of the pitch.",
          "Works across major desktop browsers.",
          "Supports PayPal, Bitcoin, and gift cards.",
        ],
        payoutMethods: ["PayPal", "Bitcoin", "Gift Cards"],
        minPayout: "$0.25",
        paymentProof: "https://imgur.com/a/mNsCNq3",
      },
    ],
  },
  {
    title: "Task / GPT sites",
    intro:
      "The spreadsheet describes these as survey, offer, faucet, and microtask sites. They are more active than passive apps and depend heavily on offer quality, region, and consistency.",
    note:
      "GPT means get-paid-to. These can be real, but earnings are highly variable and some crypto-heavy options carry extra volatility or withdrawal friction.",
    entries: [
      {
        name: "Cointiply",
        referral: "https://cointiply.mobi/Q2y2L",
        earnings: "$100 – $150 / mo",
        description:
          "Cointiply is framed as a Bitcoin-focused rewards platform with a daily faucet, offers, surveys, videos, and a loyalty balance bonus.",
        benefits: [
          "Free daily faucet for recurring coin earnings.",
          "Loyalty bonus is advertised as paying extra for holding a balance.",
          "Mixes offers, surveys, videos, games, and faucet tasks.",
          "Crypto-native payouts avoid bank dependence.",
          "Long-running reputation is part of the sheet's trust argument.",
        ],
        payoutMethods: ["Crypto"],
        minPayout: "$3",
        paymentProof: "Coming Soon",
      },
      {
        name: "AttaPoll",
        referral: "https://attapoll.app/join/cgasz",
        earnings: "$80 – $130 / mo",
        description:
          "The spreadsheet presents AttaPoll as a fast survey app with strong demographic matching and low-friction withdrawals.",
        benefits: [
          "Matching system is pitched as reducing survey disqualifications.",
          "Low $2.50 payout threshold.",
          "Broad payout mix across PayPal, Revolut, Skrill, bank deposit, and gift cards.",
          "Claimed fit for short 20–30 minute daily sessions.",
          "Fast withdrawals are a central selling point.",
        ],
        payoutMethods: [
          "PayPal",
          "Revolut",
          "Skrill",
          "Bank Deposit",
          "Prepaid Cards",
          "Gift Cards",
        ],
        minPayout: "$2.50",
        paymentProof: "https://imgur.com/a/254U6zu",
      },
      {
        name: "FreeCash",
        referral: "https://freecash.com/r/365fa1f1055ee3f02f3f",
        earnings: "$50 – $70 / mo",
        description:
          "FreeCash is positioned as a large global GPT site with many daily tasks, low cashout limits, and a strong payout history.",
        benefits: [
          "Promoted as a top-rated GPT platform.",
          "Very low $0.25 payout threshold.",
          "The sheet claims first cashout can happen within 24 hours.",
          "Many gift card choices plus PayPal and crypto.",
          "Large historical payout numbers are used as social proof.",
        ],
        payoutMethods: ["PayPal", "Crypto", "100+ Gift Cards"],
        minPayout: "$0.25",
        paymentProof: "https://imgur.com/a/freecash-payment-proof-RCpDBTb",
      },
      {
        name: "Gemsloot",
        referral: "https://gemsloot.com/?aff=gogemsloot",
        earnings: "$70 – $90 / mo",
        description:
          "Gemsloot is sold on speed: high-paying surveys, offer walls, daily bonuses, and fast early cashout claims.",
        benefits: [
          "Sheet claims first $5 can land in under 3 hours.",
          "Daily bonus offers are part of the stacking strategy.",
          "Wide payout mix including PayPal, crypto, Roblox, and gift cards.",
          "Real-time balance visibility is highlighted.",
          "Emphasis is on fast results and high hourly upside.",
        ],
        payoutMethods: [
          "PayPal",
          "Crypto",
          "Prepaid Cards",
          "Roblox Cards",
          "Gift Cards",
        ],
        minPayout: "$0.50",
        paymentProof: "https://imgur.com/a/UEYJ1so",
      },
      {
        name: "Prime Opinion",
        referral: "https://primeopinion.com/register?ref=9eb693d7-d6b3-4f30-9581-6effb7b70e76",
        earnings: "$60 – $80 / mo",
        description:
          "Prime Opinion is framed as a premium survey platform with higher-value brand surveys, a signup bonus, and very low withdrawal thresholds.",
        benefits: [
          "Includes a $1 signup bonus in the sheet.",
          "Low $1 withdrawal minimum.",
          "Higher per-survey earnings are part of the positioning.",
          "Day 1 withdrawal claims appear in the spreadsheet copy.",
          "Supports PayPal, Revolut, prepaid Visa, and gift cards.",
        ],
        payoutMethods: ["PayPal", "Revolut", "Prepaid Visa", "Gift Cards"],
        minPayout: "$1.00",
        paymentProof: "https://imgur.com/a/rNpACXB",
      },
    ],
  },
];

export const communityNotes = [
  "Some of these sites may require identity verification before they allow withdrawals.",
  "The earnings ranges and acceptance rates in this section are user-contributed and can vary heavily by country, device, profile, and luck.",
  "Referral links are included because they were supplied by the user. Anyone can search the platform names and register directly instead.",
  "If a mobile earning app is flagged by Play Protect or another security tool, investigate carefully before installing. Do not ignore security warnings blindly.",
];

export const communitySections: SheetSection[] = [
  {
    title: "Where I earn the most",
    intro:
      "These are the higher-paying study and testing platforms from the user notes. They skew especially well toward tech, QA, and research-friendly profiles, but general studies can still appear.",
    note:
      "Some studies are one-on-one webcam interviews. Others can run for days or weeks. High payouts are possible, but acceptance is not guaranteed.",
    entries: [
      {
        name: "Test.io",
        referral: "https://join.test.io/osib9AFy4aBQ",
        earnings: "User note: up to $300 / mo",
        description:
          "A testing platform where you complete qualification tests first, then receive paid bug-finding and product testing tasks if you stay consistent.",
        benefits: [
          "Strong fit for QA-minded users.",
          "Bug quality affects earnings more than raw time spent.",
          "Better regions can see more frequent opportunities.",
        ],
        payoutMethods: ["Varies by platform"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "Respondent",
        referral: "https://app.respondent.io/r/ericsimba-2e19cb288c8b",
        earnings: "Anecdotal: $100+ studies, including a user-reported $300 session",
        description:
          "Research-study platform with many higher-paying interviews and research panels. One of the user notes says it produced $300 for one hour of remote focus-group work, but another note also says qualification is a numbers game.",
        benefits: [
          "High-value interviews and studies.",
          "Good fit for professional or niche backgrounds.",
          "Can outperform normal survey apps when accepted.",
        ],
        payoutMethods: ["Varies by study"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "dscout",
        referral: "https://dscout.com/",
        earnings: "User note: highest earner, but fewer matches",
        description:
          "Highly specific research studies with fewer openings but potentially strong payouts when accepted. User notes point to PayPal payouts.",
        benefits: [
          "High-quality research studies.",
          "Fewer but often better-paying opportunities.",
          "Good option for detailed feedback work.",
        ],
        payoutMethods: ["PayPal"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "User Interviews",
        referral: "https://www.userinterviews.com/hello",
        earnings: "Anecdotal: user-reported $430 from 3 sessions",
        description:
          "Research platform similar to Respondent, used to increase the number of paid interview and study opportunities in a monthly stack.",
        benefits: [
          "Large volume of studies.",
          "Remote interviews, focus groups, and feedback sessions.",
          "User notes describe it as part of a weekly staple.",
        ],
        payoutMethods: ["Varies by study"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "FocusGroup",
        referral: "https://www.focusgroup.com/",
        earnings: "Varies",
        description:
          "Market-research platform for online and in-person focus groups, product tests, and interview studies. User notes say profile detail matters and some roles require resume-style background information.",
        benefits: [
          "Focus groups and product studies.",
          "Mix of online and in-person work.",
          "Stronger upside than normal survey apps when selected.",
        ],
        payoutMethods: ["Gift cards or study-based incentives"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "watchLAB",
        referral: "https://watchlab.com/sign-up/",
        earnings: "Varies",
        description:
          "Qualitative research and interview recruiting platform covering webcam interviews, usability tests, focus groups, and in-home or in-person studies.",
        benefits: [
          "Research-focused participant recruiting.",
          "Works across consumer and professional topics.",
          "Good fit for users comfortable with interviews and panel studies.",
        ],
        payoutMethods: ["Varies by study"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "MindSwarms",
        referral: "https://app.mindswarms.com/help",
        earnings: "Site FAQ says many studies pay $10-$50+",
        description:
          "Video-response research platform where participants answer short prompts by recording one-minute webcam or smartphone responses.",
        benefits: [
          "Short mobile video studies.",
          "Global participation model according to the FAQ.",
          "FAQ mentions PayPal within 24 hours for many studies.",
        ],
        payoutMethods: ["PayPal"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "uTest",
        referral: "https://www.utest.com/",
        earnings: "Varies",
        description:
          "Testing platform similar to Test.io, but with heavier onboarding and lessons before higher-value testing access opens up.",
        benefits: [
          "Structured learning path for testers.",
          "Can still offer side tasks and non-testing projects.",
          "Good long-term fit if you like QA work.",
        ],
        payoutMethods: ["Varies by project"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
    ],
  },
  {
    title: "GPT, survey, and offerwall sites",
    intro:
      "These are user-supplied GPT and survey platforms. They work best for people willing to compare offers, accept screenouts, and grind consistently rather than expecting reliable salary-like income.",
    note:
      "Survey supply varies by country. Games and offerwalls often require a lot more time than the headline payout suggests.",
    entries: [
      {
        name: "ySense",
        referral: "https://www.ysense.com/?rb=129358291",
        earnings: "User note: around $40 / mo average from games + surveys",
        description:
          "Presented as one of the strongest all-country GPT sites, with solid offer tracking and better reliability than weaker offerwall platforms.",
        benefits: [
          "Works in many countries.",
          "Good fit for surveys, offers, and game tasks.",
          "Often compared directly against Swagbucks and similar sites.",
        ],
        payoutMethods: ["Varies by country"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "FreeCash",
        referral: "https://freecash.com/r/73754b483d",
        earnings: "Varies",
        description:
          "GPT site with surveys, games, and offer tasks. User notes say surveys are the strongest earner here, with games paying more but demanding more time.",
        benefits: [
          "Large mix of tasks.",
          "Surveys and games both available.",
          "Fits users with spare time more than users chasing passive income.",
        ],
        payoutMethods: ["Varies by region"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "Reward XP",
        referral: "https://www.rewardxp.com/join/1333532",
        earnings: "Varies",
        description:
          "One of the GPT sites grouped alongside Swagbucks, ySense, and PrizeRebel for offers, surveys, and game tasks.",
        benefits: [
          "Comparable offerwall model.",
          "Useful for cross-checking the best-paying offer.",
          "Can be part of a multi-site rotation.",
        ],
        payoutMethods: ["Varies"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "PrizeRebel",
        referral: "https://www.prizerebel.com/index.php?r=15243420",
        earnings: "Varies",
        description:
          "Another GPT and survey platform in the same class as ySense and Swagbucks, useful mainly for comparing offers instead of trusting one site blindly.",
        benefits: [
          "Survey and offerwall access.",
          "Useful for side-by-side offer comparison.",
          "Fits a rotation approach better than one-site dependence.",
        ],
        payoutMethods: ["Varies"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "Cointiply",
        referral: "https://cointiply.mobi/Q2y2L",
        earnings: "Varies",
        description:
          "GPT platform that pays in Bitcoin, with daily check-ins and faucet-style mechanics on top of offers and surveys.",
        benefits: [
          "Crypto-native payout path.",
          "Daily check-in and faucet hooks.",
          "Works for users already comfortable holding Bitcoin.",
        ],
        payoutMethods: ["Bitcoin / crypto"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "GrabPoints",
        referral: "https://grabpoints.com/#/?ref=6OG3LE",
        earnings: "Varies",
        description:
          "Another GPT option added as a comparison site for offers, surveys, and small reward tasks.",
        benefits: [
          "Useful as a comparison layer.",
          "Adds more offerwall coverage.",
          "Best used selectively rather than as a main lane.",
        ],
        payoutMethods: ["Varies"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "Survey Junkie",
        referral: "https://www.surveyjunkie.com/",
        earnings: "Varies",
        description:
          "Dedicated survey platform with PayPal and e-gift card redemptions, included in the user notes as one of the main low-effort survey options.",
        benefits: [
          "Dedicated survey-only focus.",
          "Cashout via PayPal or e-gift cards.",
          "Lower-friction option for users who prefer simpler survey flows.",
        ],
        payoutMethods: ["PayPal", "E-gift cards"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "InboxDollars",
        referral: "https://www.inboxdollars.com/",
        earnings: "Varies",
        description:
          "Long-running survey and rewards site covering surveys, games, reading emails, shopping, and offer-based tasks.",
        benefits: [
          "Broad rewards mix.",
          "Cash and gift card redemption paths.",
          "Works as another comparison site beside Swagbucks and ySense.",
        ],
        payoutMethods: ["PayPal", "Gift cards", "Other options"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "Dedicated survey backups",
        referral: "",
        earnings: "Varies",
        description:
          "Other survey names mentioned in the user notes include Pinafore Research, SurveyYeah, Triaba, and Afrisight. These are best treated as secondary inventory rather than primary earners.",
        benefits: [
          "Useful when primary survey apps are dry.",
          "Lets you rotate between multiple survey pools.",
          "Best for users already comfortable with survey work.",
        ],
        payoutMethods: ["Varies"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
    ],
  },
  {
    title: "Clicks, passive, and SMS apps",
    intro:
      "This group collects click-to-visit tools, internet-sharing apps, and SMS-receiving apps from the user notes. These are among the easiest to start, but they also need the strongest caution language.",
    note:
      "Passive does not mean risk-free. SMS and bandwidth apps touch your device, network, or phone number, so trust and compliance matter more than the headline payout.",
    entries: [
      {
        name: "ByteLixir",
        referral: "https://bytelixir.com/r/F8UM7WKUQHRZ",
        earnings: "User note: bandwidth-based",
        description:
          "Internet-sharing platform where payouts depend on the amount and type of traffic shared. The user note highlights low cashout and crypto-only payments.",
        benefits: [
          "Bandwidth sharing model.",
          "Low entry threshold if you already use mobile or home internet heavily.",
          "Low stated cashout floor.",
        ],
        payoutMethods: ["Crypto"],
        minPayout: "$2",
        paymentProof: "User-contributed note",
      },
      {
        name: "SerpClix",
        referral:
          "https://serpclix.com/users/referrals/NMLWS51F9TWHOB2IX46AHHGIL",
        earnings: "User note: $0.05 per visit",
        description:
          "Click-and-visit site where users complete search and visit tasks. The user note says it works across Firefox and some desktop or mobile browser combinations.",
        benefits: [
          "Simple click-based workflow.",
          "Automatic monthly payout once threshold is reached.",
          "More consistency than weaker click tools according to the note.",
        ],
        payoutMethods: ["PayPal"],
        minPayout: "$4",
        paymentProof: "User-contributed note",
      },
      {
        name: "ClicksPaid",
        referral:
          "https://www.clickspaid.com/?jobs_ref=551f2cb875e40613715f827e72a902e8",
        earnings: "User note: $0.05 per visit",
        description:
          "Similar to SerpClix but described as less consistent, with fewer available tasks and heavier browser restrictions.",
        benefits: [
          "Low-complexity task model.",
          "Crypto payout path.",
          "Works as a backup rather than a main click site.",
        ],
        payoutMethods: ["Crypto"],
        minPayout: "$5",
        paymentProof: "User-contributed note",
      },
      {
        name: "Pawns App",
        referral: "https://discoverpawns.eu/4520905",
        earnings: "Varies",
        description:
          "Passive internet-sharing app with survey offerwalls layered on top, useful for combining low-effort background earnings and occasional active tasks.",
        benefits: [
          "Bandwidth plus survey mix.",
          "Passive layer with optional active income.",
          "Easy entry point for casual users.",
        ],
        payoutMethods: ["Varies"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "SMSProfit and similar SMS apps",
        referral: "https://smsprofitapp.net/",
        links: [
          { label: "Money SMS", href: "https://moneysmsapp.com/" },
          { label: "CM Money", href: "https://www.cm.com/mcmoney/" },
        ],
        earnings: "Varies",
        description:
          "Apps that pay for receiving SMS messages. More earning potential can exist on dual-SIM phones, but these apps should be treated carefully because they interact directly with your phone number and device.",
        benefits: [
          "Passive-style earning model.",
          "Dual-SIM setups may increase capacity.",
          "Multiple alternatives exist: McMoney, MoneySMS, and SMS Richer.",
        ],
        payoutMethods: ["Varies"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "Microsoft Rewards / Bing gift cards",
        referral: "https://www.microsoft.com/en-us/rewards/about",
        earnings: "Low but steady rewards-style earning",
        description:
          "Use Bing and Microsoft account activity to accumulate points that can be redeemed for gift cards and other rewards. Great for slow, low-risk accumulation rather than cash income.",
        benefits: [
          "No upfront spend required just to participate.",
          "Fits normal web usage and search habits.",
          "Good for Amazon-style gift card goals.",
        ],
        payoutMethods: ["Gift cards", "Rewards"],
        minPayout: "Points threshold varies by region and reward",
        paymentProof: "Official rewards program",
      },
      {
        name: "YouGov + WeWard",
        referral: "https://yougov.com/",
        links: [
          {
            label: "WeWard",
            href: "https://play.google.com/store/apps/details?hl=en_US&id=com.weward",
          },
        ],
        earnings: "Varies",
        description:
          "YouGov matches surveys to profile and interests, while WeWard pays out via step-based rewards and walking incentives. Both are slower, reward-oriented programs rather than direct-income engines.",
        benefits: [
          "YouGov: matched surveys and larger gift card targets.",
          "WeWard: step-based rewards that work better for active users or smartwatch owners.",
          "Useful as low-pressure side layers.",
        ],
        payoutMethods: ["Gift cards", "Rewards", "Cash options vary"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
    ],
  },
  {
    title: "Other survey and testing extras",
    intro:
      "The remaining user notes cover backup survey sites, smaller testing communities, and task platforms that can matter more once you learn their systems.",
    note:
      "Verification is especially important on task platforms. Use real identity details when a platform requires them.",
    entries: [
      {
        name: "SurveyYeah / Triaba / Afrisight",
        referral: "https://www.surveyyeah.com/",
        links: [
          { label: "Triaba", href: "https://www.triaba.com/" },
          { label: "Afrisight", href: "https://afrisight.com/" },
        ],
        earnings: "Varies",
        description:
          "Dedicated survey sites listed as additional options. These are usually best treated as backup inventory when the main survey apps are dry.",
        benefits: [
          "Extra survey coverage.",
          "Useful when primary apps have no matches.",
          "Low barrier to trying them.",
        ],
        payoutMethods: ["Varies"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "TestBirds / UserCrowd",
        referral: "https://www.testbirds.com/",
        earnings: "Varies",
        description:
          "Additional testing platforms for usability feedback, bug testing, and research tasks that sit in the same wider family as Test.io and uTest.",
        benefits: [
          "Extra testing volume.",
          "Useful for people already comfortable with QA tasks.",
          "Can diversify testing pipelines.",
        ],
        payoutMethods: ["Varies"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "Clickworker",
        referral: "https://www.clickworker.com/",
        earnings: "Varies",
        description:
          "Task platform with general jobs plus UHRS qualification tracks. The user notes emphasize using real details exactly as they appear on your ID and not rushing qualification tasks.",
        benefits: [
          "General microtask access.",
          "UHRS can be the bigger earning layer.",
          "Good fit for careful, repeatable task work.",
        ],
        payoutMethods: ["PayPal", "Payoneer"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "CloudConnect / Prolific / Pinecone Research",
        referral: "",
        links: [
          { label: "CloudResearch Connect", href: "https://connect.cloudresearch.com/" },
          { label: "Prolific", href: "https://app.prolific.com/" },
          { label: "Pinecone Research", href: "https://www.pineconeresearch.com/" },
        ],
        earnings: "Varies",
        description:
          "These were grouped in the user notes as strong research-study backups. CloudConnect and Prolific sit closest to the research-study lane, while Pinecone is described as pickier but better paying when available.",
        benefits: [
          "Academic and product research overlap.",
          "Useful for building a multi-platform market-research stack.",
          "Can beat ordinary survey sites when accepted.",
        ],
        payoutMethods: ["Varies by platform"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "Task and freelance stack",
        referral: "",
        links: [
          { label: "Taskrabbit", href: "https://www.taskrabbit.com/" },
          { label: "Fiverr", href: "https://www.fiverr.com/" },
          { label: "Toptal", href: "https://www.toptal.com/" },
          { label: "Wyzant", href: "https://www.wyzant.com/" },
          { label: "Cambly", href: "https://www.cambly.com/" },
          { label: "Rev", href: "https://www.rev.com/freelancers" },
          { label: "Outlier", href: "https://outlier.ai/" },
          { label: "DataAnnotation", href: "https://www.dataannotation.tech/" },
          { label: "Amazon MTurk", href: "https://www.mturk.com/worker" },
        ],
        earnings: "Varies",
        description:
          "Extra work platforms named in the user notes include Taskrabbit, Fiverr, Toptal, Wyzant, Cambly, Rev, Outlier AI, DataAnnotation, and Amazon MTurk.",
        benefits: [
          "Covers freelancing, tutoring, transcription, AI training, and small task work.",
          "Good range from beginner to advanced.",
          "Best viewed as separate lanes with different skill requirements.",
        ],
        payoutMethods: ["Varies by platform"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "Testing and usability extras",
        referral: "",
        links: [
          {
            label: "UserTesting",
            href: "https://www.usertesting.com/get-paid-to-test",
          },
          { label: "PlaytestCloud", href: "https://players.playtestcloud.com/" },
          { label: "UsabilityHub", href: "https://usabilityhub.com/" },
        ],
        earnings: "Varies",
        description:
          "UserTesting, PlaytestCloud, and UsabilityHub were all mentioned as ways to earn from product, app, website, and game feedback.",
        benefits: [
          "Good practice for feedback-heavy work.",
          "Pairs well with interview and research platforms.",
          "Works especially well for users who communicate clearly while testing.",
        ],
        payoutMethods: ["Often PayPal or platform-specific payouts"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
      {
        name: "Selling and resale platforms",
        referral: "",
        links: [
          { label: "Mercari", href: "https://www.mercari.com/" },
          { label: "eBay", href: "https://www.ebay.com/" },
          { label: "Redbubble", href: "https://www.redbubble.com/" },
        ],
        earnings: "Varies",
        description:
          "Mercari, eBay, and Redbubble were named as additional routes for selling goods, designs, or print-on-demand products.",
        benefits: [
          "Can turn clutter, art, or niche products into cash.",
          "Works better for patient sellers than instant-cash seekers.",
          "Strong fit for people who already make or source products.",
        ],
        payoutMethods: ["Varies by platform"],
        minPayout: "Varies",
        paymentProof: "User-contributed note",
      },
    ],
  },
  {
    title: "Archived promo deals: April 2026",
    intro:
      "These are user-contributed promo and bonus ideas labeled for April 2026. Because today is May 2, 2026, they should be treated as archived references, not guaranteed current offers.",
    note:
      "Promotions, deposit thresholds, and direct-deposit rules can change quickly. Verify terms on the provider before opening any financial account or moving money.",
    entries: [
      {
        name: "Brokerage and crypto sign-up bonuses",
        referral: "",
        links: [
          { label: "SoFi Invest", href: "https://www.sofi.com/invest/" },
          { label: "Robinhood", href: "https://robinhood.com/us/en/" },
          { label: "Webull", href: "https://www.webull.com/" },
          { label: "Coinbase", href: "https://www.coinbase.com/" },
          { label: "MoneyLion", href: "https://www.moneylion.com/" },
          { label: "Acorns", href: "https://www.acorns.com/" },
        ],
        earnings: "User-contributed promo archive",
        description:
          "Names mentioned include SoFi Investing, Robinhood, Webull, Coinbase, MoneyLion, and Acorns. The idea is that some financial apps use sign-up credits or bonus stocks to win new users.",
        benefits: [
          "Potential one-time bonus value.",
          "Some offers only need a small deposit.",
          "Can stack with broader banking or investing setups.",
        ],
        payoutMethods: ["Cash bonus", "Stock bonus", "Crypto bonus"],
        minPayout: "Varies by provider and promo",
        paymentProof: "Archived user note",
      },
      {
        name: "Bank bonus and checking-account churn deals",
        referral: "",
        links: [
          { label: "SoFi Banking", href: "https://www.sofi.com/banking/" },
          { label: "Chime", href: "https://www.chime.com/" },
          { label: "Upgrade Checking", href: "https://www.upgrade.com/checking/" },
          { label: "Current", href: "https://current.com/" },
          { label: "Groundfloor", href: "https://groundfloor.com/" },
          { label: "MoneyLion", href: "https://www.moneylion.com/" },
        ],
        earnings: "User-contributed promo archive",
        description:
          "Names mentioned include SoFi Checking & Savings, Chime, Upgrade, Current, Groundfloor, and MoneyLion. These often depend on deposit rules and can be profitable only if you follow the exact current terms.",
        benefits: [
          "Higher one-time bonuses than surveys.",
          "Can pair with broader banking cleanup or savings goals.",
          "Works best for organized users who read all terms carefully.",
        ],
        payoutMethods: ["Cash bonus"],
        minPayout: "Usually tied to deposits or direct-deposit conditions",
        paymentProof: "Archived user note",
      },
      {
        name: "Cashback and savings apps",
        referral: "",
        links: [
          { label: "Upside", href: "https://www.upside.com/" },
          { label: "PayPal Honey", href: "https://www.joinhoney.com/" },
          { label: "Ibotta", href: "https://home.ibotta.com/" },
          { label: "Rakuten", href: "https://www.rakuten.com/" },
          { label: "Receipt Hog", href: "https://www.receipthog.com/" },
          { label: "BeFrugal", href: "https://www.befrugal.com/" },
          { label: "Instacart", href: "https://www.instacart.com/" },
          { label: "Uber Eats", href: "https://www.ubereats.com/" },
        ],
        earnings: "Savings rather than income",
        description:
          "Apps and tools named in the user notes include Upside, Honey, Ibotta, Rakuten, Receipt Hog, BeFrugal, Instacart new-user discounts, and Uber Eats promo codes.",
        benefits: [
          "Reduces spending on gas, food, and shopping.",
          "Works well with normal life purchases.",
          "More savings-oriented than income-oriented.",
        ],
        payoutMethods: ["Cashback", "Gift cards", "Discounts"],
        minPayout: "Varies",
        paymentProof: "Archived user note",
      },
    ],
  },
];

export const sourceLinks: Source[] = [
  {
    title: "Published Google Sheet: Earning Sites Dashboard",
    href: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTuBSp-oqTuZPgcPxgxbX2rYY7ZYsiptsg3NBF6RoOC3URy3Y5NYvfhQQAElZaJd2ZKaX7xtTxgfN20/pubhtml",
    label: "User-provided spreadsheet imported into the site",
  },
  {
    title: "FTC: Job Scams",
    href: "https://consumer.ftc.gov/articles/job-scams",
    label: "Scam warning and job scam patterns",
  },
  {
    title: "FTC: Task scams create the illusion of making money",
    href: "https://consumer.ftc.gov/consumer-alerts/2024/11/task-scams-create-illusion-making-money",
    label: "Why tiny tasks can turn into deposit traps",
  },
  {
    title: "FTC: How to spot and avoid task scams",
    href: "https://consumer.ftc.gov/consumer-alerts/2025/08/how-spot-and-avoid-task-scams",
    label: "WhatsApp and Telegram task scam warning",
  },
  {
    title: "FTC: That job offer text is probably a scam",
    href: "https://consumer.ftc.gov/consumer-alerts/2026/04/job-offer-text-probably-scam",
    label: "Modern recruiter-text scam pattern",
  },
  {
    title: "FTC: Fake reviews warning",
    href: "https://consumer.ftc.gov/consumer-alerts/2025/12/ftc-warns-businesses-about-fake-reviews",
    label: "Why paid reviews are a bad lane",
  },
  {
    title: "FTC: Final rule banning fake reviews and testimonials",
    href: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials",
    label: "The enforcement backdrop for fake review schemes",
  },
  {
    title: "FTC: Spotting cryptocurrency investment scams",
    href: "https://consumer.ftc.gov/spotting-cryptocurrency-investment-scams",
    label: "Crypto-specific scam warning",
  },
  {
    title: "CoinDCX: Transparency Report March 2026",
    href: "https://coindcx.com/blog/announcements/coindcx-transparency-report-march-2026-overview/",
    label: "Current platform transparency reference",
  },
  {
    title: "CoinDCX: Risk Disclosures",
    href: "https://coindcx.com/assets/pdf/RiskDisclosure-2022.pdf",
    label: "Volatility and market-risk statement",
  },
  {
    title: "Reddit: r/forhire",
    href: "https://www.reddit.com/r/forhire/",
    label: "Community gig board reference",
  },
  {
    title: "Reddit: r/beermoneyglobal",
    href: "https://www.reddit.com/r/beermoneyglobal/",
    label: "Another subreddit for global earning-site discussions",
  },
  {
    title: "Reddit: r/OnlineIncomeHustle",
    href: "https://www.reddit.com/r/OnlineIncomeHustle/",
    label: "Another subreddit focused on online income ideas and stories",
  },
  {
    title: "Reddit: r/WorkOnline",
    href: "https://www.reddit.com/r/WorkOnline/",
    label: "Remote and online work discussion board",
  },
  {
    title: "Reddit: r/signupsforpay",
    href: "https://www.reddit.com/r/signupsforpay/",
    label: "Signup-bonus and referral-payment subreddit",
  },
  {
    title: "Reddit: r/giftcardexchange",
    href: "https://www.reddit.com/r/giftcardexchange/",
    label: "Gift card buy, sell, and exchange subreddit",
  },
  {
    title: "Reddit: r/slavelabour",
    href: "https://www.reddit.com/r/slavelabour/",
    label: "Cheap job marketplace subreddit",
  },
];
