const listContainer = document.getElementById("movieList");
listContainer.classList.add("row", "gx-4", "gy-4", "p-4");

movieData.forEach(movie => {
  const movieDiv = document.createElement("div");
  movieDiv.classList.add("col-md-3");

  movieDiv.innerHTML = `
    <div class="card h-100 bg-secondary text-white">
      <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <a href="movie.html?id=${movie.id}" class="btn btn-warning">See Detail</a>
      </div>
    </div>
  `;
  listContainer.appendChild(movieDiv);
});
