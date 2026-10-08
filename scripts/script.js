const price1 = document.querySelector(".price1");
const price2 = document.querySelector(".price2");
const price3 = document.querySelector(".price3");
const headerInputCheck = document.querySelector(".header-input--check");

// headerInputCheck.addEventListener("click", () => {
//   if (headerInputCheck.value === "month") {
//   }
//   if (headerInputCheck.value === "year") {
//   }
// });

headerInputCheck.addEventListener("change", () => {
  if (headerInputCheck.checked) {
    headerInputCheck.value = "year";
    price1.textContent = "$199.99";
    price2.textContent = "$249.99";
    price3.textContent = "$399.99";
  } else {
    headerInputCheck.value = "month";
    price1.textContent = "$19.99";
    price2.textContent = "$24.99";
    price3.textContent = "$39.99";
  }
});
