const changeHeader = () => {
  let scrollPosition = window.scrollY;
  const codivAside = document.getElementsByClassName("codiv-info")[0];
  const header = document.getElementsByClassName("main-header")[0];

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
