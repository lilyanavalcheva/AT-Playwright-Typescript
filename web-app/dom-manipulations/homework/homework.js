var bodyElement = document.body;
var headingOne = document.getElementById("title");
if (headingOne) {
    headingOne.textContent = "New text of the H1";
}
console.log("newText:", headingOne === null || headingOne === void 0 ? void 0 : headingOne.textContent);
var newColorP = document.querySelector(".content");
newColorP.style.color = "blue";
console.log("newColorP:", newColorP.style.color);
var listItems = document.querySelectorAll("#list li");
var fruitsItems = ["Banana", "Peach", "Mango"];
listItems[0].textContent = fruitsItems[0];
listItems[1].textContent = fruitsItems[1];
listItems[2].textContent = fruitsItems[2];
console.log("fruitsItems:", fruitsItems);
var newBtn = document.getElementById("new button");
if (newBtn) {
    newBtn.style.border = "1px solid red";
}
console.log("newBtn:", newBtn === null || newBtn === void 0 ? void 0 : newBtn.style.border);
