export function initCarousels() {
  const carousels = ["pt", "mat", "geo", "his", "fis", "bio"]; // Removido ""

  carousels.forEach(id => {
    const carouselElement = document.querySelector(`#task-carousel-${id}`);
    if (carouselElement) {
      new Splide(carouselElement, {
        type: "normal",
        perPage: 2,
        omitEnd:true,
      }).mount();
    }
  });
}


