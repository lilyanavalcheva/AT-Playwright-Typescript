// get element by tag name
document.getElementsByTagName("h1")[0];
// get h1 tag by css selector
document.querySelector("h1");
document.querySelector("#list");
// create DOM element
var paragraph = document.createElement("p");
paragraph.textContent = "This is our created paragraph";
// get element by class name
var addItemsContent = document.getElementsByClassName("add-items");
console.log("addItemContent:", addItemsContent);
// append element in the html structure
addItemsContent[0].append(paragraph);
// remove element
var spanEl = document.getElementsByTagName("span")[0];
spanEl.remove();
// add ebent listener on keyboard press
document.addEventListener("keypress", function (event) {
    console.log("Key pressed", event.key);
});
paragraph.remove();
// add and remove list items
var itemInput = document.querySelector("#itemInput");
var addButton = document.querySelector("#addButton");
var list = document.querySelector("#list");
// Extract the actual item addition logic to a separate function
function addListItem() {
    var listItem = document.createElement("li");
    var listItemValue = itemInput.value;
    if (listItemValue !== "" && listItemValue !== " ") {
        // added list item as list item text
        listItem.textContent = listItemValue;
        // display list item on the screen
        list.append(listItem);
        // clear input value after adding it to the list
        itemInput.value = "";
        itemInput.focus();
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        listItem.append(deleteBtn);
        deleteBtn.style.margin = "5px";
        deleteBtn.addEventListener("click", function () {
            listItem.remove();
        });
    }
}
// Add click event listener to the button
addButton.addEventListener("click", addListItem);
// Add keypress event listener to the input
itemInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addListItem();
    }
});
