const ChevronDown = ({ width = 10, height = 6 }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" aria-hidden="true">
    <path d={`M1 1L${width / 2} ${height - 1}L${width - 1} 1`} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Each item is either a string (placeholder) or [label, href]
const aboutItems = [
  ["About Us",      "/about"],
  ["Our Team",      "/team"],
  ["Global Impact", "#"],
  ["History",       "#"],
  ["Philosophy",    "#"],
  ["FAQs",          "#"],
];
const facilitiesItems = [
  ["Midrash",                "#"],
  ["Sabata",                 "#"],
  ["Cafe",                   "#"],
  ["Central Garden",         "#"],
  ["Outdoor Spaces",         "#"],
  ["Retreat Center",         "#"],
  ["Farm",                   "#"],
  ["Huertos",                "#"],
  ["Natural Spring Mikvah",  "#"],
];
const experiencesItems = [
  ["Migrating Monarchs",          "#"],
  ["Temazcal Ceremony",           "#"],
  ["Guided Mountain Hikes",       "#"],
  ["Farm to Table",               "#"],
  ["Natural Spring Cold Plunge",  "#"],
  ["Apiary",                      "#"],
  ["Farm Tour",                   "#"],
  ["Bonfire",                     "#"],
  ["Yoga and Meditation",         "#"],
  ["Breathwork",                  "#"],
];

function DesktopDropdown({ label, items }) {
  return (
    <li className="navbar__dropdown">
      <button className="navbar__link navbar__link--dropdown" aria-expanded="false" aria-haspopup="true">
        {label} <ChevronDown />
      </button>
      <ul className="navbar__dropdown-menu" role="list">
        {items.map(([name, href]) => (
          <li key={name}><a href={href}>{name}</a></li>
        ))}
      </ul>
    </li>
  );
}

function MobileAccordion({ label, items }) {
  return (
    <li className="mobile-panel__accordion">
      <button className="mobile-panel__link mobile-panel__toggle" aria-expanded="false">
        {label}
        <ChevronDown width={12} height={8} />
      </button>
      <ul className="mobile-panel__sub" role="list">
        {items.map(([name, href]) => (
          <li key={name}><a href={href}>{name}</a></li>
        ))}
      </ul>
    </li>
  );
}

export default function Navbar() {
  return (
    <header className="navbar" id="navbar">
      <div className="navbar__inner">
        <a href="/" className="navbar__logo">
          <img src="/assets/attesi-logo-top.svg" alt="" className="navbar__logo-icon navbar__logo-top" />
          <img src="/assets/attesi-logo-bottom.svg" alt="Attesi" className="navbar__logo-icon navbar__logo-bottom" />
        </a>

        <nav className="navbar__nav-pill" aria-label="Main navigation">
          <ul className="navbar__links" role="list">
            <li><a href="/" className="navbar__link navbar__link--active">Home</a></li>
            <DesktopDropdown label="About" items={aboutItems} />
            <DesktopDropdown label="Facilities" items={facilitiesItems} />
            <DesktopDropdown label="Experiences" items={experiencesItems} />
            <li><a href="#" className="navbar__link">Blog</a></li>
            <li><a href="#" className="navbar__link">Contact</a></li>
          </ul>
        </nav>

        <a href="#contact" className="btn-primary navbar__cta">Get In Touch</a>

        <button className="navbar__hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className="mobile-backdrop" id="mobileBackdrop"></div>

      <div className="mobile-panel" id="mobilePanel">
        <nav className="mobile-panel__nav" aria-label="Mobile navigation">
          <ul role="list" className="mobile-panel__links">
            <li><a href="/" className="mobile-panel__link">Home</a></li>
            <MobileAccordion label="About" items={aboutItems} />
            <MobileAccordion label="Facilities" items={facilitiesItems} />
            <MobileAccordion label="Experiences" items={experiencesItems} />
            <li><a href="#" className="mobile-panel__link">Blog</a></li>
            <li><a href="#" className="mobile-panel__link">Contact</a></li>
          </ul>
        </nav>
        <div className="mobile-panel__footer">
          <a href="#contact" className="btn-primary mobile-panel__cta">Get In Touch</a>
        </div>
      </div>
    </header>
  );
}
