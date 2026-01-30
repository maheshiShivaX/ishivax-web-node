import ReactGA from "react-ga4";

/* PAGE VIEWS */
export const trackHomePage = () => {
  ReactGA.event("homepage_view");
};

export const trackAboutUsPage = () => {
  ReactGA.event("aboutus_view");
};

export const trackServicesPage = () => {
  ReactGA.event("services_view");
};

export const trackPortfolioPage = () => {
  ReactGA.event("portfolio_view");
};

export const trackOurProductsPage = () => {
  ReactGA.event("ourproducts_view");
};

export const trackBlogsPage = () => {
  ReactGA.event("blogs_view");
};

export const trackContactUsPage = () => {
  ReactGA.event("contactus_view");
};

export const trackJoinOurTeamPage = () => {
  ReactGA.event("joinourteam_view");
};

export const trackCareerPage = () => {
  ReactGA.event("career_view");
};

/* OPTIONAL: BUTTON / CTA TRACKING */
export const trackContactFormSubmit = () => {
  ReactGA.event("contact_form_submit");
};

export const trackQuoteRequest = () => {
  ReactGA.event("quote_request");
};

export const trackJoinApplyClick = () => {
  ReactGA.event("join_apply_click");
};