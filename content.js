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
  addMark(element) {
    this.previous_marks.push(video.currentTime);
  }

  // Remove and return the top element from the stack
  rewind() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    if (
      video.currentTime - this.previous_marks[previous_marks.length - 1] <
      WAIT_TIME
    ) {
      this.future_marks.push(previous_marks.pop());
    }
    video.currentTime = this.previous_marks[this.previous_marks.length - 1];
  }

  // View the top element of the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    // TODO change to "no previous marks"
    return this.previous_marks.length === 0;
  }

  // // Get the size of the stack
  // size() {
  //   return this.items.length;
  // }

  // // Empty the stack
  // clear() {
  //   this.items = [];
  // }
}

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
