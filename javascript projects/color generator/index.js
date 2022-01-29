const colors=["red", "blue", "yellow", "black", "red"];
const btn = document.querySelector('.btn');
const color= document.querySelector('.color');

btn.addEventListener('click', function(){
let randomNumber=random();
 document.body.style.backgroundColor=colors[randomNumber];
 color.textContent=colors[randomNumber];



})
function random(){
return Math.floor( Math.random()*colors.length);

}