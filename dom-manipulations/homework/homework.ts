const bodyElement: HTMLElement = document.body;
const headingOne: HTMLElement | null = document.getElementById("title");
if (headingOne) {
  headingOne.textContent = "New text of the H1";
}
console.log("newText:", headingOne?.textContent);

const newColorP = document.querySelector(".content") as HTMLParagraphElement;
newColorP.style.color = "blue";
console.log("newColorP:", newColorP.style.color);

const listItems = document.querySelectorAll("#list li");
const fruitsItems = ["Banana", "Peach", "Mango"];
(listItems[0] as HTMLLIElement).textContent = fruitsItems[0];
(listItems[1] as HTMLLIElement).textContent = fruitsItems[1];
(listItems[2] as HTMLLIElement).textContent = fruitsItems[2];
console.log("fruitsItems:", fruitsItems);

const newBtn: HTMLElement | null = document.getElementById("new button");
if (newBtn) {
  newBtn.style.border = "1px solid red";
}
console.log("newBtn:", newBtn?.style.border);
