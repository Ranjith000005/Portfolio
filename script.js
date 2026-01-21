const LINKS = {
  github: "https://github.com/Ranjith000005",
  linkedin: "https://www.linkedin.com/in/ranjith-kumar-reddy-allam-014739192",
  resumePdf: "https://docs.google.com/document/d/11HVl7DkQUX0g9oRz9fxxXI_Ru-MOI-hr/export?format=pdf"
};

const setHref = (id, url) => {
  const el = document.getElementById(id);
  if (el) el.setAttribute("href", url);
};

setHref("githubBtn", LINKS.github);
setHref("linkedinBtn", LINKS.linkedin);
setHref("resumeBtn", LINKS.resumePdf);

setHref("githubText", LINKS.github);
setHref("linkedinText", LINKS.linkedin);
setHref("resumeText", LINKS.resumePdf);

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

setHref("proj1Code", LINKS.github);
setHref("proj2Code", LINKS.github);
setHref("proj3Code", LINKS.github);
