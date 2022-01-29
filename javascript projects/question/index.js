// const questions= document.querySelectorAll(".question");

// questions.forEach(function(question){
//     // console.log(question)
// const btn = question.querySelectorAll(".add");
// // console.log(btn)
// btn.addEventListener('click', function(){
// questions.forEach(function(item){
// if(item !== question){
//     item.classList.remove('show-text');
// }

// });

//     ques.classList.toggle('show-text');





// });

// });


const Minus= document.querySelectorAll(".minus");
const btns = document.querySelectorAll(".add");

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){
     
    const question=e.target.parentElement.parentElement;

    question.classList.toggle("show-text");
    


})


})

Minus.forEach(function(mns){
mns.addEventListener("click", function(e){
    const ques=e.target.parentElement.parentElement;
    ques.classList.remove("show-text");

});
});




    // Minus.addEventListener("click",function(e){
    //     const answer=e.target.parentElement.parentElement;
    //     answer.classList.add('minus')
       

    // })

  

