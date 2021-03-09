const shareButton = document.querySelector(".share-button");
const shareCard = document.querySelector(".share-card");

shareButton.addEventListener("click", () => {
  shareCard.classList.toggle("hide");
  shareButton.classList.toggle("toggle");
  shareButton.classList.toggle("reverse");
});
