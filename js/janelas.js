export function closeModal(modal, fav){
   modal.style.display = "none"
   fav.classList.remove("on")
   fav.src = "./imgs/favourite-off.svg"
}

export function openModal(modal){
   modal.style.display = "flex"
}

export function favOn(fav){
 fav.classList.toggle("on")
   if(fav.classList.contains("on")){
      fav.src = "./imgs/favourite-on.svg"
   }
   else{
      fav.src = "./imgs/favourite-off.svg"
   }

}
