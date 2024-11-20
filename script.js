document
  .getElementById("colorfulButtonLink")
  .addEventListener("click", (event) => {
    event.preventDefault()

    const mainDiv = document.querySelector(".main")

    fetch("./components/colorfulButton/colorfulButton.html")
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
