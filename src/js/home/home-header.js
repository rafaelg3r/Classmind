const navCronograma = document.querySelector(".nav-cronograma")
const navCollapse = document.querySelector(".nav-collapsed-cronograma")
const navIcons = document.getElementById("nav-arrows-toggle")
const arrowCollapse = navIcons.getElementsByTagName("svg")

// const teste = document.getElementById("theme")
// const darkMode = document.getElementById("checkbox")
// const themeSwitcher = document.querySelector(".switch-container")

// themeSwitcher.addEventListener("click", () => {
//   if (darkMode.checked) {
//     teste.setAttribute("href", "src/css/home/white-mode.css")
//   } else {
//     teste.setAttribute("href", "src/css/home/dark-mode.css")
//   }
// })

navCronograma.addEventListener("click", () => {
  navCollapse.classList.toggle("collapse")
  // arrowCollapse é um array de elementos SVG, por isso precisa de u for..of para cada elemento por conta que o classList.toggle so funciona em UM elemento, nao em um array.
  for (let arrow of arrowCollapse) {
    arrow.classList.toggle("rotate")
  }
})
