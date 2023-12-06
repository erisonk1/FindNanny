import { rangeF } from "./range.js"
import { closeModal } from "./janelas.js"
import { openModal } from "./janelas.js"
import { favOn } from "./janelas.js"
const RangeFilho = document.querySelector(".range-filho")
const RangeBaba = document.querySelector(".range-baba")
const AgeFilho = document.querySelector(".show-age-filho")
const AgeBaba = document.querySelector(".show-age-baba")
const CloseIcon = document.querySelector(".close")
const modal = document.querySelector(".background-modal-baba")
const cards = document.querySelectorAll(".card-baba");
const FavouriteIcon = document.querySelector(".favorite-icon")
RangeFilho.oninput = () => {rangeF(RangeFilho, AgeFilho)}
RangeBaba.oninput = () => {rangeF(RangeBaba, AgeBaba)}
console.log(CloseIcon)


FavouriteIcon.addEventListener("click", (()=> {
    favOn(FavouriteIcon)
}))

// FavouriteIcon.forEach((fav) =>{
//     fav.addEventListener("click",(() => {
//         teste(fav)
//     }))
    
//     })
CloseIcon.addEventListener("click",(() => {
    closeModal(modal, FavouriteIcon)
}))

cards.forEach((card) =>{
card.addEventListener("click",(() => {
    openModal(modal)
}))

})

