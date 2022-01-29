const btns = document.querySelectorAll('.tab-btn');
const About = document.querySelector('.about');
const content = document.querySelectorAll('.content');
const History = document.querySelector("#history1");

About.addEventListener("click", function(e){
    btns.forEach(function(btn){
const id= e.target.dataset.id;
if (id){
e.target.classList.add("content");
}
const element= document.getElementById(id); 
element.add("History");

    });
  
});
