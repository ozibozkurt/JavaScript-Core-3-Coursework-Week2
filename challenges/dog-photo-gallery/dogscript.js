let button = document.createElement("button");
let ul = document.createElement("ul");
let li = document.createElement("li");
let img = document.createElement("img");

ul.appendChild(li);
ul.appendChild(button);
li.appendChild(img);
document.body.appendChild(ul);

button.setAttribute("id", "button1Element");
ul.setAttribute("id", "ulElement");
li.setAttribute("id", "liElement");
img.setAttribute("id", "imgsElement");


button.textContent = "Dog Image";

let button1 = document.getElementById("button1Element");
button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })

    .then(function (image) {
      img.src = image.message;
    });
});
