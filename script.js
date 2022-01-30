//starting array
const whatToBuy = [
  { item: "apples", amount: 3 },
  { item: "bread", amount: 1 },
  { item: "bananas", amount: 7 },
  { item: "milk", amount: 2 },
];

//testing whether it works to add new items to the array
whatToBuy.push({ item: "fish", amount: 1 });

//function that displays the items from the array to the page
const displayingTheList = () => {
  whatToBuy.forEach((element) => {
    document.getElementById(
      "list"
    ).innerHTML += `<div class="item">${element.item} - ${element.amount}</div>`;
  });
};

//initial display when the page gets loaded
displayingTheList();

//accessing the button
const button = document.getElementById("button");

//when clicking the button, the values from text fields are converted into a new item of an array
button.addEventListener("click", (event) => {
  //prevents from refreshing the page when submit button clicked
  event.preventDefault();
  const item = document.querySelector('input[type="text"]').value;
  const amount = document.querySelector('input[type="number"]').value;

  whatToBuy.push({ item: item, amount: amount });

  document.querySelector('input[type="text"]').value = "";
  document.querySelector('input[type="number"]').value = "";

  displayingTheList();
});
