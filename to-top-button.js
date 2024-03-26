const toTopButton = () => {
  const backToTop = document.getElementById("back-to-top");

  if (backToTop) {
    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    });

    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
};

toTopButton();
