const favorite = document.querySelectorAll(".favorite-icon")
    favorite.map((i)=> {
        console.log(favorite.i)
    })

favorite.forEach((el) =>
  el.addEventListener("click", (event) => {
    ativaFavorito()
  })
);