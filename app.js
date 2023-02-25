const parallaxWindow = document.querySelector(".parallax");
const closeMenu = () => document.getElementById("mini_button").checked = false
const toTop = () => {
  closeMenu();
  parallaxWindow.scroll({
    top: 0,
    behavior: "smooth",
  })};
const toAbout = () => {
  closeMenu();
  parallaxWindow.scroll({
    top: document.querySelector("#about").offsetTop,
    behavior: "smooth",
  });
}
const toServices = () => {
  closeMenu();
  parallaxWindow.scroll({
    top: document.querySelector("#services").offsetTop,
    behavior: "smooth",
  });
}
const toContact = () => {
  closeMenu();
  parallaxWindow.scroll({
    left: 0,
    top: document.querySelector("#contact").offsetTop,
    behavior: "smooth",
  });
}
document.querySelector("year").innerText = new Date().getFullYear();
document.querySelectorAll("nav ul li")[0].addEventListener("click", toTop);
document.querySelectorAll("nav ul li")[1].addEventListener("click", toAbout);
document.querySelectorAll("nav ul li")[2].addEventListener("click", toServices);
document.querySelectorAll("nav ul li")[3].addEventListener("click", toContact);
document.querySelector("#toTop").addEventListener("click", toTop);
const button = document.querySelector("#toTop");
const fadeIn = () => {
  setTimeout(() => {
    if (button.classList.contains("hide") && parallaxWindow.scrollTop >= 150) button.classList.remove("hide");
		if (button.classList.contains("fade-out")) {
			button.classList.remove("fade-out");
    	button.classList.add("fade-in");
		} 
  }, 150)
		
}

const fadeOut = () => {setTimeout(() => {
  if (parallaxWindow.scrollTop <= 150){
		button.classList.remove("fade-in");
		button.classList.add("fade-out");
		setTimeout(() => button.classList.add("hide"), 750);
  }
}, 750)
}

parallaxWindow.addEventListener("scroll", () => parallaxWindow.scrollTop >= 150 ? fadeIn() : fadeOut() );
  

