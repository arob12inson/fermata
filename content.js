previous_marks = [];

future_marks = [];

const video = document.querySelector("video");

const WAIT_TIME = 0.5;

class Markers {
  constructor() {
    this.previous_marks = [];
    this.future_marks = [];
  }

  // Add an element to the stack
  createMark(element) {
    if (video) {
      this.previous_marks.push(video.currentTime);
    }
  }

  // Remove and return the top element from the stack
  rewind() {
    if (!video || this.isEmpty()) {
      return;
    }
    if (
      video.currentTime - this.previous_marks[this.previous_marks.length - 1] <
      WAIT_TIME
    ) {
      this.future_marks.push(this.previous_marks.pop());
    }
    video.currentTime = this.previous_marks[this.previous_marks.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.previous_marks.length === 0;
  }

  pause() {
    if (video) {
      if (!video.paused) {
        video.pause();
        console.log(`Video paused at ${video.currentTime} seconds.`);
      } else {
        video.play();
      }
    }
  }
  // TODO delete markers
}

const markers = new Markers();

document.addEventListener("keydown", function (event) {
  // p for pausing
  if (event.key === "p") {
    markers.pause();
  }
  // c for creating marks
  else if (event.key === "c") {
    markers.createMark();
  }

  // b for backtrack
  else if (event.key == "b") {
    markers.rewind();
  }
});
