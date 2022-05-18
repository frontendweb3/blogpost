// nav bar
let navBar = document.getElementById("navbar-icon");

let navOpen = document.getElementById("navOpen");
let closeIcon = document.getElementById("closeIcon");
let HideBanner = document.getElementById("bannerCondition");

navBar.addEventListener("click", function () {
  navOpen.classList.toggle("hidden");
});

closeIcon.addEventListener("click", function () {
  navOpen.classList.toggle("hidden");
});

// commentButton
const commentClickButton = document.getElementById("commentButton");
const commentOpen = document.getElementById("commentOpen");

commentClickButton?.addEventListener("click", function () {
  commentOpen.classList.toggle("hidden");
  const list = commentOpen.classList.forEach(
    item => {
      commentClickButton.innerText = item === "hidden"? "Read comments": "Hidden comments"
    }
  )
}
)


// dark mode
const checkMoonClickIcon = document.getElementById("moonClickIcon");
const changeonImageIcon = document.getElementById("changeImageIcon");

checkMoonClickIcon.addEventListener("click", function () {
  const themeData = document.documentElement.classList.toggle("dark");

  if (themeData) {
    changeonImageIcon.src =
      "assets/Icons/moon.svg";
    localStorage.theme = "dark";
  } else {
    changeonImageIcon.src =
      "assets/Icons/sun.svg";
    localStorage.theme = "light";
  }
});

//  Hide Banner

(function () {
  if (!(window.localStorage.getItem("banner") === "hidden")) {
    HideBanner.classList.remove("hidden");
  } else {
    HideBanner.classList.add("hidden");
  }
})();
// call inside html accpet button onClick
function accpeptButton() {
  HideBanner.classList.add("hidden");
  window.localStorage.setItem("banner", "hidden");
}
