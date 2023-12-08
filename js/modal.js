const ImgBaba = document.querySelector(".img-baba");
const AgeBaba = document.querySelector(".baba-age");
const apelidoBaba = document.querySelector(".baba-nick");
const NameBaba = document.querySelector(".modal-name");
const CareBaba = document.querySelector(".modal-care");
const XpBaba = document.querySelector(".modal-xp");
const DescBaba = document.querySelector(".modal-descricao > p")
const card = document.querySelectorAll('.card-baba');

console.log(card)



const urlType = fetch("./js/usersBaba.json");
Promise.resolve(urlType)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    response.map((i) => {
        ImgBaba = `./imgs/${i.id}.jpg`
        NomeBaba = i.nome
        IdadeBaba = i.idade
        DistanciaBaba = i.distancia
        ExpBaba = i.exp
        EspBaba = i.esp
        criaCard(idBaba, NomeBaba, IdadeBaba, DistanciaBaba, ExpBaba, EspBaba,idBaba)
        
        
    })
  })
