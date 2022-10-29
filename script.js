let isIgnite = false
function changeCard(event) {
    const card = event.currentTarget
    const bg = isIgnite ? "explorer" : "ignite"
    isIgnite = !isIgnite
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}

/*
function changeCard(event) {
    const card = event.currentTarget
    card.style.backgroundImage = "url(./assets/bg-explorer.svg)"
}*/
/*
let isIgnite = false
function changeCard(event) {
  const card = event.currentTarget
  const bg = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}
*/

