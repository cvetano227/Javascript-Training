const id = new URLSearchParams(window.location.search).get("id");
console.log(id);

async function getShowData(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await response.json();

  console.log(show);

  return show;
}

getShowData(id).then((show) => {
  const showContainer = document.getElementById("show");
  const showTitle = document.getElementById("show-title");

  showTitle.innerText = show.name;

  showContainer.innerHTML = `<img src="${show.image.medium}"/>`;
});

const nextShowButton = document.getElementById("next-btn");
nextShowButton.addEventListener("click", () => {
  const splitUrl = window.location.href.split("id=");
  const url = splitUrl[0];

  console.log(splitUrl);

  window.location.href = splitUrl[0] + `id=${+id + 1}`;
});

async function getEpisodes(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  const episodes = await response.json();

  return episodes;
}

function populateEpisodes(episodes) {
  const episodesList = document.getElementById("episodes-list");

  episodesList.innerHTML = episodes
    .map((episode) => `<li>${episode.name}</li>`)
    .join("");
}

getEpisodes(id).then((episodes) => {
  populateEpisodes(episodes);
});
