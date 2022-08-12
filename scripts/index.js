const orderBtn = document.getElementById("order-btn");

const openOrder = () => {
  dialog.style.display = "block";
  overlay.style.display = "block";
};

orderBtn.addEventListener("click", openOrder);
