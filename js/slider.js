document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".promo-slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".slide");
  const dots = slider.querySelectorAll(".dot");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");

  let current = 0;
  let autoplayTimer;

  function setInstant(el, xPercent) {
    el.style.transition = "none";
    el.style.transform = `translateX(${xPercent}%)`;
    el.offsetHeight; 
    el.style.transition = "transform 0.6s ease";
  }

  function goTo(newIndex, direction) {
    if (newIndex === current) return;

    const outgoing = slides[current];
    const incoming = slides[newIndex];

    if (direction === "next") {
      setInstant(incoming, 100); 
      requestAnimationFrame(() => {
        outgoing.style.transform = "translateX(-100%)";
        incoming.style.transform = "translateX(0)";
      });
    } else {
      setInstant(incoming, -100);
      requestAnimationFrame(() => {
        outgoing.style.transform = "translateX(100%)"; 
        incoming.style.transform = "translateX(0)";
      });
    }

    outgoing.classList.remove("active");
    incoming.classList.add("active");
    dots[current].classList.remove("active");
    dots[newIndex].classList.add("active");

    current = newIndex;
  }

  function next() {
    const newIndex = (current + 1) % slides.length;
    goTo(newIndex, "next");
  }

  function prev() {
    const newIndex = (current - 1 + slides.length) % slides.length;
    goTo(newIndex, "prev");
  }

  function startAutoplay() {
    autoplayTimer = setInterval(next, 4000);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }

  nextBtn.addEventListener("click", () => {
    next();
    stopAutoplay();
    startAutoplay();
  });

  prevBtn.addEventListener("click", () => {
    prev();
    stopAutoplay();
    startAutoplay();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      // decide push direction based on which index is "ahead"
      const direction = i > current || (current === slides.length - 1 && i === 0) ? "next" : "prev";
      goTo(i, direction);
      stopAutoplay();
      startAutoplay();
    });
  });

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  startAutoplay();
});