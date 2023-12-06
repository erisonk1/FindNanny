let NomeBaba;
let IdadeBaba;
let DistanciaBaba;
let ExpBaba;
let EspBaba;

const urlType = fetch("../DataBase/usersBaba.json");
Promise.resolve(urlType)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    response.map((i) => {
        idBaba = i.id
        NomeBaba = i.nome
        IdadeBaba = i.idade
        DistanciaBaba = i.distancia
        ExpBaba = i.exp
        EspBaba = i.esp
        criaCard(idBaba, NomeBaba, IdadeBaba, DistanciaBaba, ExpBaba, EspBaba,idBaba)
        
        
    })
  })


  function criaCard(idBaba, NomeBaba, IdadeBaba, DistanciaBaba, ExpBaba, EspBaba) {
    const containerMain = document.querySelector(".separa")
    const mcard = document.createElement("div");
    containerMain.appendChild(mcard);
      mcard.innerHTML = `
      <div class="card-baba" id="${idBaba}">
      <img class="img-baba" src="./imgs/${idBaba}.jpg" alt="">
      <div class="infos-baba">
          <p class="nome">${NomeBaba},</p>
          <p class="age">${IdadeBaba}</p>
      </div>
      <p class="distancia-baba">${DistanciaBaba}km</p>
      <p class="exp-baba">${ExpBaba} Anos de Experiência</p>
      <div class="div-especialidade-baba">
          <label for="especialidade-baba">Especialidade</label>
          <p class="especialidade-baba">${EspBaba}</p>
      </div>


      </div> `;
      mcard.classList.add("card")
    }
    

    
   
  

  