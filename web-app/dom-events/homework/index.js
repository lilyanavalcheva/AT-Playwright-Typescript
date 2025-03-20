// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"
var addBorderBtn = document.getElementById("add-border-btn");
var contentSection = document.querySelector(".content");
if (addBorderBtn && contentSection) {
    addBorderBtn.addEventListener("click", function () {
        contentSection.style.border = "2px solid red";
        console.log("The red border is added to the section");
    });
}
// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
var changeTextBtn = document.getElementById("change-text-btn");
if (changeTextBtn && contentSection) {
    changeTextBtn.addEventListener("click", function () {
        contentSection.style.color = "blue";
        console.log("The color is changed to blue");
    });
}
// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
var toggleBgBtn = document.getElementById("toggle-bg-btn");
if (toggleBgBtn && contentSection) {
    toggleBgBtn.addEventListener("click", function () {
        contentSection.style.backgroundColor = "grey";
        console.log("Grey background is added");
    });
}
//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);
if (contentSection) {
    contentSection.addEventListener("mouseover", function () {
        contentSection.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
        console.log("Box shadow applied on hover");
    });
}
