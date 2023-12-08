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
const iCard = document.querySelectorAll(".card")
RangeFilho.oninput = () => {rangeF(RangeFilho, AgeFilho)}
RangeBaba.oninput = () => {rangeF(RangeBaba, AgeBaba)}
console.log(CloseIcon)
const ModalName = document.querySelector(".modal-name")

FavouriteIcon.addEventListener("click", (()=> {
    favOn(FavouriteIcon)
}))

CloseIcon.addEventListener("click",(() => {
    closeModal(modal, FavouriteIcon)
}))

cards.forEach((card) =>{
card.addEventListener("click",(() => {
    openModal(modal)
}))
})
