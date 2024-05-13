async function fetchData() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const record = await res.json();
  console.log("test");
  document.getElementById("setup").innerHTML = record.setup;
  document.getElementById("punchline").innerHTML = record.punchline;
  const video = document.querySelector("video");
  document.getElementById("time").innerHTML = video.currentTime;
}
fetchData();

document.addEventListener("keydown", function (event) {
  // You can change the key as needed; 'p' is used here as an example
  if (event.key === "p") {
    const video = document.querySelector("video");
    // if (video) {
    //   if (!video.paused) {
    //     video.pause();
    //     console.log(`Video paused at ${video.currentTime} seconds.`);
    //   } else {
    //     video.play();
    //   }
    // }
    document.getElementById("time").innerHTML = video.currentTime;
    // console.log(`Video paused at ${video.currentTime} seconds.`);
  }
});
