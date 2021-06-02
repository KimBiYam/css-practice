const scrollChangedHandler = () => {
  let scrollPosition = window.scrollY;
  const codivAside = document.querySelector("div.codiv-info");
  const codivAsideHeight = codivAside.offsetHeight;

  window.addEventListener("scroll", () => {
    scrollPosition = window.scrollY;

    if (scrollPosition >= codivAsideHeight) {
      addClassOnScroll();
    } else {
      removeClassOnScroll();
    }
  });
};

const getTargetElements = () => {
  const scrollChangeItems = document.getElementsByClassName(
    "scrolled-change-item"
  );

  return scrollChangeItems;
};

const addClassOnScroll = () => {
  const targetElements = getTargetElements();

  Array.from(targetElements).forEach((element) => {
    element.classList.add("scroll-changed");
  });
};

const removeClassOnScroll = () => {
  const targetElements = getTargetElements();

  Array.from(targetElements).forEach((element) => {
    element.classList.remove("scroll-changed");
  });
};

scrollChangedHandler();
