const modal = document.querySelector("#modal");
const outterShareIcon = document.querySelector("#share-icon-outter");
// const hideModal= document.querySelector("#hideModal");
const innerShareIcon= document.querySelector("#share-icon-inner");

outterShareIcon.addEventListener("click", ()=>{
  modal.classList.toggle("hideModal");
  outterShareIcon.classList.toggle("turnDark");
  innerShareIcon.classList.toggle("turnLight")

})

// hideModal.addEventListener("click", ()=>{
//   modal.classList.add("hideModal");
// })
