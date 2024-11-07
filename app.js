const closeButton = document.querySelector(".close-btn")
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal")
const showModal = document.querySelectorAll(".show-modal")
// console.log(showModal)

// const displayModal = function(){
//     modal.classList.remove("hidden") 
//     overlay.classList.remove("hidden")
// }

      function displayModal (){ ///// function declaration
        modal.classList.remove("hidden") 
        overlay.classList.remove("hidden")
    }



const hideModal = function (){  ///// function expression
    modal.classList.add("hidden") 
    overlay.classList.add("hidden")
}

for (let i = 0 ; i < showModal.length ; i++){
    showModal[i].addEventListener("click",displayModal)
   }  


  closeButton.addEventListener("click",hideModal)

  overlay.addEventListener("click",hideModal)


  document.addEventListener("keydown",function(e){
     console.log(e.key)
     if(e.key==="Escape"){
        hideModal()
     }
  })

//   function hello (){
//     console.log("hello")
//   }
/// hello()



