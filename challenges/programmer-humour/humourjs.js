let imgs = document.createElement("img");
imgs.setAttribute("id", "img");
let body = document.getElementsByName("body");

fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw new Error(
        `Encountered something unexpected: ${response.status} ${response.statusText}`
      );
    }
  })

  .then((data) => {
    imgs.src = data.img;

    document.body.appendChild(imgs);
  })
  .catch((error) => console.log(error));
