async function displayDiscography() {
  let discographyResponse = await fetch("http://localhost:3000/hello");

  let discographyArray = await discographyResponse.json();

  document.querySelector(".row").innerHTML = "";

  for (let album of discographyArray) {
    let searchQuery = document.getElementById("search-bar").value;

    if (
      album.titolo.toLowerCase().includes(searchQuery) ||
      album.autore.toLowerCase().includes(searchQuery)
    ) {
      document.querySelector(".row").innerHTML += `<div class="card  col-3">
      <img src="${album.cover}" class="card-img-top pt-2" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${album.titolo}</h5>
        <p class="card-text">
          ${album.autore}
        </p>
      </div>
    </div>`;
    }
  }
}

window.onload = () => {
  displayDiscography();
};
