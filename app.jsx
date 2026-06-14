/*
  ============================================================================
  SIROCCO RECORDS — Vitrine du studio  ·  Tizi Ouzou
  ----------------------------------------------------------------------------
  Site vitrine qui présente le studio d'enregistrement & de production.
  Stack : React + Tailwind (layout) + Lucide React (icônes)
  Charte : noir profond · rouge exact du logo (#F70405) · blanc
  Typo : Archivo (titres) · Hanken Grotesk (texte) · Instrument Serif (accents)

  • LOGO intégré exactement (data-URI). En prod → const LOGO_SRC = "/sirocco-logo.png";
  • Médias : composants <Ph/> = placeholders (commentés "REMPLACER").
  • SEO : compléter les balises <head> (title/description/OpenGraph).
  ============================================================================
*/

const { useState, useEffect, useRef } = React;
const { Menu, X, ArrowUpRight, ArrowRight, ArrowLeft, Plus, Check, Send, Play, Instagram, Youtube, Facebook, Mail, MapPin, Phone, Mic, Headphones, SlidersHorizontal, Camera, Music2, Guitar, Disc3, Users, Calendar } = window.LIcons;

// Aperçu : logo inline. En production → "/sirocco-logo.png"
const LOGO_SRC = "data:image/webp;base64,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";

const Logo = () => (
  <span className="sr-logo-badge"><img src={LOGO_SRC} alt="Sirocco Records" /></span>
);
const Eyebrow = ({ children }) => (
  <p className="sr-eyebrow"><span className="sr-tick" /> {children}</p>
);
const Ph = ({ label = "Visuel", Icon = Mic, className = "" }) => (
  <div className={`sr-ph ${className}`} role="img" aria-label={label}>
    <Icon size={22} /><span className="sr-ph-label">{label}</span>
  </div>
);
const Ribbon = () => (
  <div className="sr-ribbon" aria-hidden="true">
    <div className="sr-ribbon-track">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="sr-ribbon-item">Sirocco Records <i>✶</i> Studio de production <i>✶</i> Chaâbi <i>✶</i> Kabyle <i>✶</i> Raï <i>✶</i> Andalou <i>✶</i> Rock <i>✶</i> Pop <i>✶</i> Créations d'aujourd'hui <i>✶</i> </span>
      ))}
    </div>
  </div>
);
const Brush = () => (
  <div className="sr-brush reveal" aria-hidden="true">
    <svg viewBox="0 0 1200 70" preserveAspectRatio="none">
      <path className="sr-brush-path" d="M20 42 C 250 12 410 60 600 34 S 960 10 1182 46" fill="none" stroke="var(--red)" strokeWidth="16" strokeLinecap="round" />
    </svg>
  </div>
);

/* ── Données (placeholders — à remplacer) ──────────────────────────────── */
const NAV = [
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#works" },
  { label: "Artistes", href: "#roster" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { Icon: Calendar, value: 2020, label: "Depuis", plain: true },
  { Icon: Disc3, value: 300, suffix: "+", label: "Titres master" },
  { Icon: Mic, value: 50, suffix: "+", label: "Artistes" },
  { Icon: MapPin, text: "Tizi Ouzou", label: "Studio" },
];

// Galerie studio — REMPLACER les <Ph/> par vos vraies photos.
const STUDIO = [
  { label: "Régie & mixage", Icon: SlidersHorizontal },
  { label: "Cabine voix", Icon: Mic },
  { label: "Live room", Icon: Music2 },
  { label: "Instruments", Icon: Guitar },
  { label: "Plateau vidéo", Icon: Camera },
  { label: "Écoute & création", Icon: Headphones },
];
const STUDIO_FEATURES = [
  "Régie acoustiquement traitée",
  "Console & monitoring de référence",
  "Cabine voix isolée",
  "Large sélection de micros",
  "Backline & instruments",
  "Plateau vidéo intégré",
];

const SERVICES = [
  { Icon: Mic, t: "Enregistrement", d: "Voix & live : régie SSL, 5 micros pro, traitement acoustique. De la première prise au dernier timbre." },
  { Icon: SlidersHorizontal, t: "Mixage & mastering", d: "Mix 5.1 / stéréo / Atmos. Mastering streaming-ready (Spotify, Apple Music, Tidal). Délai 48h." },
  { Icon: Music2, t: "Production musicale", d: "Composition, arrangement, beatmaking. Spécialité : chaâbi, raï, kabyle — et vos hybridations." },
  { Icon: Camera, t: "Clips & captation", d: "Plateau 4K. Coulisse, éclairage studio. Captation live & performance." },
  { Icon: Disc3, t: "Distribution", d: "Agrégation vers Spotify, Apple Music, YouTube, Deezer. Gestion droits & métadonnées ISO." },
  { Icon: Users, t: "Suivi d'artistes", d: "Accompagnement de projet : stratégie de sortie, planning release, coaching." },
];

// Roster — noms & visuels À CONFIRMER / REMPLACER.
const ARTISTS = [
  { name: "Reda Taliani", style: "Raï · Chaâbi moderne" },
  { name: "Mohamed Allaoua", style: "Chanson kabyle" },
  { name: "Houari Dauphin", style: "Raï" },
  { name: "Cheb Azzedine", style: "Raï" },
  { name: "Massi", style: "Folk · Kabyle" },
  { name: "Idir", style: "Légende kabyle" },
];

const WORKS = [
  { title: "Production — Clip 1", type: "Clip", platform: "youtube", videoId: "0Edib01sESM" },
  { title: "Production — Clip 2", type: "Clip", platform: "youtube", videoId: "JHg6AxYzC4Q" },
  { title: "Production — Clip 3", type: "Clip", platform: "youtube", videoId: "K8bDuNi7ZIw" },
  { title: "Production — Clip 4", type: "Clip", platform: "youtube", videoId: "0lg3HDzMc1U" },
];

const PARTNERS = ["Diffuseur TV", "Radio", "Festival", "Marque", "Institution", "Plateforme"];
const SOCIALS = [
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/siroccorecords/" },
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@siroccorecords" },
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/sirocco.records" },
];

/* ── Cartes ─────────────────────────────────────────────────────────────── */
/* Chiffre clé avec compteur animé à l'arrivée à l'écran */
function Stat({ Icon, value, suffix = "", label, plain, text, index }) {
  const [n, setN] = useState(plain || text ? value : 0);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    if (plain || text) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) { setN(value); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const dur = 1500, t0 = performance.now();
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          setN(Math.round((1 - Math.pow(1 - p, 3)) * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }), { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [value, plain, text]);

  return (
    <div className="sr-stat reveal" ref={ref} style={{ transitionDelay: `${index * 70}ms` }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`); e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`); }}>
      <span className="sr-stat-shine" aria-hidden="true" />
      <span className="sr-stat-icon"><Icon size={17} /></span>
      <div className="sr-stat-value">{text ? text : `${n}${suffix}`}</div>
      <div className="sr-stat-label sr-label sr-dim">{label}</div>
    </div>
  );
}

function ArtistCard({ name, style, index }) {
  return (
    <article className="sr-artist reveal" style={{ transitionDelay: `${index * 55}ms` }}>
      {/* REMPLACER : <img src="/artists/xxx.jpg" alt={name} /> */}
      <Ph label={name} Icon={Mic} className="sr-artist-img" />
      <div className="sr-artist-meta">
        <span className="sr-label sr-dim">{style}</span>
        <h3 className="sr-artist-name">{name}</h3>
      </div>
    </article>
  );
}

function WorkCard({ title, type, platform, index, videoId }) {
  const youtubeUrl = videoId ? `https://youtu.be/${videoId}` : "#";
  return (
    <article className="sr-work reveal" style={{ transitionDelay: `${index * 55}ms` }}>
      <a className="sr-work-media" href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label={`Voir : ${title}`}>
        <Ph label={type} Icon={Play} className="sr-work-ph" />
        <span className="sr-play" aria-hidden="true"><Play size={20} fill="currentColor" /></span>
        <span className="sr-work-brand"><Youtube size={15} /></span>
      </a>
      <div className="sr-work-body">
        <span className="sr-label sr-dim">{type}</span>
        <h3 className="sr-work-title">{title}</h3>
      </div>
    </article>
  );
}

/* ── Page "Réserver" ─────────────────────────────────────────── */
const PROJECT_TYPES = ["Enregistrement studio", "Production de clip", "Captation live", "Single", "Album / EP", "Mixage & mastering", "Composition / arrangement", "Distribution numérique", "Gestion de talent", "Autre"];
const PROJECT_GENRES = ["Chaâbi", "Kabyle", "Raï", "Andalou", "Moderne / Pop", "Autre"];
const TIMELINES = ["Au plus vite", "1 – 3 mois", "3 – 6 mois", "Flexible"];
const SOURCES = ["Instagram", "YouTube", "Facebook", "Recommandation", "Recherche web", "Autre"];

function StartProject({ onBack }) {
  const [types, setTypes] = useState([]);
  const [genres, setGenres] = useState([]);
  const [timeline, setTimeline] = useState("");
  const [other, setOther] = useState({ type: "", genre: "", source: "" });
  const [info, setInfo] = useState({ name: "", entity: "", email: "", phone: "", city: "", source: "", details: "", links: "" });
  const [consent, setConsent] = useState(false);
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);

  const toggle = (setter) => (v) => setter((a) => (a.includes(v) ? a.filter((x) => x !== v) : [...a, v]));
  const set = (k) => (e) => setInfo({ ...info, [k]: e.target.value });
  const emailOk = /\S+@\S+\.\S+/.test(info.email);
  const valid = info.name.trim() && emailOk && info.phone.trim() && consent;

  const submit = () => {
    setTouched(true);
    if (!valid) { document.querySelector(".sr-form-error")?.scrollIntoView({ behavior: "smooth", block: "center" }); return; }
    // TODO : brancher l'envoi réel (API, email, ou service type Formspree).
    setSent(true); window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (sent) {
    return (
      <main className="sr-start">
        <div className="sr-container">
          <div className="sr-done">
            <span className="sr-done-icon"><Check size={30} /></span>
            <h1 className="sr-h2">Demande envoyée.</h1>
            <span className="sr-rule" />
            <p className="sr-lead sr-muted">Merci {info.name.split(" ")[0]}. Notre équipe revient vers vous sous 48 h pour parler de votre projet.</p>
            <button type="button" className="sr-btn sr-btn-ghost" onClick={onBack}><ArrowLeft size={16} /> Retour à l'accueil</button>
          </div>
        </div>
      </main>
    );
  }

  const errClass = (bad) => `sr-input ${touched && bad ? "is-error" : ""}`;
  return (
    <main className="sr-start">
      <div className="sr-container">
        <button type="button" className="sr-back" onClick={onBack}><ArrowLeft size={16} /> Retour</button>
        <header className="sr-start-head reveal is-visible">
          <h1 className="sr-start-title">Dis-nous tout sur ton projet</h1>
          <p className="sr-lead sr-muted">Genre, budget, timeline, références. Plus tu es précis, plus on sera pertinent. Les * sont obligatoires.</p>
          <ul className="sr-assure">
            <li><Check size={14} /> Réponse en 24h</li>
            <li><Check size={14} /> Devis gratuit</li>
            <li><Check size={14} /> Zéro engagement</li>
          </ul>
          <span className="sr-rule" />
        </header>

        <div className="sr-start-form">
          <fieldset className="sr-fieldset reveal">
            <legend className="sr-legend"><span className="sr-tick" /> Type de projet <span className="sr-dim">— plusieurs choix possibles</span></legend>
            <div className="sr-chips">
              {PROJECT_TYPES.map((t) => <button type="button" key={t} className={`sr-chip ${types.includes(t) ? "is-on" : ""}`} aria-pressed={types.includes(t)} onClick={() => toggle(setTypes)(t)}>{t}</button>)}
            </div>
            {types.includes("Autre") && (
              <input className="sr-input sr-other" type="text" placeholder="Précisez le type de projet…" value={other.type} onChange={(e) => setOther({ ...other, type: e.target.value })} />
            )}
          </fieldset>
          <fieldset className="sr-fieldset reveal">
            <legend className="sr-legend"><span className="sr-tick" /> Genre musical <span className="sr-dim">— plusieurs choix possibles</span></legend>
            <div className="sr-chips">
              {PROJECT_GENRES.map((g) => <button type="button" key={g} className={`sr-chip ${genres.includes(g) ? "is-on" : ""}`} aria-pressed={genres.includes(g)} onClick={() => toggle(setGenres)(g)}>{g}</button>)}
            </div>
            {genres.includes("Autre") && (
              <input className="sr-input sr-other" type="text" placeholder="Précisez le genre musical…" value={other.genre} onChange={(e) => setOther({ ...other, genre: e.target.value })} />
            )}
          </fieldset>
          <fieldset className="sr-fieldset reveal">
            <legend className="sr-legend"><span className="sr-tick" /> Échéance souhaitée</legend>
            <div className="sr-chips">
              {TIMELINES.map((t) => <button type="button" key={t} className={`sr-chip ${timeline === t ? "is-on" : ""}`} aria-pressed={timeline === t} onClick={() => setTimeline(t)}>{t}</button>)}
            </div>
          </fieldset>
          <fieldset className="sr-fieldset reveal">
            <legend className="sr-legend"><span className="sr-tick" /> Vos coordonnées</legend>
            <div className="sr-start-grid">
              <label className="sr-field"><span className="sr-label sr-dim">Nom complet *</span>
                <input className={errClass(!info.name.trim())} type="text" placeholder="Votre nom et prénom" value={info.name} onChange={set("name")} /></label>
              <label className="sr-field"><span className="sr-label sr-dim">Nom d'artiste / Structure</span>
                <input className="sr-input" type="text" placeholder="Nom d'artiste, label, agence…" value={info.entity} onChange={set("entity")} /></label>
              <label className="sr-field"><span className="sr-label sr-dim">Email *</span>
                <input className={errClass(!emailOk)} type="email" placeholder="vous@email.com" value={info.email} onChange={set("email")} /></label>
              <label className="sr-field"><span className="sr-label sr-dim">Téléphone *</span>
                <input className={errClass(!info.phone.trim())} type="tel" placeholder="+213 …" value={info.phone} onChange={set("phone")} /></label>
              <label className="sr-field"><span className="sr-label sr-dim">Ville / Wilaya</span>
                <input className="sr-input" type="text" placeholder="Tizi Ouzou…" value={info.city} onChange={set("city")} /></label>
              <label className="sr-field"><span className="sr-label sr-dim">Comment nous avez-vous connus ?</span>
                <select className="sr-input sr-select" value={info.source} onChange={set("source")}>
                  <option value="">Sélectionner…</option>
                  {SOURCES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select></label>
            </div>
            {info.source === "Autre" && (
              <label className="sr-field" style={{ marginTop: "16px" }}><span className="sr-label sr-dim">Précisez</span>
                <input className="sr-input sr-other" type="text" placeholder="Comment nous avez-vous connus ?" value={other.source} onChange={(e) => setOther({ ...other, source: e.target.value })} /></label>
            )}
          </fieldset>
          <fieldset className="sr-fieldset reveal">
            <legend className="sr-legend"><span className="sr-tick" /> Votre projet</legend>
            <label className="sr-field"><span className="sr-label sr-dim">Décrivez votre projet</span>
              <textarea className="sr-input" rows={5} placeholder="Style, objectifs, nombre de titres, artistes impliqués, échéances, attentes…" value={info.details} onChange={set("details")} /></label>
            <label className="sr-field" style={{ marginTop: "16px" }}><span className="sr-label sr-dim">Liens (maquettes, références, réseaux)</span>
              <input className="sr-input" type="text" placeholder="https://…" value={info.links} onChange={set("links")} /></label>
          </fieldset>

          <label className={`sr-check ${touched && !consent ? "is-error" : ""}`}>
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            <span>J'accepte d'être recontacté(e) au sujet de ma demande. Mes informations restent strictement confidentielles. *</span>
          </label>
          {touched && !valid && (
            <p className="sr-form-error"><span className="sr-tick" /> Merci de renseigner les champs requis : nom, email valide, téléphone et consentement.</p>
          )}
          <div className="sr-start-submit">
            <button type="button" className="sr-btn sr-btn-primary sr-btn-lg" onClick={submit}>Envoyer la demande <Send size={16} /></button>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ── Composant principal ────────────────────────────────────────────────── */
function SiroccoRecords() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("home");
  const [pendingScroll, setPendingScroll] = useState(null);
  const [active, setActive] = useState("studio");
  const [intro, setIntro] = useState(true);
  const progressRef = useRef(null);

  // Intro de marque
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) { setIntro(false); return; }
    const t = setTimeout(() => setIntro(false), 1800);
    return () => clearTimeout(t);
  }, []);

  // Animations d'apparition (relancées à chaque vue)
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [view]);

  // Défilement vers une ancre après retour à l'accueil
  useEffect(() => {
    if (view === "home" && pendingScroll) { document.querySelector(pendingScroll)?.scrollIntoView({ behavior: "smooth" }); setPendingScroll(null); }
  }, [view, pendingScroll]);

  // Header + barre de progression + section active
  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${h > 0 ? Math.min(y / h, 1) : 0})`;
      if (view === "home") {
        let cur = ids[0];
        for (const id of ids) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= 130) cur = id; }
        setActive((p) => (p === cur ? p : cur));
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [view]);

  const close = () => setOpen(false);
  const navTo = (href) => { close(); if (view === "home") document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); else { setPendingScroll(href); setView("home"); } };
  const openStart = () => { close(); setView("start"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goTop = () => { close(); if (view !== "home") setView("home"); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="sr-root">
      <style>{STYLES}</style>

      {intro && (
        <div className="sr-intro" aria-hidden="true">
          <div className="sr-intro-logo"><Logo /><span className="sr-intro-line" /></div>
        </div>
      )}

      <div className="sr-progress" aria-hidden="true"><span ref={progressRef} /></div>

      {/* ====================== HEADER ====================== */}
      <header className={`sr-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="sr-container sr-nav">
          <a href="#top" className="sr-brand" aria-label="Sirocco Records — accueil" onClick={(e) => { e.preventDefault(); goTop(); }}><Logo /></a>
          <nav className="sr-nav-links" aria-label="Navigation principale">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className={`sr-nav-link ${view === "home" && active === n.href.slice(1) ? "is-active" : ""}`} onClick={(e) => { e.preventDefault(); navTo(n.href); }}>{n.label}</a>
            ))}
          </nav>
          <div className="sr-nav-actions">
            <button type="button" className="sr-btn sr-btn-primary sr-nav-cta" onClick={openStart}>Réserver</button>
            <button className="sr-burger" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
        <div className={`sr-mobile ${open ? "is-open" : ""}`}>
          {NAV.map((n) => <a key={n.href} href={n.href} className="sr-mobile-link" onClick={(e) => { e.preventDefault(); navTo(n.href); }}>{n.label}</a>)}
          <button type="button" className="sr-btn sr-btn-primary" onClick={openStart}>Réserver</button>
        </div>
      </header>

      {view === "home" && (
      <main id="top">
        {/* ============================ HERO ============================ */}
        <section className="sr-hero">
          <div className="sr-hero-media" aria-hidden="true">
            {/* REMPLACER par une image/vidéo du studio :
                <video autoPlay muted loop playsInline poster="..."><source src="/studio-hero.mp4" type="video/mp4" /></video> */}
            <div className="sr-hero-shade" />
            <div className="sr-berber sr-berber--hero" aria-hidden="true" />
          </div>
          <div className="sr-container sr-hero-content">
            <div className="sr-hero-text reveal is-visible">
              <h1 className="sr-hero-title">Enregistrez la Musique Algérienne<br />dans la Salle où elle Sonne Juste.</h1>
              <p className="sr-hero-lead">Traitement acoustique professionnel. Console SSL. Micros Neumann. Mixing en Dolby Atmos. On maîtrise chaque couche : du chaâbi au rock. Livraison streaming-ready en 48h.</p>
              <div className="sr-hero-cta">
                <a href="#studio" className="sr-btn sr-btn-primary" onClick={(e) => { e.preventDefault(); navTo("#studio"); }}>Réserver un créneau <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================== STATS =========================== */}
        <section className="sr-statbar" aria-label="Chiffres clés">
          <div className="sr-container sr-stats">
            {STATS.map((s, i) => <Stat key={s.label} {...s} index={i} />)}
          </div>
        </section>

        {/* ====================== STUDIO (cœur) ====================== */}
        <section id="studio" className="sr-section sr-studio sr-berber-host">
          <div className="sr-berber" aria-hidden="true" />
          <div className="sr-container">
            <div className="sr-head reveal">
              <div>
                <h2 className="sr-h2">Équipement<br />Professionnel</h2>
                <span className="sr-rule" />
              </div>
              <p className="sr-studio-intro sr-muted">Régie SSL. Micros Neumann U87, AKG 414, Shure SM7B. Traitement acoustique avancé : absorption sélective, diffusion par quarts de longueur d'onde. Monitoring Yamaha HS8, chaîne de mastering Dolby Atmos.</p>
            </div>

            <div className="sr-gallery">
              {STUDIO.map((s, i) => (
                <figure key={s.label} className="sr-shot reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  {/* REMPLACER : <img src={`/studio/${i + 1}.jpg`} alt={s.label} className="sr-shot-img" /> */}
                  <Ph label={s.label} Icon={s.Icon} className="sr-shot-ph" />
                  <figcaption className="sr-shot-cap"><span className="sr-tick" /> {s.label}</figcaption>
                </figure>
              ))}
            </div>

            <div className="sr-studio-foot reveal">
              <ul className="sr-features">
                {STUDIO_FEATURES.map((f) => <li key={f}><Check size={15} /> {f}</li>)}
              </ul>
              <button type="button" className="sr-btn sr-btn-primary" onClick={openStart}>Réserver une session <ArrowRight size={16} /></button>
            </div>
          </div>
        </section>

        <Ribbon />

        {/* =========================== SERVICES ========================= */}
        <section id="services" className="sr-section">
          <div className="sr-container">
            <div className="sr-head reveal">
              <div>
                <Eyebrow>Ce que nous faisons</Eyebrow>
                <h2 className="sr-h2">Services</h2>
                <span className="sr-rule" />
              </div>
              <p className="sr-head-text sr-muted">Toute la chaîne de création réunie sous un même toit.</p>
            </div>
            <div className="sr-services-grid">
              {SERVICES.map((s, i) => (
                <article key={s.t} className="sr-service reveal" style={{ transitionDelay: `${i * 55}ms` }}>
                  <span className="sr-service-icon"><s.Icon size={20} /></span>
                  <h3 className="sr-service-title">{s.t}</h3>
                  <p className="sr-service-desc sr-muted">{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Brush />

        {/* ======================== RÉALISATIONS ======================= */}
        <section id="works" className="sr-section sr-works">
          <div className="sr-container">
            <div className="sr-head reveal">
              <div>
                <Eyebrow>Réalisations</Eyebrow>
                <h2 className="sr-h2">Sorties du studio</h2>
                <span className="sr-rule" />
              </div>
              <a href="https://www.youtube.com/@siroccorecords" target="_blank" rel="noopener noreferrer" className="sr-textlink sr-head-link">Chaîne YouTube <ArrowUpRight size={15} /></a>
            </div>
            <div className="sr-works-grid">{WORKS.map((w, i) => <WorkCard key={w.title} {...w} index={i} />)}</div>
          </div>
        </section>

        {/* =========================== ROSTER ========================== */}
        <section id="roster" className="sr-section">
          <div className="sr-container">
            <div className="sr-head reveal">
              <div>
                <Eyebrow>Ils ont enregistré ici</Eyebrow>
                <h2 className="sr-h2">Nos artistes</h2>
                <span className="sr-rule" />
              </div>
              <button type="button" className="sr-textlink sr-head-link" onClick={openStart}>Rejoindre le studio <ArrowUpRight size={15} /></button>
            </div>
            <div className="sr-roster-grid">{ARTISTS.map((a, i) => <ArtistCard key={a.name} {...a} index={i} />)}</div>
          </div>
        </section>

        <Brush />

        {/* ========================= PARTENAIRES ======================= */}
        <section className="sr-partners-sec">
          <div className="sr-container">
            <p className="sr-eyebrow sr-center reveal"><span className="sr-tick" /> Ils nous font confiance</p>
            <div className="sr-partners reveal">
              {PARTNERS.map((p) => <div key={p} className="sr-partner" title={p}><span className="sr-label">{p}</span></div>)}
            </div>
          </div>
        </section>

        {/* ========================== CONTACT ========================== */}
        <section id="contact" className="sr-section sr-contact sr-berber-host">
          <div className="sr-berber" aria-hidden="true" />
          <div className="sr-container sr-contact-grid">
            <div className="sr-contact-info reveal">
              <h2 className="sr-h2">Réservez<br />votre créneau</h2>
              <span className="sr-rule" />
              <p className="sr-lead sr-muted">Tizi Ouzou, Algérie. On peut commencer demain.</p>
              <ul className="sr-contact-list">
                <li><Mail size={16} /> contact@siroccorecords.com</li>
                <li><Phone size={16} /> +213 (0)550 00 00 00</li>
              </ul>
              <div className="sr-socials">{SOCIALS.map(({ Icon, label, href }) => <a key={label} href={href} className="sr-social" aria-label={label}><Icon size={18} /></a>)}</div>
            </div>
            <div className="sr-contact-cta reveal" style={{ transitionDelay: "100ms" }}>
              <h3 className="sr-cta-title">Prendre rendez-vous</h3>
              <p className="sr-muted">Dis-nous ton projet, ton style, ton budget. Réponse en 24h avec un devis ou une contre-proposition.</p>
              <button type="button" className="sr-btn sr-btn-primary sr-btn-lg" onClick={openStart}>Envoyer ta demande <ArrowRight size={16} /></button>
            </div>
          </div>
        </section>
      </main>
      )}

      {view === "start" && <StartProject onBack={goTop} />}

      {view === "home" && <Ribbon />}

      {/* =========================== FOOTER =========================== */}
      <footer className="sr-footer sr-berber-host">
        <div className="sr-berber" aria-hidden="true" />
        <div className="sr-container">
          <div className="sr-footer-top">
            <div className="sr-footer-brand">
              <Logo />
              <p className="sr-muted">Studio d'enregistrement, de production et de distribution de la musique algérienne — Tizi Ouzou.</p>
            </div>
            <nav className="sr-footer-nav" aria-label="Navigation pied de page">
              <span className="sr-label sr-dim">Naviguer</span>
              {NAV.map((n) => <a key={n.href} href={n.href} onClick={(e) => { e.preventDefault(); navTo(n.href); }}>{n.label}</a>)}
            </nav>
            <div className="sr-footer-social">
              <span className="sr-label sr-dim">Suivre</span>
              <div className="sr-socials">{SOCIALS.map(({ Icon, label, href }) => <a key={label} href={href} className="sr-social" aria-label={label}><Icon size={18} /></a>)}</div>
            </div>
          </div>
          <div className="sr-footer-bottom">
            <p className="sr-label sr-dim">© {new Date().getFullYear()} Sirocco Records — Tous droits réservés.</p>
            <div className="sr-footer-legal"><a href="#">Mentions légales</a><a href="#">Confidentialité</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ========================================================================
   STYLES
   ======================================================================== */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Hanken+Grotesk:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap');

.sr-root {
  --red: #F70405; --red-deep: #C90305; --red-soft: rgba(247,4,5,0.10);
  --bg: #0A0A0A; --bg-2: #0F0F10; --surface: #151517; --surface-2: #1C1C1F;
  --line: rgba(255,255,255,0.10); --line-2: rgba(255,255,255,0.20);
  --text: #F4F3F1; --muted: #A2A2A6; --dim: #6C6C70;
  --fd: 'Archivo', system-ui, sans-serif; --fb: 'Hanken Grotesk', system-ui, sans-serif; --fs: 'Instrument Serif', Georgia, serif;
  background: var(--bg); color: var(--text); font-family: var(--fb); line-height: 1.6; -webkit-font-smoothing: antialiased; scroll-behavior: smooth;
}
.sr-root * { box-sizing: border-box; }
.sr-root a { color: inherit; text-decoration: none; }
.sr-root section { scroll-margin-top: 84px; }
.sr-container { width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 24px; }
.sr-label { font-family: var(--fd); font-weight: 600; font-size: 11.5px; letter-spacing: .16em; text-transform: uppercase; }
.sr-muted { color: var(--muted); } .sr-dim { color: var(--dim); } .sr-center { justify-content: center; text-align: center; }

.sr-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: var(--fd); font-weight: 600; font-size: 11.5px; letter-spacing: .18em; text-transform: uppercase; color: var(--muted); margin: 0 0 20px; }
.sr-tick { width: 9px; height: 9px; background: var(--red); display: inline-block; border-radius: 1px; flex: none; }
.sr-h2 { font-family: var(--fd); font-weight: 800; font-size: clamp(2rem, 4.4vw, 3.1rem); line-height: 1.02; letter-spacing: -.025em; margin: 0; }
.sr-lead { font-size: clamp(1.05rem, 1.5vw, 1.2rem); line-height: 1.65; margin: 0 0 20px; }
.sr-rule { display: block; height: 3px; width: 0; background: var(--red); margin-top: 22px; border-radius: 2px; transition: width .7s cubic-bezier(.2,.7,.2,1); }
.reveal.is-visible .sr-rule, .sr-head.is-visible .sr-rule { width: 56px; }

.sr-btn { display: inline-flex; align-items: center; gap: 9px; font-family: var(--fb); font-weight: 600; font-size: .94rem; padding: 13px 22px; border-radius: 6px; cursor: pointer; border: 1px solid transparent; transition: transform .2s, background .2s, border-color .2s, color .2s; }
.sr-btn-primary { background: var(--red); color: #fff; }
.sr-btn-primary:hover { background: var(--red-deep); transform: translateY(-1px); }
.sr-btn-ghost { background: transparent; color: var(--text); border-color: var(--line-2); }
.sr-btn-ghost:hover { border-color: #fff; transform: translateY(-1px); }
.sr-btn-lg { padding: 16px 28px; font-size: 1rem; }
.sr-btn-block { width: 100%; justify-content: center; }
.sr-textlink { display: inline-flex; align-items: center; gap: 6px; font-family: var(--fb); font-weight: 600; font-size: .92rem; color: var(--text); background: none; border: none; cursor: pointer; transition: gap .2s, color .2s; }
.sr-textlink:hover { gap: 9px; color: var(--red); }

/* Intro de marque */
.sr-intro { position: fixed; inset: 0; z-index: 200; background: var(--bg); display: grid; place-items: center; animation: introOut .7s cubic-bezier(.8,0,.2,1) 1.05s forwards; }
.sr-intro-logo { display: grid; justify-items: center; gap: 18px; animation: introIn .8s cubic-bezier(.2,.7,.2,1) both; }
.sr-intro-line { width: 0; height: 3px; background: var(--red); border-radius: 2px; animation: introLine .9s ease .25s forwards; }
@keyframes introIn { from { opacity: 0; transform: translateY(12px) scale(.96); } to { opacity: 1; transform: none; } }
@keyframes introLine { to { width: 80px; } }
@keyframes introOut { to { transform: translateY(-100%); } }

/* Barre de progression */
.sr-progress { position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 60; pointer-events: none; }
.sr-progress span { display: block; height: 100%; background: var(--red); transform: scaleX(0); transform-origin: left; will-change: transform; }

/* Logo */
.sr-logo-badge { display: inline-flex; align-items: center; justify-content: center; background: #fff; border-radius: 8px; padding: 7px 12px; line-height: 0; }
.sr-logo-badge img { height: 30px; width: auto; display: block; }

/* Header */
.sr-header { position: fixed; inset: 0 0 auto 0; z-index: 50; border-bottom: 1px solid transparent; transition: background .3s, border-color .3s, backdrop-filter .3s; }
.sr-header.is-scrolled { background: rgba(10,10,10,.8); backdrop-filter: blur(16px); border-bottom-color: var(--line); }
.sr-nav { display: flex; align-items: center; justify-content: space-between; height: 64px; }
.sr-nav-links { display: none; gap: 34px; margin-left: 40px; margin-right: auto; }
.sr-nav-link { font-size: .92rem; font-weight: 500; color: var(--muted); position: relative; padding: 4px 0; transition: color .2s; }
.sr-nav-link:hover, .sr-nav-link.is-active { color: var(--text); }
.sr-nav-link::after { content: ""; position: absolute; left: 0; bottom: -2px; height: 2px; width: 0; background: var(--red); transition: width .25s; }
.sr-nav-link:hover::after, .sr-nav-link.is-active::after { width: 100%; }
.sr-nav-actions { display: flex; align-items: center; gap: 12px; }
.sr-nav-cta { display: none; }
.sr-burger { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 8px; background: var(--surface); border: 1px solid var(--line); color: var(--text); cursor: pointer; }
.sr-mobile { display: grid; gap: 4px; padding: 0 24px; max-height: 0; overflow: hidden; background: rgba(10,10,10,.97); backdrop-filter: blur(16px); transition: max-height .4s ease, padding .4s; }
.sr-mobile.is-open { max-height: 460px; padding: 12px 24px 26px; border-bottom: 1px solid var(--line); }
.sr-mobile-link { padding: 13px 0; font-size: 1.05rem; font-weight: 500; border-bottom: 1px solid var(--line); }
.sr-mobile .sr-btn { margin-top: 16px; justify-content: center; }

/* Hero */
.sr-hero { position: relative; min-height: 100vh; display: flex; align-items: flex-end; overflow: hidden; }
.sr-hero-media { position: absolute; inset: 0; z-index: 0; }
.sr-hero-ph { width: 100%; height: 100%; border: none; border-radius: 0; animation: kenburns 22s ease-in-out infinite alternate; }
@keyframes kenburns { from { transform: scale(1.05); } to { transform: scale(1.15); } }
.sr-hero-shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,10,10,.55) 0%, rgba(10,10,10,.25) 38%, rgba(10,10,10,.85) 88%, var(--bg) 100%), linear-gradient(90deg, rgba(10,10,10,.7), transparent 60%); }
.sr-hero-content { position: relative; z-index: 2; width: 100%; padding: 50px 24px 54px; }
.sr-hero-text { max-width: 780px; }
.sr-hero-text > * { opacity: 0; animation: heroUp 1s cubic-bezier(.2,.7,.2,1) forwards; }
.sr-hero-text > *:nth-child(1) { animation-delay: .15s; } .sr-hero-text > *:nth-child(2) { animation-delay: .32s; }
.sr-hero-text > *:nth-child(3) { animation-delay: .5s; } .sr-hero-text > *:nth-child(4) { animation-delay: .66s; }
@keyframes heroUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
.sr-hero-title { font-family: var(--fd); font-weight: 800; font-size: clamp(2.6rem, 7.5vw, 5.4rem); line-height: .98; letter-spacing: -.035em; margin: 0 0 24px; }
.sr-hero-lead { font-size: clamp(1.1rem, 1.9vw, 1.35rem); color: var(--muted); max-width: 600px; margin: 0 0 32px; }
.sr-hero-cta { display: flex; flex-wrap: wrap; align-items: center; gap: 22px; }
.sr-hero-foot { margin: 46px 0 0; }

/* Stats */
.sr-statbar { border-top: 1px solid var(--line); background: linear-gradient(180deg, var(--bg), var(--bg-2)); }
.sr-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; padding: 28px 0 34px; }
.sr-stat { --mx: 50%; --my: 0%; position: relative; padding: 26px 24px 24px; background: var(--surface); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; isolation: isolate; transition: transform .45s cubic-bezier(.2,.7,.2,1), border-color .45s, background .45s, box-shadow .45s; }
/* Accent bar (haut) */
.sr-stat::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--red); transform: scaleX(0); transform-origin: left; transition: transform .5s cubic-bezier(.2,.7,.2,1); z-index: 2; }
/* Halo lumineux qui suit le curseur */
.sr-stat::after { content: ""; position: absolute; inset: 0; z-index: -1; opacity: 0; background: radial-gradient(220px circle at var(--mx) var(--my), color-mix(in oklch, var(--red) 26%, transparent), transparent 70%); transition: opacity .45s ease; pointer-events: none; }
.sr-stat:hover { transform: translateY(-7px); border-color: var(--red); background: var(--surface-2); box-shadow: 0 18px 40px -18px color-mix(in oklch, var(--red) 65%, transparent), 0 2px 0 0 color-mix(in oklch, var(--red) 30%, transparent) inset; }
.sr-stat:hover::before { transform: scaleX(1); }
.sr-stat:hover::after { opacity: 1; }
/* Balayage lumineux diagonal */
.sr-stat-shine { position: absolute; inset: 0; z-index: 1; pointer-events: none; overflow: hidden; border-radius: inherit; }
.sr-stat-shine::before { content: ""; position: absolute; top: -60%; left: -75%; width: 50%; height: 220%; transform: rotate(18deg) translateX(0); background: linear-gradient(90deg, transparent, color-mix(in oklch, var(--red) 22%, transparent), transparent); opacity: 0; transition: opacity .2s; }
.sr-stat:hover .sr-stat-shine::before { opacity: 1; animation: statShine .9s cubic-bezier(.2,.7,.2,1); }
@keyframes statShine { from { transform: rotate(18deg) translateX(0); } to { transform: rotate(18deg) translateX(620%); } }
.sr-stat-icon { position: relative; z-index: 2; display: inline-grid; place-items: center; width: 40px; height: 40px; border-radius: 10px; background: var(--red-soft); color: var(--red); margin-bottom: 18px; transition: background .45s, color .45s, transform .45s cubic-bezier(.34,1.56,.64,1), box-shadow .45s; }
.sr-stat:hover .sr-stat-icon { background: var(--red); color: #fff; transform: scale(1.12) rotate(-6deg); box-shadow: 0 8px 18px -6px color-mix(in oklch, var(--red) 70%, transparent); }
.sr-stat-value { position: relative; z-index: 2; font-family: var(--fd); font-weight: 800; font-size: clamp(1.9rem, 4.3vw, 2.7rem); line-height: 1; letter-spacing: -.02em; font-variant-numeric: tabular-nums; transition: color .45s, transform .45s cubic-bezier(.2,.7,.2,1); }
.sr-stat:hover .sr-stat-value { color: #fff; transform: translateX(3px); }
.sr-stat-label { position: relative; z-index: 2; margin-top: 12px; color: var(--muted); transition: color .45s; }
.sr-stat:hover .sr-stat-label { color: var(--text); }
@media (prefers-reduced-motion: reduce) { .sr-stat:hover .sr-stat-shine::before { animation: none; } }

/* Sections génériques */
.sr-section { padding: 92px 0; }
.sr-head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 18px; margin-bottom: 50px; }
.sr-head > div:first-child { flex: 1 1 auto; }
.sr-head-link { margin-bottom: 6px; }
.sr-head-text { max-width: 320px; margin-bottom: 6px; }

/* Placeholders */
.sr-ph { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; background: radial-gradient(120% 130% at 28% 18%, var(--surface-2), var(--bg) 82%); color: var(--dim); border: 1px solid var(--line); border-radius: 10px; overflow: hidden; }
.sr-ph::after { content: ""; position: absolute; inset: 0; opacity: .5; pointer-events: none; background-image: repeating-linear-gradient(135deg, rgba(255,255,255,.025) 0 1px, transparent 1px 9px); }
.sr-ph-label { font-family: var(--fd); font-weight: 600; font-size: 10.5px; letter-spacing: .16em; text-transform: uppercase; }

/* Studio */
.sr-studio { background: var(--bg-2); }
.sr-studio-intro { max-width: 420px; margin: 0 0 6px; }
.sr-gallery { display: grid; grid-template-columns: repeat(2, 1fr); grid-auto-rows: 220px; gap: 12px; }
.sr-shot { position: relative; border-radius: 10px; overflow: hidden; }
.sr-shot .sr-shot-ph, .sr-shot .sr-shot-img { width: 100%; height: 100%; border-radius: 0; object-fit: cover; transition: transform .8s cubic-bezier(.2,.7,.2,1); }
.sr-shot::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 48%, rgba(10,10,10,.86)); opacity: .35; transition: opacity .4s; }
.sr-shot:hover::after { opacity: .9; }
.sr-shot:hover .sr-shot-ph, .sr-shot:hover .sr-shot-img { transform: scale(1.07); }
.sr-shot-cap { position: absolute; z-index: 2; left: 14px; bottom: 14px; display: inline-flex; align-items: center; gap: 9px; font-family: var(--fd); font-weight: 600; font-size: 11.5px; letter-spacing: .12em; text-transform: uppercase; color: #fff; opacity: 0; transform: translateY(10px); transition: opacity .4s, transform .4s; }
.sr-shot:hover .sr-shot-cap { opacity: 1; transform: none; }
.sr-shot:nth-child(1) { grid-column: span 2; grid-row: span 2; }
.sr-studio-foot { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 28px; margin-top: 34px; padding-top: 34px; border-top: 1px solid var(--line); }
.sr-features { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr; gap: 12px; flex: 1 1 320px; }
.sr-features li { display: flex; align-items: center; gap: 11px; color: var(--muted); font-size: .96rem; }
.sr-features svg { color: var(--red); flex: none; }

/* Services */
.sr-services-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
.sr-service { padding: 26px; border: 1px solid var(--line); border-radius: 14px; background: var(--surface); transition: border-color .3s, transform .3s, background .3s, box-shadow .3s; }
.sr-service:hover { border-color: var(--red); transform: translateY(-6px); background: var(--surface-2); box-shadow: 0 12px 32px -8px color-mix(in oklch, var(--red) 50%, transparent); }
.sr-service-icon { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 11px; background: var(--red-soft); color: var(--red); margin-bottom: 18px; transition: transform .3s cubic-bezier(.2,.7,.2,1), background .3s; }
.sr-service:hover .sr-service-icon { transform: scale(1.1) rotate(-8deg); background: var(--red); color: #fff; }
.sr-service-title { font-family: var(--fd); font-weight: 700; font-size: 1.2rem; margin: 0 0 8px; }
.sr-service-desc { font-size: .96rem; margin: 0; }

/* Réalisations */
.sr-works { background: var(--bg-2); }
.sr-works-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
.sr-work { border-radius: 10px; overflow: hidden; transition: transform .3s; }
.sr-work:hover { transform: translateY(-3px); }
.sr-work-media { position: relative; aspect-ratio: 16 / 9; display: block; }
.sr-work-ph { width: 100%; height: 100%; transition: transform .6s cubic-bezier(.2,.7,.2,1); }
.sr-work:hover .sr-work-ph { transform: scale(1.06); }
.sr-work-brand { position: absolute; top: 12px; right: 12px; z-index: 2; display: grid; place-items: center; width: 30px; height: 30px; border-radius: 6px; background: rgba(10,10,10,.7); color: #fff; }
.sr-play { display: grid; place-items: center; width: 54px; height: 54px; border-radius: 50%; background: var(--red); color: #fff; border: none; transition: transform .25s, background .25s; position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); }
.sr-work:hover .sr-play { transform: translate(-50%,-50%) scale(1.08); background: var(--red-deep); }
.sr-work-body { padding: 16px 2px 0; }
.sr-work-title { font-family: var(--fd); font-weight: 600; font-size: 1.1rem; margin: 6px 0 0; }

/* Roster */
.sr-roster-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
.sr-artist { position: relative; border-radius: 10px; overflow: hidden; }
.sr-artist-img { aspect-ratio: 3 / 4; width: 100%; border-radius: 10px; transition: transform .5s; }
.sr-artist::before { content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none; background: linear-gradient(180deg, transparent 42%, rgba(10,10,10,.92)); border-radius: 10px; }
.sr-artist:hover .sr-artist-img { transform: scale(1.03); }
.sr-artist-meta { position: absolute; z-index: 2; left: 0; right: 0; bottom: 0; padding: 20px; }
.sr-artist-meta .sr-label { display: block; margin-bottom: 4px; }
.sr-artist-name { font-family: var(--fd); font-weight: 700; font-size: 1.35rem; letter-spacing: -.01em; margin: 0; }

/* Partenaires */
.sr-partners-sec { padding: 72px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.sr-partners { margin-top: 28px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); }
.sr-partner { display: grid; place-items: center; min-height: 96px; background: var(--bg); color: var(--dim); transition: color .25s, background .25s; }
.sr-partner:hover { color: var(--text); background: var(--surface); }

/* Contact */
.sr-contact-grid { display: grid; gap: 44px; }
.sr-contact-list { list-style: none; padding: 0; margin: 26px 0; display: grid; gap: 15px; }
.sr-contact-list li { display: flex; align-items: center; gap: 13px; color: var(--muted); }
.sr-contact-list svg { color: var(--red); flex: none; }
.sr-socials { display: flex; gap: 10px; }
.sr-social { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 8px; background: var(--surface); border: 1px solid var(--line); color: var(--muted); transition: color .2s, border-color .2s, transform .2s; }
.sr-social:hover { color: var(--red); border-color: var(--red); transform: translateY(-2px); }
.sr-contact-cta { background: var(--surface); border: 1px solid var(--line); border-radius: 16px; padding: 34px; align-self: start; }
.sr-cta-title { font-family: var(--fd); font-weight: 800; font-size: 1.6rem; letter-spacing: -.02em; margin: 0 0 12px; }
.sr-contact-cta .sr-btn { margin-top: 22px; }

/* Footer */
.sr-footer { border-top: 1px solid var(--line); padding: 64px 0 30px; }
.sr-footer-top { display: grid; gap: 40px; padding-bottom: 44px; border-bottom: 1px solid var(--line); }
.sr-footer-brand { display: grid; gap: 18px; max-width: 340px; align-content: start; }
.sr-footer-brand .sr-muted { font-size: .95rem; }
.sr-footer-nav, .sr-footer-social { display: grid; gap: 14px; align-content: start; }
.sr-footer-nav a { color: var(--muted); font-size: .95rem; transition: color .2s; }
.sr-footer-nav a:hover { color: var(--red); }
.sr-footer-bottom { display: flex; flex-direction: column; gap: 14px; padding-top: 28px; }
.sr-footer-legal { display: flex; gap: 22px; }
.sr-footer-legal a { color: var(--dim); font-size: .85rem; transition: color .2s; }
.sr-footer-legal a:hover { color: var(--text); }

/* Ruban + pinceau */
.sr-ribbon { background: var(--red); overflow: hidden; padding: 15px 0; border-block: 1px solid rgba(0,0,0,.18); }
.sr-ribbon-track { display: flex; width: max-content; animation: ribbon 70s linear infinite; will-change: transform; }
.sr-ribbon:hover .sr-ribbon-track { animation-play-state: paused; }
.sr-ribbon-item { display: inline-flex; align-items: center; gap: 16px; padding-right: 16px; white-space: nowrap; font-family: var(--fd); font-weight: 800; font-size: clamp(1rem, 2.3vw, 1.5rem); letter-spacing: .015em; text-transform: uppercase; color: #fff; }
.sr-ribbon-item i { font-style: normal; color: rgba(0,0,0,.5); }
@keyframes ribbon { to { transform: translateX(-50%); } }
.sr-brush { margin: 4px 0; }
.sr-brush svg { display: block; width: 100%; height: 58px; }
.sr-brush-path { stroke-dasharray: 1700; stroke-dashoffset: 1700; transition: stroke-dashoffset 1.5s cubic-bezier(.2,.7,.2,1); }
.sr-brush.is-visible .sr-brush-path { stroke-dashoffset: 0; }

/* Reveal */
.reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1); }
.reveal.is-visible { opacity: 1; transform: none; }

/* Page "Réserver" */
.sr-start { padding: 122px 0 92px; min-height: 100vh; }
.sr-back { display: inline-flex; align-items: center; gap: 7px; background: none; border: none; cursor: pointer; color: var(--muted); font-family: var(--fb); font-weight: 600; font-size: .95rem; padding: 8px 0; margin-bottom: 22px; transition: color .2s, gap .2s; }
.sr-back:hover { color: var(--red); gap: 11px; }
.sr-start-head { max-width: 640px; margin-bottom: 44px; }
.sr-start-title { font-family: var(--fd); font-weight: 800; font-size: clamp(2.2rem, 5vw, 3.4rem); line-height: 1.02; letter-spacing: -.03em; margin: 0 0 16px; }
.sr-start-form { max-width: 760px; display: grid; gap: 14px; }
.sr-fieldset { border: 1px solid var(--line); border-radius: 14px; padding: 22px; margin: 0; background: var(--surface); }
.sr-legend { font-family: var(--fd); font-weight: 600; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--text); display: flex; align-items: center; flex-wrap: wrap; gap: 9px; padding: 0; margin-bottom: 16px; }
.sr-legend .sr-dim { letter-spacing: .03em; text-transform: none; font-size: 11px; }
.sr-chips { display: flex; flex-wrap: wrap; gap: 10px; }
.sr-chip { font-family: var(--fb); font-size: .9rem; font-weight: 500; color: var(--muted); background: var(--bg); border: 1px solid var(--line); border-radius: 100px; padding: 9px 16px; cursor: pointer; transition: background .2s, border-color .2s, color .2s, transform .2s; }
.sr-chip:hover { border-color: var(--line-2); color: var(--text); transform: translateY(-1px); }
.sr-chip.is-on { background: var(--red); border-color: var(--red); color: #fff; }
.sr-other { margin-top: 14px; animation: otherIn .3s ease; }
@keyframes otherIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
.sr-field { display: grid; gap: 8px; }
.sr-input { background: var(--bg); border: 1px solid var(--line); border-radius: 7px; padding: 13px 15px; color: var(--text); font-family: inherit; font-size: .96rem; transition: border-color .2s; resize: vertical; width: 100%; }
.sr-input::placeholder { color: var(--dim); }
.sr-input:focus { outline: none; border-color: var(--red); }
.sr-input.is-error { border-color: var(--red); }
.sr-select { appearance: none; -webkit-appearance: none; padding-right: 40px; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23A2A2A6' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 15px center; }
.sr-select option { background: var(--surface); color: var(--text); }
.sr-start-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
.sr-start-submit { display: flex; flex-wrap: wrap; align-items: center; gap: 16px; margin-top: 4px; }
.sr-btn[disabled] { opacity: .45; cursor: not-allowed; }
.sr-assure { list-style: none; padding: 0; margin: 18px 0 0; display: flex; flex-wrap: wrap; gap: 10px 22px; }
.sr-assure li { display: inline-flex; align-items: center; gap: 8px; font-size: .9rem; color: var(--muted); }
.sr-assure svg { color: var(--red); flex: none; }
.sr-form-error { display: flex; align-items: center; gap: 10px; margin: 2px 0 0; color: var(--red); font-weight: 500; font-size: .92rem; }
.sr-check { display: flex; align-items: flex-start; gap: 12px; padding: 16px 18px; border: 1px solid var(--line); border-radius: 12px; background: var(--surface); cursor: pointer; color: var(--muted); font-size: .92rem; line-height: 1.5; }
.sr-check.is-error { border-color: var(--red); }
.sr-check input { appearance: none; -webkit-appearance: none; flex: none; width: 20px; height: 20px; margin-top: 1px; border: 1.5px solid var(--line-2); border-radius: 5px; background: var(--bg); cursor: pointer; position: relative; transition: background .2s, border-color .2s; }
.sr-check input:checked { background: var(--red); border-color: var(--red); }
.sr-check input:checked::after { content: ""; position: absolute; left: 6px; top: 2px; width: 5px; height: 10px; border: solid #fff; border-width: 0 2px 2px 0; transform: rotate(45deg); }
.sr-done { max-width: 560px; margin: 56px auto 0; text-align: center; display: grid; justify-items: center; }
.sr-done .sr-rule { margin-inline: auto; margin-bottom: 20px; }
.sr-done-icon { display: grid; place-items: center; width: 64px; height: 64px; border-radius: 50%; background: var(--red-soft); color: var(--red); margin-bottom: 22px; }
.sr-done .sr-btn { margin-top: 26px; }

/* Scrollbar */
.sr-root ::-webkit-scrollbar { width: 11px; height: 11px; }
.sr-root ::-webkit-scrollbar-track { background: var(--bg); }
.sr-root ::-webkit-scrollbar-thumb { background: #2a2a2e; border-radius: 6px; border: 3px solid var(--bg); }
.sr-root ::-webkit-scrollbar-thumb:hover { background: var(--red); }

/* Identité : motifs amazighs en fond très peu contrasté */
.sr-berber-host { position: relative; }
.sr-berber-host > .sr-container { position: relative; z-index: 1; }
.sr-berber--hero { z-index: 1; opacity: .13; }
.sr-section.sr-studio { padding-top: 48px; }
.sr-berber { position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'300'%20height%3D'300'%20viewBox%3D'0%200%20300%20300'%3E%3Cg%20fill%3D'none'%20stroke%3D'%23F70405'%20stroke-width%3D'2.2'%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3Ccircle%20cx%3D'50'%20cy%3D'50'%20r%3D'6'%2F%3E%3Cpath%20d%3D'M50%2C40%20L50%2C35%20M50%2C60%20L50%2C65%20M40%2C50%20L35%2C50%20M60%2C50%20L65%2C50%20M43%2C43%20L39%2C39%20M57%2C43%20L61%2C39%20M43%2C57%20L39%2C61%20M57%2C57%20L61%2C61'%2F%3E%3Cpath%20d%3D'M150%2C26%20L150%2C34%20M150%2C34%20L170%2C56%20L150%2C78%20L130%2C56%20Z%20M150%2C46%20L160%2C56%20L150%2C66%20L140%2C56%20Z'%2F%3E%3Cpath%20d%3D'M245%2C22%20L245%2C82%20M236%2C34%20L245%2C30%20L254%2C34%20M236%2C46%20L245%2C42%20L254%2C46%20M236%2C58%20L245%2C54%20L254%2C58%20M236%2C70%20L245%2C66%20L254%2C70'%2F%3E%3Cpath%20d%3D'M103%2C108%20L117%2C108%20M110%2C101%20L110%2C115'%2F%3E%3Cpath%20d%3D'M200%2C96%20L205%2C101%20L200%2C106%20L195%2C101%20Z'%2F%3E%3Cpath%20d%3D'M44%2C124%20L66%2C140%20M66%2C124%20L44%2C140%20M44%2C148%20L66%2C164%20M66%2C148%20L44%2C164%20M44%2C172%20L66%2C188%20M66%2C172%20L44%2C188'%2F%3E%3Cpath%20d%3D'M150%2C116%20L150%2C194%20M150%2C116%20L162%2C131%20L150%2C146%20L138%2C131%20Z%20M150%2C140%20L162%2C155%20L150%2C170%20L138%2C155%20Z%20M150%2C164%20L162%2C179%20L150%2C194%20L138%2C179%20Z'%2F%3E%3Cpath%20d%3D'M245%2C116%20L245%2C190%20M245%2C124%20L236%2C120%20M245%2C124%20L254%2C120%20M245%2C134%20L236%2C130%20M245%2C134%20L254%2C130%20M245%2C144%20L236%2C140%20M245%2C144%20L254%2C140%20M245%2C154%20L236%2C150%20M245%2C154%20L254%2C150%20M245%2C164%20L236%2C160%20M245%2C164%20L254%2C160%20M245%2C174%20L236%2C170%20M245%2C174%20L254%2C170%20M245%2C184%20L236%2C180%20M245%2C184%20L254%2C180'%2F%3E%3Cpath%20d%3D'M48%2C244%20L60%2C236%20L72%2C244%20L60%2C252%20Z%20M60%2C252%20L72%2C260%20L60%2C268%20L48%2C260%20Z%20M48%2C246%20L42%2C243%20M72%2C246%20L78%2C243%20M48%2C258%20L42%2C261%20M72%2C258%20L78%2C261%20M60%2C268%20L60%2C276%20L66%2C280'%2F%3E%3Cpath%20d%3D'M120%2C248%20L132%2C232%20L144%2C248%20L156%2C232%20L168%2C248%20L180%2C232%20M120%2C258%20L132%2C242%20L144%2C258%20L156%2C242%20L168%2C258%20L180%2C242'%2F%3E%3Cpath%20d%3D'M250%2C214%20C242%2C228%20258%2C242%20250%2C256%20C242%2C270%20258%2C284%20250%2C290'%2F%3E%3Cpath%20d%3D'M96%2C205%20L100%2C209%20L96%2C213%20L92%2C209%20Z%20M205%2C250%20L209%2C254%20L205%2C258%20L201%2C254%20Z'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  background-size: 300px auto;
  background-position: 0 0;
  background-repeat: repeat;
  opacity: 0.08;
  background-blend-mode: multiply;
}
.sr-berber-host:nth-of-type(odd) .sr-berber { opacity: 0.15; background-position: -50px -50px; }

/* Responsive */
@media (min-width: 640px) {
  .sr-container { padding: 0 32px; }
  .sr-stats { grid-template-columns: repeat(4, 1fr); }
  .sr-gallery { grid-template-columns: repeat(4, 1fr); grid-auto-rows: 280px; gap: 16px; }
  .sr-shot:nth-child(1) { grid-column: span 2; grid-row: span 2; }
  .sr-shot:nth-child(2) { grid-column: span 2; } .sr-shot:nth-child(5) { grid-column: span 2; } .sr-shot:nth-child(6) { grid-column: span 2; }
  .sr-services-grid { grid-template-columns: repeat(2, 1fr); }
  .sr-features { grid-template-columns: repeat(2, 1fr); }
  .sr-works-grid { grid-template-columns: repeat(2, 1fr); }
  .sr-roster-grid { grid-template-columns: repeat(2, 1fr); }
  .sr-partners { grid-template-columns: repeat(3, 1fr); }
  .sr-start-grid { grid-template-columns: 1fr 1fr; }
  .sr-footer-top { grid-template-columns: 1.6fr 1fr 1fr; }
  .sr-footer-bottom { flex-direction: row; align-items: center; justify-content: space-between; }
}
@media (min-width: 960px) {
  .sr-nav-links { display: flex; } .sr-nav-cta { display: inline-flex; } .sr-burger { display: none; }
  .sr-hero-content { padding: 130px 32px 64px; }
  .sr-services-grid { grid-template-columns: repeat(3, 1fr); }
  .sr-roster-grid { grid-template-columns: repeat(3, 1fr); }
  .sr-partners { grid-template-columns: repeat(6, 1fr); }
  .sr-contact-grid { grid-template-columns: 1.1fr .9fr; gap: 64px; align-items: start; }
}
@media (min-width: 1180px) { .sr-section { padding: 120px 0; } }

.sr-root a:focus-visible, .sr-root button:focus-visible, .sr-input:focus-visible, .sr-select:focus-visible { outline: 2px solid var(--red); outline-offset: 3px; }
@media (prefers-reduced-motion: reduce) {
  .sr-root *, .sr-hero-ph, .sr-ribbon-track { animation: none !important; transition: none !important; }
  .reveal, .sr-hero-text > * { opacity: 1 !important; transform: none !important; }
  .sr-hero-title em::after { transform: scaleX(1) !important; } .sr-rule { width: 56px; } .sr-brush-path { stroke-dashoffset: 0 !important; }
  .sr-intro { display: none; }
}
`;

const __root = ReactDOM.createRoot(document.getElementById("root"));
__root.render(<SiroccoRecords />);
