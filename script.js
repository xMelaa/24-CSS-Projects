const loadComponent = (id, path) => {
  document.getElementById(id).addEventListener("click", (event) => {
    event.preventDefault()

    const mainDiv = document.querySelector(".main")

    fetch(path)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText)
        }
        return res.text()
      })
      .then((html) => {
        mainDiv.innerHTML = html
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      })
  })
}

loadComponent(
  "colorfulButtonLink",
  "./components/colorfulButton/colorfulButton.html"
)
loadComponent("searchBarLink", "./components/searchBar/searchBar.html")
loadComponent("codePenLink", "./components/codepenTile/codepenTile.html")
