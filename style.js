// nav bar
// let closeIcon = document.getElementById("closeIcon");
let HideBanner = document.getElementById("bannerCondition");





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
