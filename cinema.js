const container = document.querySelector(".container");
// const seatCount = document.querySelector('.seat .selected');
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected"); // Varsa siler yok ise seçer metodu toggle

    totalPrice();
  }
});

select.addEventListener("change", function (e) {
  totalPrice();
});

const totalPrice = () => {
  let selectedSeatCount = container.querySelectorAll(".seat.selected").length; // Koltuk sayısını aldık
  let price = select.value; // fiyat bilgisi

  count.innerText = selectedSeatCount;

  amount.innerText = selectedSeatCount * price;
};
