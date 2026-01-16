const songs = [
  {
    title: "Street Flow",
    artist: "Drill SL",
    cover: "assets/covers/street-flow.jpg",
    file: "assets/music/street-flow.mp3"
  },
  {
    title: "Colombo Nights",
    artist: "Kavi",
    cover: "assets/covers/colombo-nights.jpg",
    file: "assets/music/colombo-nights.mp3"
  }
];

const grid = document.getElementById("songGrid");

songs.forEach(song => {
  const card = document.createElement("div");
  card.className = "song-card";

  card.innerHTML = `
    <img src="${song.cover}">
    <div class="song-info">
      <h3>${song.title}</h3>
      <p>${song.artist}</p>
      <a class="download-btn" href="${song.file}" download>⬇ Download</a>
    </div>
  `;

  grid.appendChild(card);
});
