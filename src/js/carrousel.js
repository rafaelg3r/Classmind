export function initCarousels() {
  const carousels = [
    "pt",
    "mat",
    "geo",
    "his",
    "fis",
    "bio",
    "lit",
    "emp-ino",
    "dir-hum",
    "com-mar",
    "ing",
    "art",
    "qmc",
    "edu-fis",
    "res-pro",
    "red",
  ]

  carousels.forEach((id) => {
    const carouselElement = document.querySelector(`#task-carousel-${id}`)
    if (carouselElement) {
      new Splide(carouselElement, {
        type: "normal",
        perPage: 1,
        omitEnd: true,
      }).mount()
    }
  })

  const recentesCarousel = document.querySelector("#carousel-recentes")
  if (recentesCarousel) {
    new Splide(recentesCarousel, {
      perPage: 5,
    }).mount()
  }
}
