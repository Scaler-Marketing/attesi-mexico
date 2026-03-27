import heroSlide from "./heroSlide";
import homePage from "./homePage";
import globalImpactPage from "./globalImpactPage";
import retreatsPage from "./retreatsPage";
import contactPage from "./contactPage";
import experience from "./experience";
import facility from "./facility";
import lodging from "./lodging";
import stat from "./stat";
import testimonial from "./testimonial";
import findYourWayCard from "./findYourWayCard";
import whyChooseItem from "./whyChooseItem";
import siteSettings from "./siteSettings";
import teamMember from "./teamMember";

export const schemaTypes = [
  // ── Singletons ────────────────────────────────────────────────────
  siteSettings,
  homePage,
  globalImpactPage,
  retreatsPage,
  contactPage,
  // ── Repeatable content ────────────────────────────────────────────
  heroSlide,
  experience,
  facility,
  lodging,
  stat,
  testimonial,
  findYourWayCard,
  whyChooseItem,
  teamMember,
];
