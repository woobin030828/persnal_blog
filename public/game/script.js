const menuButtons = document.querySelectorAll('.menu-buttons');

menuButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.id;
    if (value === "home") {
      location.href = `/`
    } else {
      location.href = `/${value}`
    }
  })
})