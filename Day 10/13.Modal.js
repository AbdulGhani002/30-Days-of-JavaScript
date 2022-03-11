/*
  TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
*/

const modal = document.querySelector("#modal");
const openModalButton = document.querySelector("#open-modal-btn");
const closeModalButton = document.querySelector("#close-modal-btn");
const overLay = document.querySelector("#overlay");
// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay
openModalButton.addEventListener("click", () => {
  modal.classList.add("open");
  overLay.classList.add("open");
});

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay
closeModalButton.addEventListener("click", () => {
  modal.classList.remove("open");
  overLay.classList.remove("open");
});

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay
overLay.addEventListener("click", () => {
  modal.classList.remove("open");
  overLay.classList.remove("open");
});
