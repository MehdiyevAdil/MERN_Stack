// JS Dosyası
$(document).ready(function () {
  function populateSlide(slideClass) {
    let slideContainer = document.querySelector(`.${slideClass} .center`);
    let urlSlide = "http://localhost:3000/games"; // datalari okuma
    fetch(urlSlide)
      .then((res) => res.json())
      .then((data) => {
        data.slice(0, 10).forEach((element) => {
          let card = document.createElement("div");
          let cardImg = document.createElement("div");
          let cardDateDetal = document.createElement("div");
          let cardDetalis = document.createElement("div");
          let cardWatchlist = document.createElement("div");
          let cardName = document.createElement("p");
          let cardDate = document.createElement("h4");

          card.append(cardImg);
          cardDetalis.append(cardDateDetal);
          card.append(cardDetalis);

          cardDateDetal.append(cardName, cardDate);
          cardDetalis.append(cardWatchlist);

          slideContainer.append(card);
          cardDetalis.className = "cardDetalies";
          cardDateDetal.className = "cardDateDetal";
          cardWatchlist.className = "cardWatchlist";
          cardImg.className = "cardImg";
          card.className =
            "card slick-slide slick-current slick-active slick-center";
          cardImg.style.backgroundImage = `url(${element.img})`;
          cardName.textContent = element.name;
          cardDate.innerHTML = element.date + "  " + "." + "  " + element.time;
          cardDate.style.color = "#ffff";

          cardWatchlist.innerHTML =
            '<img src="../../assests/img/bytesize_heart.svg" alt="Heart">,<img src="../assests/img/bx_bxl-play-store.svg" alt="Play">';
          cardWatchlist.onclick = () => {
            if (wishlist_arr.find((x) => x.id == element.id) === undefined) {
              wishlist_arr.push(element);
              cardWatchlist.style.color = "red";
            } else {
              wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
              cardWatchlist.style.color = "white";
            }
            localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
          };
        });

        $(`.${slideClass} .center`).slick({
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 3,
          prevArrow: `<i class="fa-solid fa-angle-left"></i>`,
          nextArrow: `<i class="fa-solid fa-chevron-right"></i>`,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 1,
              },
            },
          ],
        });
      })
      .catch((error) => {
        console.log("Fetch işleminde hata oluştu:", error);
      });
  }
  populateSlide("slideOne");
  populateSlide("slideTwo");
});

const wishlist_container = document.getElementById("navWatchlistMovie");
let wishlist_arr = [];
wishlist_arr = JSON.parse(localStorage.getItem("wishlist")) || [];
wishlist_arr.forEach((element) => {
  const card = document.createElement("div");
  const cardImg = document.createElement("div");
  const cardInf = document.createElement("div");

  const name = document.createElement("p");
  name.append(element.name);

  let btnDelete = document.createElement("div");
  btnDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  btnDelete.onclick = () => {
    wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    card.remove();
  };

  cardImg.className = "fullImgSize";
  card.className = "fullSize";
  cardInf.className = "cardInf";
  cardImg.style.backgroundImage = `url(${element.img})`;
  card.append(cardImg, cardInf);
  cardInf.append(name, btnDelete);

  wishlist_container.append(card);
});

// CARD CONTENT date,name,bestekat
let name = document.createElement("p");
const nameApi = element.name;
name.append(nameApi);
card.append(cardImg, cardInf);
cardInf.append(name, btnDelete);
let btnDelete = document.createElement("i");
btnDelete.className = "fa-solid fa-trash-can";
btnDelete.onclick = () => {
  wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
  card.remove();
};
