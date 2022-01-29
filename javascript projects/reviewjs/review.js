const review=

[
    {
id:1,
name: "prakriti",
job:"frontend",
img:"https://source.unsplash.com/random/200x200?sig=3",
text:"Lorem Ipsum Generator. Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate! Generated Lorem Ipsum. Copy."


},
{
    id:2,
    name: "p2akriti",
    job:"frontemd",
    img:"https://source.unsplash.com/random/200x200?sig=2",
    text:"Lorem Ipsum Generator. Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate! Generated Lorem Ipsum. Copy."
    
    
    },
    {
        id:3,
        name: "rakriti",
        job:"rontend",
        img:"https://source.unsplash.com/random/200x200?sig=1",
        text:"Lorem Ipsum Generator. Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate! Generated Lorem Ipsum. Copy."
        
        
        }

]

const Name= document.querySelector(".name");
const lass= document.querySelector(".proffession");
const img= document.querySelector(".img");
const desc= document.querySelector(".description");


const Next= document.querySelector("#next");
const Prev= document.querySelector("#prev");
const Button= document.querySelector(".btn");


let currentreview=0;
window.addEventListener('DOMContentLoaded', ()=>{

   showPerson(currentreview);

});
function showPerson(){
    const item = review[currentreview];
 img.src= item.img;
 Name.innerHTML = item.name;
 lass.innerHTML=item.job;
 desc.innerHTML=item.text;
  
}


Next.addEventListener("click", ()=>{

currentreview++;
if(currentreview>review.length-1){
currentreview=0;
}
showPerson(currentreview);



});
Prev.addEventListener("click", function(){
    currentreview--;
    if(currentreview>review.length-1){
    currentreview=0;
    
    }
    showPerson(currentreview);
   
});