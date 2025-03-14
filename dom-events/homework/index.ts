// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"

const addBorderBtn = document.getElementById("add-border-btn") as HTMLElement;
const contentSection = document.querySelector(".content") as HTMLElement;

if (addBorderBtn && contentSection) {
  addBorderBtn.addEventListener("click", () => {
    contentSection.style.border = "2px solid red";
    console.log("The red border is added to the section");
  });
}

// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"

const changeTextBtn = document.getElementById(
  "change-text-btn"
) as HTMLButtonElement;

if (changeTextBtn && contentSection) {
  changeTextBtn.addEventListener("click", () => {
    contentSection.style.color = "blue";
    console.log("The color is changed to blue");
  });
}

// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"

const toggleBgBtn = document.getElementById("toggle-bg-btn") as HTMLElement;

if (toggleBgBtn && contentSection) {
  toggleBgBtn.addEventListener("click", () => {
    contentSection.style.backgroundColor = "grey";
    console.log("Grey background is added");
  });
}

//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);

if (contentSection) {
  contentSection.addEventListener("mouseover", () => {
    contentSection.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
    console.log("Box shadow applied on hover");
  });
}
