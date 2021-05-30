const changeHeader = () => {
  let scrollPosition = window.scrollY;
  const codivAside = document.querySelector("div.codiv-info");
  const header = document.querySelector("header.main-header");

  const codivAsideHeight = codivAside.offsetHeight;

  const addClassOnScroll = () => header.classList.add("header-overflowed");
  const removeClassOnScroll = () =>
    header.classList.remove("header-overflowed");

  window.addEventListener("scroll", () => {
    scrollPosition = window.scrollY;

    if (scrollPosition >= codivAsideHeight) {
      addClassOnScroll();
    } else {
      removeClassOnScroll();
    }
  });
};

changeHeader();
