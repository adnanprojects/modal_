const close = document.querySelector(".close");
const modal = document.getElementById("modal-btn");
const modalContainer = document.querySelector(".container");

modal.addEventListener("click", function () {
  modalContainer.classList.remove("hidden");
});

close.addEventListener("click", function () {
  modalContainer.classList.add("hidden");
});

window.addEventListener("click", function (event) {
  if (event.target === modalContainer) {
    modalContainer.classList.add("hidden");
  }
});
