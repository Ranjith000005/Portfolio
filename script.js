const LINKS = {
  github: "https://github.com/Ranjith000005",
  linkedin: "https://www.linkedin.com/in/ranjith-kumar-reddy-allam-014739192",
  resumePdf: "https://drive.google.com/file/d/1qsdLRMSbTfL6p2BDmgOBPY12hY-ADGgM/view?usp=drive_link"
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
