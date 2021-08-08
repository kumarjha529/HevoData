// Testimonial 


var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

btn[0].onclick = function () {
    slide.style.transform = "translateX(0px)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.add("active");
    }
}
btn[1].onclick = function () {
    slide.style.transform = "translateX(-800px)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.add("active");
    }
}
btn[2].onclick = function () {
    slide.style.transform = "translateX(-1600px)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.add("active");
    }
}
btn[3].onclick = function () {
    slide.style.transform = "translateX(-2400px)";
    for (i = 0; i < 4; i++) {
        btn[i].classList.add("active");
    }
}


let counter = 1;

setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if (counter > 4) {
        counter = 1;
    }
}, 4000);
const sliders = document.querySelector(".carouselbox");

var scrollPerClick;
var ImagePadding = 20;

showMoviesData();

// Scroll Functionality
var scrollAmount = 0;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }

  console.log("Scroll Amount: ", scrollAmount);
}

function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmount);
}

// For showing dynamic contents only
async function showMoviesData() {
  const api_key = "47071116ad3913e09389a88eb1f895b6";
  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&primary_release_year=2017&sort_by=revenue.desc"
  );

  result = result.data.results;

  result.map(function (cur, index) {
    sliders.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider-img" src="http://image.tmdb.org/t/p/w185/${cur.poster_path}" /> `
    );
  });

  scrollPerClick = document.querySelector(".img-1").clientWidth + 20;
}