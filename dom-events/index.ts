// get element by tag name
document.getElementsByTagName("h1")[0];

// get h1 tag by css selector
document.querySelector("h1");
document.querySelector("#list");

// create DOM element
const paragraph: HTMLParagraphElement = document.createElement("p");
paragraph.textContent = "This is our created paragraph";

// get element by class name
const addItemsContent: HTMLCollectionOf<Element> =
  document.getElementsByClassName("add-items");
console.log("addItemContent:", addItemsContent);

// append element in the html structure
addItemsContent[0].append(paragraph);

// remove element
const spanEl: HTMLSpanElement = document.getElementsByTagName("span")[0];
spanEl.remove();

// add ebent listener on keyboard press
document.addEventListener("keypress", (event: KeyboardEvent) => {
  console.log("Key pressed", event.key);
});

paragraph.remove();

// add and remove list items
const itemInput = document.querySelector("#itemInput") as HTMLInputElement;
const addButton = document.querySelector("#addButton") as HTMLInputElement;
const list = document.querySelector("#list") as HTMLElement;

// Extract the actual item addition logic to a separate function
function addListItem() {
  const listItem: HTMLLIElement = document.createElement("li");
  const listItemValue: string | number = itemInput.value;

  if (listItemValue !== "" && listItemValue !== " ") {
    // added list item as list item text
    listItem.textContent = listItemValue;
    // display list item on the screen
    list.append(listItem);
    // clear input value after adding it to the list
    itemInput.value = "";
    itemInput.focus();

    const deleteBtn: HTMLButtonElement = document.createElement("button");
    deleteBtn.textContent = "Delete";
    listItem.append(deleteBtn);

    deleteBtn.style.margin = "5px";
    deleteBtn.addEventListener("click", () => {
      listItem.remove();
    });
  }
}

// Add click event listener to the button
addButton.addEventListener("click", addListItem);

// Add keypress event listener to the input
itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addListItem();
  }
});
