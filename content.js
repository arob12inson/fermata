document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    const video = document.querySelector("video");
    if (video) {
      if (!video.paused) {
        video.pause();
        console.log(`Video paused at ${video.currentTime} seconds.`);
      } else {
        video.play();
      }
    }
  }
});
