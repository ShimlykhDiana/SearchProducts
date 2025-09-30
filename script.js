const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input"); //if no selector we can use parent el
const cardWrapper = document.querySelector(".content-main__list");

const cardArray = [
  {
    id: 0,
    title: "Пвх материал 1й сорт",
    price: "1700 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:44",
    img: "./images/Rectangle 3.png",
  },
  {
    id: 1,
    title: "Пвх материал 2й сорт",
    price: "1400 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 17:30",
    img: "./images/Rectangle 3.png",
  },
  {
    id: 2,
    title: "Пвх материал 3й сорт",
    price: "1100 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./images/Rectangle 3.png",
  },
  {
    id: 3,
    title: "Пвх материал 4й сорт",
    price: "800 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:33",
    img: "./images/Rectangle 3.png",
  },
  {
    id: 4,
    title: "Пвх материал 5й сорт",
    price: "500 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 23:39",
    img: "./images/Rectangle 3.png",
  },
  {
    id: 5,
    title: "Пвх материал 6й сорт",
    price: "170 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 16:39",
    img: "./images/Rectangle 3.png",
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = ""; //clear wrapper and only after that it'll start

  cardList.forEach((item) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `<a href="/product.html" class="content-main__list-item">
        <div class="content-main__list-item--img">
            <img src="${item.img}" alt="${item.title}" />
        </div>
            <h5 class="content-main__list-item--title">${item.title}</h5>
            <strong class="content-main__list-item--price">${item.price}</strong>
            <div class="content-main__list-item--desc-box">
            <span class="content-main__list-item--desc">${item.address}</span>
            <span class="content-main__list-item--desc">${item.date}</span>
            </div>
            </a>`
    );
  });
};
const filteredArray = (array, value) => {
  return array.filter((item) => {
    //always returns true or false
    return (
      item.title.includes(value.toLowerCase()) || item.price.includes(value)
    );
  });
};

cardWrapper.style.justifyContent = "flex-start";
cardWrapper.style.gap = "30px";

render(cardArray);

searchBtn.addEventListener("click", () => {
  render(filteredArray(cardArray, searchInput.value));
});
