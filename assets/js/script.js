/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  /*
   * Fermer le menu lorsqu'on clique
   * sur un élément de navigation.
   */

  document.querySelectorAll(".nav-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });
}

/* =========================================================
   ANNÉE AUTOMATIQUE
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* =========================================================
   FORMULAIRE WHATSAPP
========================================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message").value.trim();

    /*
     * Numéro WhatsApp de l'entreprise.
     *
     * IMPORTANT :
     * Format international sans +,
     * sans espace et sans tiret.
     */

    const whatsappNumber = "22891568278";

    const whatsappMessage = `Bonjour LET-BTP,

Je m'appelle ${name}.

Mon numéro de téléphone :
${phone}

Mon besoin :
${message}

Merci.`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(url, "_blank");
  });
}

/* =========================================================
   ANIMATION SIMPLE AU DÉFILEMENT
========================================================= */

const revealElements = document.querySelectorAll(
  ".service-card, .project, .value",
);

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },

  {
    threshold: 0.1,
  },
);

revealElements.forEach(function (element) {
  observer.observe(element);
});
