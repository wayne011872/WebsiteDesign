const gifs = ["https://media.giphy.com/media/bErElGdAHUmoE/giphy.gif"];

function showRandomGif() {
  const gif = gifs[Math.floor(Math.random() * gifs.length)];
  const img = document.querySelector(".gif-container");
  img.src = gif;

  const { clientWidth, clientHeight } = document.documentElement;
  const x = Math.floor(Math.random() * (clientWidth - img.clientWidth));
  const y = Math.floor(Math.random() * (clientHeight - img.clientHeight));
  img.style.left = x + "px";
  img.style.top = y + "px";
}

setInterval(showRandomGif, 3000);
