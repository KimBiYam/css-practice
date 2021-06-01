const scrollChangedHandler = () => {
  let scrollPosition = window.scrollY;
  const codivAside = document.querySelector("div.codiv-info");
  const codivAsideHeight = codivAside.offsetHeight;

  const getTargetElements = () => {
    const scrollChangeItems = document.getElementsByClassName(
      "scrolled-change-item"
    );

    return scrollChangeItems;
  };

  const addClassOnScroll = () => {
    const targetElements = getTargetElements();

    Array.prototype.forEach.call(targetElements, (element) => {
      element.classList.add("scroll-changed");
    });
  };

  const removeClassOnScroll = () => {
    const targetElements = getTargetElements();

    Array.prototype.forEach.call(targetElements, (element) => {
      element.classList.remove("scroll-changed");
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

scrollChangedHandler();
