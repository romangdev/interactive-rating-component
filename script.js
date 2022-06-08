let ratingButtons = document.querySelectorAll(".rating button");

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.remove("button-grey");
    button.classList.add("button-orange");
  });
});

