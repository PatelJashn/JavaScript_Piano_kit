const button1 = document.getElementById("button1");
const music1 = document.getElementById("music1")

button1.addEventListener("click", () => {
  button1.classList.add("active");
  music1.currentTime = 0;
  music1.play()

  setTimeout(() => {
    button1.classList.remove("active");
  }, 200);  
});

document.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    button1.click();  
  }
});


const button2 = document.getElementById("button2");
const music2 = document.getElementById("music2");

button2.addEventListener("click", () => {
  button2.classList.add("active");
  music2.currentTime = 0;
  music2.play();
  setTimeout(() => {
    button2.classList.remove("active");
  }, 200);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "s") {
    button2.click();
  }
});

const button3 = document.getElementById("button3");
const music3 = document.getElementById("music3");

button3.addEventListener("click", () => {
  button3.classList.add("active");
  music3.currentTime = 0;
  music3.play();
  setTimeout(() => {
    button3.classList.remove("active");
  }, 200);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "d") {
    button3.click();
  }
});

const button4 = document.getElementById("button4");
const music4 = document.getElementById("music4");

button4.addEventListener("click", () => {
  button4.classList.add("active");
  music4.currentTime = 0;
  music4.play();
  setTimeout(() => {
    button4.classList.remove("active");
  }, 200);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "f") {
    button4.click();
  }
});

const button5 = document.getElementById("button5");
const music5 = document.getElementById("music5");

button5.addEventListener("click", () => {
  button5.classList.add("active");
  music5.currentTime = 0;
  music5.play();
  setTimeout(() => {
    button5.classList.remove("active");
  }, 200);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "g") {
    button5.click();
  }
});

const button6 = document.getElementById("button6");
const music6 = document.getElementById("music6");

button6.addEventListener("click", () => {
  button6.classList.add("active");
  music6.currentTime = 0;
  music6.play();
  setTimeout(() => {
    button6.classList.remove("active");
  }, 200);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    button6.click();
  }
});

const button7 = document.getElementById("button7");
const music7 = document.getElementById("music7");

button7.addEventListener("click", () => {
  button7.classList.add("active");
  music7.currentTime = 0;
  music7.play();
  setTimeout(() => {
    button7.classList.remove("active");
  }, 200);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "j") {
    button7.click();
  }
});

const button8 = document.getElementById("button8");
const music8 = document.getElementById("music8");

button8.addEventListener("click", () => {
  button8.classList.add("active");
  music8.currentTime = 0;
  music8.play();
  setTimeout(() => {
    button8.classList.remove("active");
  }, 200);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "k") {
    button8.click();
  }
});

const button9 = document.getElementById("button9");
const music9 = document.getElementById("music9");

button9.addEventListener("click", () => {
  button9.classList.add("active");
  music9.currentTime = 0;
  music9.play();
  setTimeout(() => {
    button9.classList.remove("active");
  }, 200);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "l") {
    button9.click();
  }
});
