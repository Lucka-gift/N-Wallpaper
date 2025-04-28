const fleche = document.querySelector(".scroll");
const cible = document.getElementById("presentation");
const body = document.querySelector("body");
const lange = document.querySelector("ul");
const titre2 = document.querySelectorAll("h2");
const js = document.getElementById('js');
fleche.addEventListener("mouseout", () => {
  fleche.style.fontSize = "6em";
});


document.addEventListener("scroll", () => {
  if (scrollY > 300) {
    fleche.style.opacity = "0.02";
    fleche.style.color = "#333333";
  } else {
    fleche.style.opacity = "0.4";
  }
  if (scrollY > 400) {
    lange.style.left = "0";
    lange.style.opacity = "1";
  }
  else {
    lange.style.left = "170%";
  }
});

fleche.addEventListener("click", () => {
  cible.scrollIntoView({behavior: "smooth" });
});
window.addEventListener("", () => {
    window.style.transition = "100s";
  
});
titre2.forEach((one) => {
  one.addEventListener("mouseout", () => {
    one.style.background = "#333333";
    one.style.color = "#c5cae9";
  });
  
});

