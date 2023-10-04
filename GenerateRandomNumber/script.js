const number=document.querySelector(".number");
const generateBtn=document.querySelector(".generate");



generateBtn.addEventListener('click',()=>{
  const randomNumber=Math.floor(Math.random()*100);
  number.innerHTML=randomNumber;
})



 