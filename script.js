document.addEventListener("DOMContentLoaded", () => {
  const testimoniesSlider = document.querySelector(".testimonies.slider");
  const testimoniesItems =
    testimoniesSlider.querySelectorAll(".testimony > div");
  const prevBtn = testimoniesSlider.querySelector(".prev-btn");
  const nextBtn = testimoniesSlider.querySelector(".next-btn");
  let currentIndex = 0;

  const showTestimonial = () => {
    testimoniesItems.forEach((item, index) => {
      if (index === currentIndex) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };

  const prevTestimonial = () => {
    currentIndex =
      (currentIndex - 1 + testimoniesItems.length) % testimoniesItems.length;
    showTestimonial();
  };

  const nextTestimonial = () => {
    currentIndex = (currentIndex + 1) % testimoniesItems.length;
    showTestimonial();
  };

  const handleResize = () => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop) {
      testimoniesSlider.classList.remove("slider");
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";

      testimoniesItems.forEach((item) => {
        item.style.display = "inline-block";
      });
    } else {
      testimoniesSlider.classList.add("slider");
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";

      testimoniesItems.forEach((item) => {
        item.style.display = "none";
      });

      currentIndex = 0;
      showTestimonial();
    }
  };

  prevBtn.addEventListener("click", prevTestimonial);
  nextBtn.addEventListener("click", nextTestimonial);

  window.addEventListener("resize", handleResize);
  handleResize();
});
