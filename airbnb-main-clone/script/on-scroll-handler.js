const onScrollHandler = () => {
  let scrollPosition = window.scrollY;
  const codivAside = document.querySelector("div.codiv-info");
  const codivAsideHeight = codivAside.offsetHeight;

  window.addEventListener("scroll", () => {
    const targetElements = getTargetElements();
    scrollPosition = window.scrollY;

    if (scrollPosition >= codivAsideHeight) {
      addScrollChangedClass(targetElements);
    } else {
      removeScrollChangedClass(targetElements);
    }
  });
};

const getTargetElements = () => {
  const scrollChangeItems = document.getElementsByClassName(
    "scrolled-change-item"
  );

  return scrollChangeItems;
};

const addScrollChangedClass = (targetElements) => {
  Array.from(targetElements).forEach((element) => {
    element.classList.add("scroll-changed");
  });
};

const removeScrollChangedClass = (targetElements) => {
  Array.from(targetElements).forEach((element) => {
    element.classList.remove("scroll-changed");
  });
};

const removeSearchbarChildren = () => {};

onScrollHandler();
