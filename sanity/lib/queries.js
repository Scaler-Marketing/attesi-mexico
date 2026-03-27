// ─── Hero Slides ─────────────────────────────────────────────────────────────
export const heroSlidesQuery = `*[_type == "heroSlide" && isActive != false && defined(image.asset)] | order(sortOrder asc) {
  _id,
  title,
  altText,
  image,
  sortOrder
}`;

// ─── Experiences (listing + homepage cards) ──────────────────────────────────
export const experiencesQuery = `*[_type == "experience"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  tagline,
  category,
  cardImage,
  cardDescription,
  order
}`;

// ─── Single Experience (detail page) ─────────────────────────────────────────
export const experienceBySlugQuery = `*[_type == "experience" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  tagline,
  category,
  cardImage,
  cardDescription,
  heroImage,
  about,
  highlights,
  gallery,
  faqs,
  seoTitle,
  seoDescription,
  order
}`;

// ─── All Experience Slugs (for generateStaticParams) ─────────────────────────
export const experienceSlugsQuery = `*[_type == "experience" && defined(slug.current)] { "slug": slug.current }`;

// ─── Facilities (listing + detail pages) ─────────────────────────────────────
export const facilitiesQuery = `*[_type == "facility"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  category,
  cardImage,
  cardDescription,
  order
}`;

export const facilityBySlugQuery = `*[_type == "facility" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  cardImage,
  cardDescription,
  heroImage,
  about,
  highlights,
  gallery,
  faqs,
  seoTitle,
  seoDescription,
  order
}`;

export const facilitySlugsQuery = `*[_type == "facility" && defined(slug.current)] { "slug": slug.current }`;

// ─── Stats ────────────────────────────────────────────────────────────────────
export const statsQuery = `*[_type == "stat"] | order(order asc) {
  _id,
  value,
  suffix,
  label,
  order
}`;

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc) {
  _id,
  text,
  author,
  location,
  order
}`;

// ─── Site Settings (singleton) ────────────────────────────────────────────────
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteTitle,
  tagline,
  heroHeading,
  heroSubheading,
  introHeading,
  introBody,
  aboutHeading,
  aboutBody,
  aboutImage,
  ctaHeading,
  ctaSubheading,
  ctaButtonLabel,
  ctaButtonUrl
}`;

// ─── Find Your Way Cards ──────────────────────────────────────────────────────
export const findYourWayQuery = `*[_type == "findYourWayCard"] | order(order asc) {
  _id,
  title,
  description,
  image,
  ctaLabel,
  ctaUrl,
  order
}`;

// ─── Why Choose Items ─────────────────────────────────────────────────────────
export const whyChooseQuery = `*[_type == "whyChooseItem"] | order(order asc) {
  _id,
  title,
  description,
  order
}`;

// ─── Team Members ─────────────────────────────────────────────────────────────
export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  "slug": slug.current,
  role,
  bio,
  photo,
  order
}`;

export const teamSlugsQuery = `*[_type == "teamMember" && defined(slug.current)]{ "slug": slug.current }`;

export const teamBySlugQuery = `*[_type == "teamMember" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  role,
  bio,
  photo,
  order
}`;

// ─── Lodging ──────────────────────────────────────────────────────────────────
export const lodgingsQuery = `*[_type == "lodging"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  tagline,
  cardImage,
  cardDescription,
  guestCapacity,
  totalUnits,
  bedTypes,
  order
}`;

export const lodgingBySlugQuery = `*[_type == "lodging" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  tagline,
  cardImage,
  cardDescription,
  heroImage,
  description,
  guestCapacity,
  totalUnits,
  bedTypes,
  amenities,
  gallery,
  faqs,
  seoTitle,
  seoDescription,
  openGraphImage,
  order
}`;

export const lodgingSlugsQuery = `*[_type == "lodging" && defined(slug.current)] { "slug": slug.current }`;
