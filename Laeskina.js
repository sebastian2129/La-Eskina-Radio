const botones = document.querySelectorAll(".boton-play");

const audios = document.querySelectorAll(".audio-radio");

botones.forEach((boton, index) => {
  const audio = audios[index];

  boton.addEventListener("click", () => {
    audios.forEach((a, i) => {
      if (a !== audio) {
        a.pause();
        botones[i].textContent = "▶ Play";
        botones[i].classList.remove("active");
      }
    });

    if (audio.paused) {
      audio.play();
      boton.textContent = "⏸ Pause";
      boton.classList.add("active");
    } else {
      audio.pause();
      boton.textContent = "▶ Play";
      boton.classList.remove("active");
    }
  });
});
