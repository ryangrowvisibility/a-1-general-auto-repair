const PHONE = "(916) 973-9677";
const TEL = "tel:+19169739677";
const ADDRESS = "4520 Auburn Blvd, Sacramento, CA 95841";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=A-1%20General%20Auto%20Repair&query_place_id=ChIJEyA3xs3emoARrQKiSQe-QAg";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=4520+Auburn+Blvd+Sacramento+CA+95841";
const MAP_EMBED = "https://maps.google.com/maps?q=4520%20Auburn%20Blvd%2C%20Sacramento%2C%20CA%2095841&output=embed";

type IconName = "phone" | "star" | "pin" | "wrench" | "disc" | "engine" | "oil" | "car" | "check" | "chev" | "arrow" | "user" | "shield" | "msg" | "nav" | "hand";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<IconName, React.ReactNode> = {
    phone: <path {...p} d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2Z" />,
    star: <path fill="currentColor" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />,
    pin: <><path {...p} d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle {...p} cx="12" cy="10" r="3" /></>,
    wrench: <path {...p} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z" />,
    disc: <><circle {...p} cx="12" cy="12" r="9" /><circle {...p} cx="12" cy="12" r="3" /><path {...p} d="M18 6.5 15 9" /></>,
    engine: <path {...p} d="M4 10h2V7h4V5h4v2h3l2 3h2v6h-2l-2 3H8l-2-3H4Zm-2 0v6" />,
    oil: <path {...p} d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
    car: <><path {...p} d="M19 17h2v-4l-2.4-4.8A2 2 0 0 0 16.8 7H7.2a2 2 0 0 0-1.8 1.2L3 13v4h2" /><circle {...p} cx="7.5" cy="17" r="2" /><circle {...p} cx="16.5" cy="17" r="2" /><path {...p} d="M9.5 17h5M3 13h18" /></>,
    check: <path {...p} d="M20 6 9 17l-5-5" />,
    chev: <path {...p} d="m6 9 6 6 6-6" />,
    arrow: <path {...p} d="M5 12h14M13 6l6 6-6 6" />,
    user: <><circle {...p} cx="12" cy="8" r="4" /><path {...p} d="M4 21a8 8 0 0 1 16 0" /></>,
    shield: <><path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path {...p} d="m9 12 2 2 4-4" /></>,
    msg: <path {...p} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />,
    nav: <path {...p} d="m3 11 19-9-9 19-2-8-8-2Z" />,
    hand: <path {...p} d="M7 11V6a1.5 1.5 0 0 1 3 0v4m0-1V4.5a1.5 1.5 0 0 1 3 0V10m0-4.5a1.5 1.5 0 0 1 3 0V11m0-3a1.5 1.5 0 0 1 3 0v6a8 8 0 0 1-8 8h-1a7 7 0 0 1-5.6-2.8L3.2 15a1.6 1.6 0 0 1 2.4-2.1L7 14" />,
  };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" aria-label="4.5 out of 5 stars">
      {[0, 1, 2, 3].map((i) => (
        <Icon key={i} name="star" className={className} />
      ))}
      <span className="relative inline-block">
        <Icon name="star" className={`${className} text-line`} />
        <span className="absolute inset-0 w-1/2 overflow-hidden">
          <Icon name="star" className={className} />
        </span>
      </span>
    </span>
  );
}

const services: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "disc",
    title: "Brake repair",
    body: "Pads, rotors, and rear drums and shoes. If your brakes squeal, grind or feel soft, bring the car in and Singh will check them and tell you what they really need.",
  },
  {
    icon: "engine",
    title: "Engine repair",
    body: "Check engine light, rough idle, overheating, strange noises. Engine problems get diagnosed and fixed in the shop, with a clear price before the work starts.",
  },
  {
    icon: "oil",
    title: "Maintenance",
    body: "Oil changes, fluids, belts, filters and the routine service that keeps a car running for years. Small jobs done right now save big repairs later.",
  },
  {
    icon: "wrench",
    title: "General auto repair",
    body: "Mechanical repair for domestic and import cars. Not sure what's wrong? Call and describe it. If it turns out to be a small fix, you will hear that too.",
  },
];

const reviews = [
  {
    quote:
      "Singh fixed my car at a reasonable rate. Four years later it is still running strong.",
    who: "Customer review",
    job: "General repair",
  },
  {
    quote: "Singh and his crew were courteous and did a timely job replacing the rear drums and shoes.",
    who: "Customer review",
    job: "Brake repair",
  },
];

const themes = [
  { t: "Honest", d: "Customers say Singh tells you what the car needs, not what makes the biggest bill." },
  { t: "Skilled", d: "Repairs hold up. Several reviewers report cars still running well years later." },
  { t: "Not greedy", d: "More than one customer mentions Singh declining to charge for a small fix." },
];

const steps = [
  { title: "Call or text", body: `Reach Singh at ${PHONE}. Describe what the car is doing.` },
  { title: "Bring it to Auburn Blvd", body: "Drop the car at 4520 Auburn Blvd so it can be looked at properly." },
  { title: "Get a straight answer", body: "You hear what is wrong and what it costs before any work starts." },
  { title: "Drive away", body: "The repair gets done and you get your keys back. No surprises on the bill." },
];

const faqs = [
  {
    q: "What kinds of cars do you work on?",
    a: "Domestic and import cars. If you are not sure whether we can handle yours, call and ask.",
  },
  {
    q: "Do you do brake work?",
    a: "Yes. Brake pads, rotors, and rear drums and shoes are some of the most common jobs in the shop.",
  },
  {
    q: "Will I know the price before you start?",
    a: "Yes. Singh explains what the car needs and what it will cost first. Nothing gets done without your okay.",
  },
  {
    q: "Do I need an appointment?",
    a: `Call ${PHONE} before you come so Singh can tell you the best time to bring the car in.`,
  },
  {
    q: "What areas do you serve?",
    a: "The shop is on Auburn Blvd in Sacramento. Customers come from North Highlands, Citrus Heights, Arden-Arcade and all over Sacramento.",
  },
  {
    q: "Who will be working on my car?",
    a: "The owner, Jaswinder Singh, runs the shop himself. Customers know him as Singh, or Singh Pajji.",
  },
];

const areas = ["Sacramento", "North Highlands", "Citrus Heights", "Arden-Arcade"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "A-1 General Auto Repair",
  telephone: "+1-916-973-9677",
  founder: { "@type": "Person", name: "Jaswinder Singh" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "4520 Auburn Blvd",
    addressLocality: "Sacramento",
    addressRegion: "CA",
    postalCode: "95841",
    addressCountry: "US",
  },
  areaServed: areas,
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: "53" },
  hasMap: MAPS_URL,
};

const H2 = "font-heading text-[clamp(1.95rem,3.6vw,2.8rem)] font-bold text-ink";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cta focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="A-1 General Auto Repair home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand font-heading text-lg font-bold text-white">A-1</span>
            <span className="font-heading text-[1.3rem] font-bold leading-tight text-ink">
              General Auto Repair
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold text-ink lg:flex">
            <a className="hover:text-brand" href="#services">Services</a>
            <a className="hover:text-brand" href="#reviews">Reviews</a>
            <a className="hover:text-brand" href="#about">About Singh</a>
            <a className="hover:text-brand" href="#area">Location</a>
            <a className="hover:text-brand" href="#faq">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-heading text-xl font-bold text-ink md:block">{PHONE}</a>
            <a href={TEL} className="btn hidden h-12 items-center gap-2 rounded-lg bg-cta px-5 font-bold text-white hover:bg-cta-hover md:inline-flex">
              <Icon name="phone" className="h-5 w-5" /> Call Now
            </a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-11 w-11 place-items-center rounded-lg bg-cta text-white md:hidden">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="border-b border-line">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 md:py-24 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="rise font-heading text-[clamp(2.3rem,5vw,3.8rem)] font-bold leading-[1.05] text-ink">
                Honest Auto Repair in Sacramento, <span className="text-brand">on Auburn Blvd</span>
              </h1>
              <p className="rise rise-2 mt-5 max-w-[54ch] text-[1.18rem] text-muted">
                Brakes, engine repair and maintenance for domestic and import cars. Owner Jaswinder Singh runs the shop himself, and
                customers keep coming back because he is skilled, fair and straight with them.
              </p>
              <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn inline-flex h-14 items-center gap-2.5 rounded-lg bg-cta px-7 text-[1.1rem] font-bold text-white hover:bg-cta-hover">
                  <Icon name="phone" className="h-5 w-5" /> Call {PHONE}
                </a>
                <a href="#services" className="btn inline-flex h-14 items-center gap-2 rounded-lg border-2 border-ink/80 px-6 text-[1.05rem] font-bold text-ink hover:bg-ink hover:text-white">
                  See our services <Icon name="arrow" className="h-5 w-5" />
                </a>
              </div>
              <div className="rise rise-4 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-semibold text-ink">
                <span className="flex items-center gap-2"><Stars /> 4.5 from 53 reviews</span>
                <span className="flex items-center gap-1.5"><Icon name="user" className="h-5 w-5 text-brand" /> Owner-operated</span>
                <span className="flex items-center gap-1.5"><Icon name="car" className="h-5 w-5 text-brand" /> Domestic &amp; import</span>
              </div>
            </div>

            <aside className="rise rise-4 rounded-2xl border border-line bg-white p-7 shadow-[0_24px_50px_-32px_oklch(0.3_0.05_40/0.5)]" aria-label="Quick facts">
              <p className="font-heading text-2xl font-bold text-ink">Quick facts</p>
              <dl className="mt-5 space-y-4">
                <div className="flex gap-3">
                  <Icon name="user" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div><dt className="font-bold text-ink">Owner on the job</dt><dd className="text-muted">Jaswinder &ldquo;Singh Pajji&rdquo; Singh</dd></div>
                </div>
                <div className="flex gap-3">
                  <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div><dt className="font-bold text-ink">Shop</dt><dd className="text-muted">4520 Auburn Blvd, Sacramento</dd></div>
                </div>
                <div className="flex gap-3">
                  <Icon name="star" className="mt-0.5 h-5 w-5 shrink-0 text-star" />
                  <div><dt className="font-bold text-ink">What customers say</dt><dd className="text-muted">Honest, skilled, not greedy</dd></div>
                </div>
              </dl>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 font-bold text-brand underline-offset-4 hover:underline">
                Get directions <Icon name="arrow" className="h-4 w-4" />
              </a>
            </aside>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers trust A-1" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star" as IconName, big: "4.5 stars", small: "53 customer reviews" },
              { icon: "user" as IconName, big: "Owner-operated", small: "Singh does the work" },
              { icon: "hand" as IconName, big: "Fair prices", small: "Price before work starts" },
              { icon: "shield" as IconName, big: "Repairs that last", small: "Cars running years later" },
            ].map((t) => (
              <div key={t.big} className="flex items-center gap-3">
                <Icon name={t.icon} className="h-7 w-7 shrink-0 text-white/90" />
                <div>
                  <p className="font-heading text-lg font-bold leading-tight">{t.big}</p>
                  <p className="text-[0.92rem] text-white/85">{t.small}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <h2 className={H2}>Auto repair services</h2>
            <p className="mt-4 max-w-[60ch] text-[1.1rem] text-muted">
              The everyday repairs that keep Sacramento drivers on the road, done by the owner.
            </p>
            <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {services.map((s) => (
                <article key={s.title} className="reveal flex gap-5 border-t border-line pt-8">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-tint text-brand">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-[1.5rem] font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-muted">{s.body}</p>
                    <a href={TEL} className="mt-3 inline-flex items-center gap-1.5 font-bold text-brand underline-offset-4 hover:underline">
                      Call about this <Icon name="arrow" className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Stars className="h-6 w-6" />
                <h2 className={`${H2} mt-3`}>Rated 4.5 from 53 customer reviews</h2>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn inline-flex h-12 shrink-0 items-center gap-2 rounded-lg border-2 border-ink/80 bg-white px-5 font-bold text-ink hover:bg-ink hover:text-white">
                Read reviews on Google <Icon name="arrow" className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <figure className="reveal rounded-2xl bg-white p-8 md:p-10">
                <Stars />
                <blockquote className="mt-5 font-heading text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-snug text-ink">
                  &ldquo;{reviews[0].quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-muted"><span className="font-bold text-ink">{reviews[0].who}</span> · {reviews[0].job}</figcaption>
              </figure>
              <div className="grid gap-5">
                <figure className="reveal rounded-2xl bg-white p-7">
                  <Stars className="h-[1.1rem] w-[1.1rem]" />
                  <blockquote className="mt-4 text-[1.08rem] text-ink">&ldquo;{reviews[1].quote}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-muted"><span className="font-bold text-ink">{reviews[1].who}</span> · {reviews[1].job}</figcaption>
                </figure>
                <div className="reveal rounded-2xl bg-white p-7">
                  <p className="font-bold text-ink">What reviewers mention most</p>
                  <ul className="mt-3 space-y-2">
                    {themes.map((t) => (
                      <li key={t.t} className="flex gap-2.5 text-[0.98rem] text-muted">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                        <span><span className="font-bold text-ink">{t.t}.</span> {t.d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className={H2}>Meet Singh, the owner</h2>
              <div className="mt-6 space-y-4 text-[1.08rem] text-muted">
                <p>
                  A-1 General Auto Repair is a small, owner-operated shop on Auburn Blvd in Sacramento. Jaswinder Singh runs it
                  himself. Regulars call him Singh, or Singh Pajji, and when you call the shop you are talking to the person who will
                  actually work on your car.
                </p>
                <p>
                  The reviews tell the story better than we can. Customers describe Singh as honest, skilled and fair. One driver
                  said a repair Singh did four years ago is still holding up. Others mention that he has fixed small problems
                  without charging for them, because it was the right thing to do.
                </p>
                <p>
                  That is how a neighborhood repair shop should work. You get a straight answer about what is wrong, a fair price
                  before the work starts, and a car you can count on when you drive away.
                </p>
              </div>
            </div>
            <ul className="grid content-start gap-4">
              {[
                { icon: "user" as IconName, t: "The owner does the work", d: "No service writers or upsell scripts. You deal with Singh directly." },
                { icon: "hand" as IconName, t: "Fair, upfront pricing", d: "You know the cost before anything gets fixed." },
                { icon: "shield" as IconName, t: "Repairs built to last", d: "Customers report cars running strong years after a repair." },
                { icon: "car" as IconName, t: "Domestic and import", d: "Most makes and models are welcome. Call if you're unsure." },
              ].map((d) => (
                <li key={d.t} className="reveal flex gap-4 rounded-xl border border-line bg-white p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-tint text-brand">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-heading text-[1.25rem] font-bold text-ink">{d.t}</p>
                    <p className="text-[0.98rem] text-muted">{d.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <h2 className={H2}>How it works</h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand font-heading text-xl font-bold text-white">{i + 1}</span>
                  <h3 className="mt-4 font-heading text-[1.35rem] font-bold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <h2 className={H2}>Serving Sacramento and nearby</h2>
              <p className="mt-4 text-[1.08rem] text-muted">
                The shop is at {ADDRESS}. Drivers come in from North Highlands, Citrus Heights,
                Arden-Arcade and across Sacramento.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 font-semibold text-ink">
                    <Icon name="pin" className="h-4 w-4 text-brand" /> {a}
                  </li>
                ))}
              </ul>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn mt-8 inline-flex h-12 items-center gap-2 rounded-lg border-2 border-ink/80 px-5 font-bold text-ink hover:bg-ink hover:text-white">
                <Icon name="nav" className="h-5 w-5" /> Get directions
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <iframe title="Map showing A-1 General Auto Repair at 4520 Auburn Blvd, Sacramento" src={MAP_EMBED} className="h-[400px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <h2 className={H2}>Questions before you call</h2>
            <div className="mt-10 divide-y divide-line rounded-xl border border-line bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="px-6 py-1">
                  <summary className="flex items-center justify-between gap-4 py-4 text-[1.08rem] font-bold text-ink">
                    {f.q}
                    <Icon name="chev" className="chev h-5 w-5 shrink-0 text-brand" />
                  </summary>
                  <p className="pb-5 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section aria-label="Call A-1 General Auto Repair" className="bg-brand py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="font-heading text-[clamp(1.95rem,4vw,3rem)] font-bold">Car trouble? Call Singh.</h2>
              <p className="mt-3 max-w-[50ch] text-[1.1rem] text-white/90">
                Tell him what the car is doing and he will tell you honestly what it needs.
              </p>
            </div>
            <a href={TEL} className="btn inline-flex h-14 items-center gap-2.5 rounded-lg bg-white px-7 text-[1.15rem] font-bold text-cta hover:bg-tint">
              <Icon name="phone" className="h-5 w-5" /> {PHONE}
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-bg pb-28 pt-14 md:pb-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-heading text-2xl font-bold text-ink">A-1 General Auto Repair</p>
            <address className="mt-4 space-y-1.5 not-italic text-muted">
              <span className="block">4520 Auburn Blvd</span>
              <span className="block">Sacramento, CA 95841</span>
              <a href={TEL} className="block font-bold text-brand">{PHONE}</a>
            </address>
            <p className="mt-3 text-muted">Owner: Jaswinder Singh</p>
          </div>
          <div>
            <p className="font-bold text-ink">Services</p>
            <ul className="mt-3 space-y-1.5 text-muted">
              {["Brake repair", "Drums & shoes", "Engine repair", "Maintenance", "General auto repair"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-brand">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-ink">Areas served</p>
            <ul className="mt-3 space-y-1.5 text-muted">
              {areas.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1200px] flex-col justify-between gap-2 border-t border-line px-5 pt-6 text-[0.9rem] text-muted md:flex-row md:px-6">
          <p>&copy; {new Date().getFullYear()} A-1 General Auto Repair. All rights reserved.</p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google Maps</a>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-bg/95 p-3 backdrop-blur md:hidden">
        <a href={TEL} className="btn flex h-12 items-center justify-center gap-2 rounded-lg bg-cta font-bold text-white">
          <Icon name="phone" className="h-5 w-5" /> Call
        </a>
        <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-ink/80 font-bold text-ink">
          <Icon name="nav" className="h-5 w-5" /> Directions
        </a>
      </div>
    </>
  );
}
