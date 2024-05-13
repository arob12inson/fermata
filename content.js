// async function fetchData() {
//   const res = await fetch("https://official-joke-api.appspot.com/random_joke");
//   const record = await res.json();
//   console.log("test");
//   document.getElementById("setup").innerHTML = record.setup;
//   document.getElementById("punchline").innerHTML = record.punchline;
//   const video = document.querySelector("video");
//   document.getElementById("time").innerHTML = video.currentTime;
// }
// fetchData();

alert("my script loaded!");

document.addEventListener("keydown", function (event) {
  if (event.key === "p") {
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

// Check if video element is available every 1000 milliseconds
const intervalId = setInterval(() => {
  const video = document.querySelector("video");
  if (video) {
    console.log("Video element found, setting up key listener.");
    setupKeyListener();
    clearInterval(intervalId); // Stop checking once the video is found
  } else {
    console.log("Video element not found, retrying...");
  }
}, 1000);
