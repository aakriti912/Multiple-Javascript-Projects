const text=
[
    `1.Paragraphs  defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).<br>`,
    `2.journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.<br>`,
    `3.Before you can begin to determincide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea <br>`,
    `4.A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.<br>`,
    `5.Lets walk through a 5-step process for building a paragraph that illustrates a point in an argument. For each step there is an explanation and example. Our example paragraph will be about human misconceptions of piranhas.<br>`,
    `6.Controlling idea and topic sentence — Despite the fact that piranhas are relatively harmless, many people continue to believe the pervasive myth that piranhas are dangerous to humans.<br>`,
    `7.Elaboration — This impression of piranhas is exacerbated by their mischaracterization in popular media.<br>`,
    `8.Example — For example, the promotional poster for the 1978 horror film Piranha features an oversized piranha poised to bite the leg of an unsuspecting woman.<br>`,

];

const form = document.querySelector('.lorem-form');
const amt = document.getElementById('amount');
// const btn = document.getElementById('btn');
const result =document.querySelector('.lorem-text');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const random = Math.floor(Math.random()*text.length);
    
const value =parseInt(amt.value);
console.log(isNaN(value));

if(isNaN(value) || value < 0 || value > 9 ){

result.innerHTML= `
<div class="container" style="padding-top:20px; width:80%; background-color:"#EFDAD7";>
<p class="result">${text[random]}</p>
</div>`

}else{
    let tempText = text.slice(0, value);
  result.innerHTML=tempText;
}

})
