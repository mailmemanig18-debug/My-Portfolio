// Simple smooth scrolling for navigation (if nav links are added later)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior: "smooth"

    });

  });

});