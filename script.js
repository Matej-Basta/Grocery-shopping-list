const whatToBuy = [
  { item: "apples", amount: 3 },
  { item: "bread", amount: 1 },
  { item: "bananas", amount: 7 },
  { item: "milk", amount: 2 },
];

whatToBuy.push({ item: "fish", amount: 1 });

whatToBuy.forEach((element) => {
  document.getElementById(
    "list"
  ).innerHTML += `<div class="item">${element.item} - ${element.amount}</div>`;
});
