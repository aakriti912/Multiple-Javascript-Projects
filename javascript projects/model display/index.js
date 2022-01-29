const Button= document.querySelector("#btn");
const Root= document.querySelector("#root");
const Remove= document.querySelector(".fa");
const Container= document.querySelector(".container");
const model = document.querySelector(".open-model");


Button.addEventListener("click", (e)=>{
if(e.target.classList.contains("open-model")){

    // model.innerHTML=`<h1>
    // open-model
    // </h1> 
    // <button>
    // <i class='fa fa-remove'></i>
    // </button>`;
model.style.display('block');
}

    
})