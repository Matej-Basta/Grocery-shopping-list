const whatToBuy = ["apples", "bread", "bananas", "milk"];
whatToBuy.push("fish");

whatToBuy.forEach((element) => {
  document.getElementById(
    "list"
  ).innerHTML += `<div class="item">${element}</div>`;
});
