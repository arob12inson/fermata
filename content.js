previous_marks = [];

future_marks = [];

const video = document.querySelector("video");

const WAIT_TIME = 0.5;

document.addEventListener("keydown", function (event) {
  // p for pausing
  if (event.key === "p") {
    // const video = document.querySelector("video");
    if (video) {
      if (!video.paused) {
        video.pause();
        console.log(`Video paused at ${video.currentTime} seconds.`);
      } else {
        video.play();
      }
    }
  }
  // c for creating marks
  else if (event.key === "c") {
    if (video) {
      previous_marks.push(video.currentTime);
      console.log(`timestamp created at ${video.currentTime} seconds.`);
    }
  }

  // b for backtrack
  else if (event.key == "b") {
    if (video && previous_marks) {
      if (
        video.currentTime - previous_marks[previous_marks.length - 1] <
        WAIT_TIME
      ) {
        future_marks.push(previous_marks.pop());
      }
      video.currentTime = previous_marks[previous_marks.length - 1];
    }
  }
});
