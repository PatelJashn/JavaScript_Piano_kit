const buttons = [
  { buttonId: "button1", musicId: "music1", key: "a" },
  { buttonId: "button2", musicId: "music2", key: "s" },
  { buttonId: "button3", musicId: "music3", key: "d" },
  { buttonId: "button4", musicId: "music4", key: "f" },
  { buttonId: "button5", musicId: "music5", key: "g" },
  { buttonId: "button6", musicId: "music6", key: "h" },
  { buttonId: "button7", musicId: "music7", key: "j" },
  { buttonId: "button8", musicId: "music8", key: "k" },
  { buttonId: "button9", musicId: "music9", key: "l" },
];

buttons.forEach(({ buttonId, musicId, key }) => {
  const button = document.getElementById(buttonId);
  const music = document.getElementById(musicId);

  button.addEventListener("click", () => {
    button.classList.add("active");
    music.currentTime = 0;
    music.play();
    setTimeout(() => {
      button.classList.remove("active");
    }, 200);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === key) {
      button.click();
    }
  });
});
