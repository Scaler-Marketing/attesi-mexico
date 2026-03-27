"use client";
import { usePathname } from "next/navigation";

const ChevronDown = ({ width = 10, height = 6 }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" aria-hidden="true">
    <path d={`M1 1L${width / 2} ${height - 1}L${width - 1} 1`} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const aboutItems = [
  ["About Us",      "/about"],
  ["Our Team",      "/team"],
  ["Global Impact", "/global-impact"],
  ["History",       "/history"],
  ["Philosophy",    "/philosophy"],
  ["FAQs",          "/faqs"],
];
const facilitiesItems = [
  ["Midrash",               "/facilities/midrash"],
  ["Sabata",                "/facilities/sabata"],
  ["Cafe",                  "/facilities/cafe"],
  ["Central Garden",        "/facilities/central-garden"],
  ["Outdoor Spaces",        "/facilities/outdoor-spaces"],
  ["Retreat Center",        "/facilities/retreat-center"],
  ["Farm",                  "/facilities/farm"],
  ["Huertos",               "/facilities/huertos"],
  ["Natural Spring Mikvah", "/facilities/natural-spring-mikvah"],
];
const lodgingItems = [
  ["Glamping",     "/lodging/glamping"],
  ["Villas Norte", "/lodging/villas-norte"],
  ["Villas Paz",   "/lodging/villas-paz"],
];
const experiencesItems = [
  ["Migrating Monarchs",         "/experiences/migrating-monarchs"],
  ["Temazcal Ceremony",          "/experiences/temazcal-ceremony"],
  ["Guided Mountain Hikes",      "/experiences/guided-mountain-hikes"],
  ["Farm to Table",              "/experiences/farm-to-table"],
  ["Natural Spring Cold Plunge", "/experiences/natural-spring-cold-plunge"],
  ["Apiary",                     "/experiences/apiary"],
  ["Farm Tour",                  "/experiences/farm-tour"],
  ["Bonfire",                    "/experiences/bonfire"],
  ["Yoga and Meditation",        "/experiences/yoga-and-meditation"],
  ["Breathwork",                 "/experiences/breathwork"],
];

function DesktopDropdown({ label, href, items, pathname }) {
  // Mark the parent button as active if any child route matches or if on the listing page
  const isParentActive = (href && pathname.startsWith(href)) ||
    items.some(([, itemHref]) => itemHref !== "#" && pathname.startsWith(itemHref));

  return (
    <li className="navbar__dropdown">
      <a
        href={href || "#"}
        className={`navbar__link navbar__link--dropdown${isParentActive ? " navbar__link--active" : ""}`}
        aria-haspopup="true"
      >
        {label} <ChevronDown />
      </a>
      <ul className="navbar__dropdown-menu" role="list">
        {items.map(([name, itemHref]) => {
          const isActive = itemHref !== "#" && pathname === itemHref;
          return (
            <li key={name}>
              <a href={itemHref} className={isActive ? "navbar__dropdown-item--active" : ""}>
                {name}
              </a>
            </li>
          );
        })}
        {href && (
          <li className="navbar__dropdown-view-all" style={{ gridColumn: "1 / -1" }}>
            <a href={href} className="navbar__dropdown-view-all-link">
              View All {label}
            </a>
          </li>
        )}
      </ul>
    </li>
  );
}

function MobileAccordion({ label, href, items, pathname }) {
  const isParentActive = (href && pathname.startsWith(href)) ||
    items.some(([, itemHref]) => itemHref !== "#" && pathname.startsWith(itemHref));

  return (
    <li className="mobile-panel__accordion">
      <button
        className={`mobile-panel__link mobile-panel__toggle${isParentActive ? " mobile-panel__link--active" : ""}`}
        aria-expanded="false"
      >
        {label}
        <ChevronDown width={12} height={8} />
      </button>
      <ul className="mobile-panel__sub" role="list">
        {items.map(([name, itemHref]) => {
          const isActive = itemHref !== "#" && pathname === itemHref;
          return (
            <li key={name}>
              <a href={itemHref} className={isActive ? "mobile-panel__sub-item--active" : ""}>
                {name}
              </a>
            </li>
          );
        })}
        {href && (
          <li>
            <a href={href} style={{ fontWeight: 600, color: "var(--brand-orange)" }}>
              View All {label}
            </a>
          </li>
        )}
      </ul>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar" id="navbar">
      <div className="navbar__inner">
        <a href="/" className="navbar__logo">
          <img src="/assets/attesi-logo-top.svg" alt="" className="navbar__logo-icon navbar__logo-top" />
          <img src="/assets/attesi-logo-bottom.svg" alt="Attesi" className="navbar__logo-icon navbar__logo-bottom" />
        </a>

        <nav className="navbar__nav-pill" aria-label="Main navigation">
          <ul className="navbar__links" role="list">
            <li>
              <a href="/" className={`navbar__link${pathname === "/" ? " navbar__link--active" : ""}`}>
                Home
              </a>
            </li>
            <DesktopDropdown label="About" items={aboutItems} pathname={pathname} />
            <DesktopDropdown label="Facilities" href="/facilities" items={facilitiesItems} pathname={pathname} />
            <DesktopDropdown label="Lodging" href="/lodging" items={lodgingItems} pathname={pathname} />
            <DesktopDropdown label="Experiences" href="/experiences" items={experiencesItems} pathname={pathname} />
            <li>
              <a href="/blog" className={`navbar__link${pathname === "/blog" ? " navbar__link--active" : ""}`}>
                Blog
              </a>
            </li>
          </ul>
        </nav>

        <a href="/contact" className="btn-primary navbar__cta">Contact Us</a>

        <button className="navbar__hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className="mobile-backdrop" id="mobileBackdrop"></div>

      <div className="mobile-panel" id="mobilePanel">
        <nav className="mobile-panel__nav" aria-label="Mobile navigation">
          <ul role="list" className="mobile-panel__links">
            <li>
              <a href="/" className={`mobile-panel__link${pathname === "/" ? " mobile-panel__link--active" : ""}`}>
                Home
              </a>
            </li>
            <MobileAccordion label="About" items={aboutItems} pathname={pathname} />
            <MobileAccordion label="Facilities" href="/facilities" items={facilitiesItems} pathname={pathname} />
            <MobileAccordion label="Lodging" href="/lodging" items={lodgingItems} pathname={pathname} />
            <MobileAccordion label="Experiences" href="/experiences" items={experiencesItems} pathname={pathname} />
            <li>
              <a href="/blog" className={`mobile-panel__link${pathname === "/blog" ? " mobile-panel__link--active" : ""}`}>
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="mobile-panel__footer">
          <a href="/contact" className="btn-primary mobile-panel__cta">Contact Us</a>
        </div>
      </div>
    </header>
  );
}
