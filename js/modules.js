import { rangeF } from "./range.js"
const RangeFilho = document.querySelector(".range-filho")
const RangeBaba = document.querySelector(".range-baba")
const AgeFilho = document.querySelector(".show-age-filho")
const AgeBaba = document.querySelector(".show-age-baba")
RangeFilho.oninput = () => {rangeF(RangeFilho, AgeFilho)}
RangeBaba.oninput = () => {rangeF(RangeBaba, AgeBaba)}

/*FavoriteIcon.map((i)=> {
console.log(FavoriteIcon[i])
})*/
