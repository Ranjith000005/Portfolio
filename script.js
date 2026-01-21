const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const LINKS = {
  resume: "#",
  github: "https://github.com/Ranjith000005",
  linkedin: "https://www.linkedin.com/in/ranjith-kumar-reddy-allam-014739192"
};

const setHref = (id, href) => {
  const el = document.getElementById(id);
  if (el) el.setAttribute("href", href);
};

setHref("resumeLink", LINKS.resume);
setHref("githubLink", LINKS.github);
setHref("githubLink2", LINKS.github);
setHref("linkedinLink", LINKS.linkedin);
setHref("linkedinLink2", LINKS.linkedin);
