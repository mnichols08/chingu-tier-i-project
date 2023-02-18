const parallaxWindow = document.querySelector(".parallax");
const toTop = () =>
  parallaxWindow.scroll({
    top: 0,
    behavior: "smooth",
  });
const toAbout = () =>
  parallaxWindow.scroll({
    top: document.querySelector("#about").offsetTop - 85,
    behavior: "smooth",
  });
const toServices = () =>
  parallaxWindow.scroll({
    top: document.querySelector("#services").offsetTop - 85,
    behavior: "smooth",
  });
const toContact = () =>
  parallaxWindow.scroll({
    left: 0,
    top: document.querySelector("#contact").offsetTop - 750,
    behavior: "smooth",
  });
document.querySelector("year").innerText = new Date().getFullYear();
document.querySelectorAll("nav ul li")[0].addEventListener("click", toTop);
document.querySelectorAll("nav ul li")[1].addEventListener("click", toAbout);
document.querySelectorAll("nav ul li")[2].addEventListener("click", toServices);
document.querySelectorAll("nav ul li")[3].addEventListener("click", toContact);
document.querySelector("#toTop").addEventListener("click", toTop);
parallaxWindow.addEventListener("scroll", (scroll) => {
  const button = document.querySelector("#toTop");
  if (parallaxWindow.scrollTop > 500) {
    button.classList.remove("hide")
    button.classList.add("fade-in");
    //button.classList.remove("fade-out");
  } else {
    button.classList.add("fade-out");
    setTimeout(() => {  
        button.classList.add("hide")
      button.classList.remove("fade-in");
      
    }, 75);
  }
});
