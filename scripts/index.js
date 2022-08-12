const orderBtn = document.getElementById("order-btn");
const dialog = document.getElementById("dialog");
const overlay = document.getElementById("overlay");
// const close = document.getElementById("close");
const submitBtn = document.getElementById("submit-order");

const openOrder = () => {
  dialog.style.display = "block";
  overlay.style.display = "block";
};
function closeOrder() {
  dialog.style.display = "none";
  overlay.style.display = "none";
}
orderBtn.addEventListener("click", openOrder);
// close.addEventListener("click", closeOrder);
submitBtn.addEventListener("click", closeOrder);
