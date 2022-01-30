//starting array
const whatToBuy = [
  { item: "apples", amount: 3 },
  { item: "bread", amount: 1 },
  { item: "bananas", amount: 7 },
  { item: "milk", amount: 2 },
];

//testing whether it works to add new items to the array
whatToBuy.push({ item: "fish", amount: 1 });

//displaying the list on the page
whatToBuy.forEach((element) => {
  document.getElementById(
    "list"
  ).innerHTML += `<div class="item"><div>${element.item} - ${element.amount}</div><div class="cross">X</div></div>`;
});

//accessing the button
const button = document.getElementById("button");

//function that returns html
const creatingHTML = (html) => {
  const container = document.createElement("div");
  container.innerHTML = html;
  return container.firstChild;
};

//function that gives the crosses a power to delete
const deletingItems = () => {
  const crossArray = Array.from(document.querySelectorAll(".cross"));
  crossArray.forEach((element) => {
    element.addEventListener("click", () => {
      element.parentNode.parentNode.removeChild(element.parentNode);
    });
  });
};

deletingItems();

//when clicking the button, the values from text fields are converted into a new item on a page
button.addEventListener("click", (event) => {
  //prevents from refreshing the page when submit button clicked
  event.preventDefault();
  const item = document.querySelector('input[type="text"]').value;
  const amount = document.querySelector('input[type="number"]').value;

  const input = creatingHTML(
    `<div class="item"><div>${item} - ${amount}</div><div class="cross">X</div></div></div>`
  );

  //placing the new element into a list
  document.getElementById("list").appendChild(input);

  //deleting the text in the form fields
  document.querySelector('input[type="text"]').value = "";
  document.querySelector('input[type="number"]').value = "";

  //giving a newly created item the power to delete itself
  const cross = input.querySelector("div[class='cross']");
  cross.addEventListener("click", () => {
    cross.parentNode.parentNode.removeChild(cross.parentNode);
  });
});
