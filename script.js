async function fetchData() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const record = await res.json();
  document.getElementById("setup").innerHTML = record.setup;
  document.getElementById("punchline").innerHTML = record.punchline;
}
fetchData();
