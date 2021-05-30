const headerScrolledHandler = () => {
  let scrollPosition = window.scrollY;
  const codivAside = document.querySelector("div.codiv-info");
  const codivAsideHeight = codivAside.offsetHeight;

  const getTargetElements = () => {
    const header = document.querySelector("header.main-header");
    const hostItem = document.querySelector("a.host-item");
    const globeIcon = document.querySelector("svg.globe-icon");
    const headerLogo = document.querySelector("svg.logo-icon");
    const profileButton = document.querySelector("button.profile-button");
    const navSection = document.querySelector("nav.nav-section");

    return [header, hostItem, globeIcon, headerLogo, profileButton, navSection];
  };

  const addClassOnScroll = () => {
    getTargetElements().forEach((element) => {
      element.classList.add("header-scrolled");
    });
  };

  const removeClassOnScroll = () => {
    getTargetElements().forEach((element) => {
      element.classList.remove("header-scrolled");
    });
  };

  window.addEventListener("scroll", () => {
    scrollPosition = window.scrollY;

    if (scrollPosition >= codivAsideHeight) {
      addClassOnScroll();
    } else {
      removeClassOnScroll();
    }
  });
};

headerScrolledHandler();
