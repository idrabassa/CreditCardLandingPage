window.onscroll = function () {
  myFunction();
};

function myFunction() {
  const logo = document.querySelector(".logo");
  if (window.pageYOffset === 0) {
    logo.classList.add("rotate");
  } else {
    logo.classList.remove("rotate");
  }
}

const container = document.querySelector(".people");
container.onmouseover = container.onmouseout = handler;

function handler(event) {
  let indexfixed = 0;
  const elements = document.querySelectorAll(".person");
  if (event.type === "mouseover") {
    console.log("entre aqui");
    elements.forEach((e, index) => {
      if (e === event.target.parentNode || e === event.target) {
        indexfixed = index;
        console.log(index);
      }
    });

    elements.forEach((e, index) => {
      if (index > indexfixed) {
        e.classList.add("translate");
      }
    });
  }

  if (event.type === "mouseout") {
    console.log("entre");
    elements.forEach((e, index) => {
      if (e.classList.contains("translate") && index > indexfixed) {
        e.classList.remove("translate");
      }
    });
  }
}
