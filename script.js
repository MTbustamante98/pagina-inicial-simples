const eventos = ["click", "touchstart"];
const fill = document.querySelector(".fill");

function initHandleClick() {
  const animacaoButton = document.querySelector('[data-animacao="button"]');
  const effect1 = document.querySelector(".effect");
  const effect2 = document.querySelector(".effect-2");
  const imageMoon = document.getElementById("moonFill");
  const imageSun = document.getElementById("sunFill");
  const logoIcon = document.getElementById("logo");

  const listUL = document.querySelectorAll("li a");
  const modifylistUL = Array.from(listUL);

  const mainContainer = document.querySelector(".main-container");
  const container = Array.from(mainContainer.querySelectorAll("*"));

  function changingTheme() {
    const isActive = effect2.classList.contains("active");

    effect2.classList.toggle("active", !isActive);
    effect1.style.display = isActive ? "block" : "none";
    effect1.style.animation = isActive ? "show ease .6s forwards" : "none";

    imageMoon.setAttribute(
      "src",
      isActive ? "resources/Moon_fill_light.svg" : "resources/Moon_fill.svg"
    );

    imageSun.setAttribute(
      "src",
      isActive ? "resources/Sun_fill.svg" : "resources/Sun_fill_light.svg"
    );

    logoIcon.setAttribute(
      "src",
      isActive
        ? "resources/alarado-icon-homepage.svg"
        : "resources/alarado-icon-homepage-dark.svg"
    );

    document.body.style.background = isActive ? "initial" : "var(--cor-3)";

    fill.style.background = isActive ? "var(--cor-3)" : "var(--cor-4)";

    container.forEach((elements) => {
      elements.classList.toggle("active");
    });

    container[0].classList.remove("active");
    container[4].classList.remove("active");
    container[8].classList.remove("active");

    modifylistUL.forEach((elements) => {
      elements.classList.toggle("active");
    });
  }
  eventos.forEach((evento) =>
    animacaoButton.addEventListener(evento, changingTheme)
  );
  // animacaoButton.addEventListener("click", handleClick);
}
initHandleClick();

function initMenuMobile() {
  const menuMobile = document.querySelector('[data-menu="button"]');
  const burguerImg = document.getElementById("burguer");
  const nav = document.querySelector("nav");

  function appearMenu(event) {
    willActivate = burguerImg.classList.contains("active");

    burguerImg.classList.toggle("active");

    if (menuMobile) {
      burguerImg.setAttribute(
        "src",
        willActivate
          ? "resources/hamburger-button.svg"
          : "resources/close-button.svg"
      );
      nav.classList.toggle("active");
      fill.classList.toggle("active");
    }
  }

  eventos.forEach((evento) => menuMobile.addEventListener(evento, appearMenu));
}
initMenuMobile();
