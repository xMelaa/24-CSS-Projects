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
loadComponent(
  "loading1",
  "./components/loadingAnimation1/loadingAnimation1.html"
)
loadComponent(
  "loading2",
  "./components/loadingAnimation2/loadingAnimation2.html"
)
loadComponent(
  "loading3",
  "./components/loadingAnimation3/loadingAnimation3.html"
)
loadComponent("wordCarousel", "./components/wordCarousel/wordCarousel.html")
loadComponent("france", "./components/france/france.html")
loadComponent("germany", "./components/germany/germany.html")
loadComponent("madagascar", "./components/madagascar/madagascar.html")
loadComponent("switzerland", "./components/switzerland/switzerland.html")
loadComponent("japan", "./components/japan/japan.html")
loadComponent("sweden", "./components/sweden/sweden.html")
loadComponent("niger", "./components/niger/niger.html")
loadComponent("githubProfile", "./components/githubProfile/githubProfile.html")
loadComponent("toggleSwitch", "./components/toggleSwitch/toggleSwitch.html")
loadComponent("card1", "./components/aceOfSpades/aceOfSpades.html")
loadComponent("card2", "./components/fourOfHearts/fourOfHearts.html")
loadComponent(
  "adjustableProgressBar",
  "./components/adjustableProgressBar/adjustableProgressBar.html"
)
loadComponent(
  "animatedProgressBar",
  "./components/animatedProgressBar/animatedProgressBar.html"
)
loadComponent("flashcard", "./components/flashcard/flashcard.html")
loadComponent("instaStories", "./components/instaStories/instaStories.html")
