const artistGrid = document.querySelector(".artist-grid");

artists.forEach(artist => {
  const card = document.createElement("a");
  card.href = `artist.html?id=${artist.id}`;
  card.className = "artist-card";

  card.innerHTML = `
    <img src="${artist.image}">
    <h3>
      ${artist.name}
      ${artist.verified ? '<span class="verified">✔</span>' : ''}
    </h3>
    <p>${artist.bio}</p>
    <div class="meta">
      <span>${artist.stats.songs} Songs</span>
      <span>${artist.stats.downloads.toLocaleString()} Downloads</span>
    </div>
  `;

  artistGrid.appendChild(card);
});