// console.log("Hi Batch #1017!!!!");

// ////////
// Select DOM elements
// ////////

// with its ID (Kaho)
// const kaho = document.querySelector("#kaho");
// console.log(kaho);

// // with its tag type (h2)
// const h2 = document.querySelector("h2");
// console.log(h2);

// // with its class (group)
// const group = document.querySelector(".group");
// console.log(group);
// // by nest selection (ul of the group)
// const ul = group.querySelector("ul");
// console.log(ul);
// // select multiple elements (all the card)
// const cards = document.querySelectorAll(".card");
// console.log(cards); // it's a nodelist, a kind of array

// ////////
// Modify the DOM
// ////////

// add an HTML element (NotAlone United 💚)
const ul = document.querySelector(".group ul");
ul.insertAdjacentHTML("beforeend", "<li>NotAlone <em>United</em> 💚</li>");

// same but more complex (add Yumi!!!)
const socialoList = document.querySelector("#socialo ul");
socialoList.insertAdjacentHTML(
  "afterbegin",
  `<li>
    <img src="https://avatars.githubusercontent.com/u/88379080?v=4" alt="">
    <p>Yumi</p>
  </li>`
);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
const group = document.querySelector(".group");
group.style.backgroundColor = "darkgreen";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");

// add/remove every 1sec
// setInterval(() => {
//   group.classList.toggle("text-white");
// }, 1000);

// Read/Write for inputs (change the value in the email input)
const email = document.querySelector("#email");
console.log(email.value);
email.value = "yann@me.com";

// Read/Write the (inner) text and HTML content (SubsMan United 👹 title)
const title = document.querySelector("#subsman-united h3");
console.log(title);
console.log(title.innerText);
console.log(title.innerHTML);

title.innerText = "Hello <em>everyone</em>";
title.innerHTML = "Hello <em>everyone</em>";

// ////////
// Add event listeners
// ////////

// // 1. Select kaho img
// const kaho = document.querySelector("#kaho");

// // 2. Listen to an event (click) on kaho's img
// kaho.addEventListener("click", () => {
//   // 3. Change the DOM (add a "selected" class to kaho's img tag)
//   kaho.classList.toggle("selected");
// });

// // 1. Select card's img
const images = document.querySelectorAll(".card img");
console.log(images);

images.forEach((image) => {
  // 2. Listen to an event (click) on kaho's img
  image.addEventListener("click", (event) => {
    // 3. Change the DOM (add a "selected" class to kaho's img tag)
    console.log(event);
    event.currentTarget.classList.toggle("selected");
    // image.classList.toggle("selected");
  });
});
