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
