import heroSlide from "./heroSlide";
import homePage from "./homePage";
import globalImpactPage from "./globalImpactPage";
import retreatsPage from "./retreatsPage";
import contactPage from "./contactPage";
import aboutPage from "./aboutPage";
import historyPage from "./historyPage";
import philosophyPage from "./philosophyPage";
import faqsPage from "./faqsPage";
import blogListingPage from "./blogListingPage";
import experiencesListingPage from "./experiencesListingPage";
import facilitiesListingPage from "./facilitiesListingPage";
import lodgingListingPage from "./lodgingListingPage";
import experience from "./experience";
import facility from "./facility";
import lodging from "./lodging";
import stat from "./stat";
import testimonial from "./testimonial";
import findYourWayCard from "./findYourWayCard";
import whyChooseItem from "./whyChooseItem";
import siteSettings from "./siteSettings";
import teamMember from "./teamMember";
import blogPost from "./blogPost";

export const schemaTypes = [
  // ── Singletons ────────────────────────────────────────────────────
  siteSettings,
  homePage,
  globalImpactPage,
  retreatsPage,
  contactPage,
  aboutPage,
  historyPage,
  philosophyPage,
  faqsPage,
  blogListingPage,
  experiencesListingPage,
  facilitiesListingPage,
  lodgingListingPage,
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
  blogPost,
];
