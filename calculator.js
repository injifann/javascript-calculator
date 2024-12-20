const screen=document.getElementById("screen");

const btnOne=document.getElementById("btn-1");
const btnZero=document.getElementById("btn-0");
const btnTwo=document.getElementById("btn-2");
const btnThree=document.getElementById("btn-3");
const btnFour=document.getElementById("btn-4");
const btnFive=document.getElementById("btn-5");
const btnSix=document.getElementById("btn-6");
const btnSeven=document.getElementById("btn-7");
const btnEight=document.getElementById("btn-8");
const btnNine=document.getElementById("btn-9");
const btnReset=document.getElementById("btn-reset");
const btnPlus=document.getElementById("btn-plus");
const btnMinus=document.getElementById("btn-minus");
const btnTimes=document.getElementById("bnt-times");
const btnDivision=document.getElementById("btn-divison");
const resultbtn=document.getElementById("btn-result");
const deleteBtn=document.getElementById("btn-del");
const dotBtn=document.getElementById("btn-dot");




function getValue(element)
{
  screen.value+=element.value;
}
btnZero.addEventListener('click',()=>getValue(btnZero));
btnOne.addEventListener('click',()=>getValue(btnOne));
btnTwo.addEventListener("click",()=>getValue(btnTwo));
btnThree.addEventListener("click",()=>getValue(btnThree));
btnFour.addEventListener("click",()=>getValue(btnFour));
btnFive.addEventListener("click",()=>getValue(btnFive));
btnSix.addEventListener("click",()=>getValue(btnSix));
btnSeven.addEventListener("click",()=>getValue(btnSeven));
btnEight.addEventListener("click",()=>getValue(btnEight));
btnNine.addEventListener("click",()=>getValue(btnNine));
btnPlus.addEventListener("click",()=>getValue(btnPlus));
btnMinus.addEventListener("click",()=>getValue(btnMinus));
btnDivision.addEventListener("click",()=>getValue(btnDivision));
btnTimes.addEventListener("click",()=>getValue(btnTimes));
dotBtn.addEventListener("click",()=>{
  const currentValue=screen.value;
  if(!currentValue.includes('.'))
  {
    screen.value+=".";
  }
});


btnReset.addEventListener("click",()=>{
  screen.value='';
})


function handleOperation(){
  let screenValue=screen.value;

  
  let operands=screenValue.split(/[\+\-\*\/]/);
  const operator=screenValue.match(/[\+\-\*\/]/);
  if(!operator)
  {
    return;
  }
   

  const firstOperand=parseFloat(operands[0]);
  const lastOperand=parseFloat(operands[1]);

  let result='';

   
  if(operator=='+')
  {
    result=firstOperand+lastOperand;
  }
  else if (operator=='-')
  {
    result=firstOperand-lastOperand;
  }
  else if(operator=='*')
  {
    result=firstOperand*lastOperand;
  }
  else if(operator=='/')
    {
     if (lastOperand=='0'){
      screen.value="divison by zero error";
      screen.style.color="red";
      return;

     }
     else{
      result=(firstOperand/lastOperand);
     }
   }
   

   screen.value+="="+result;
}

resultbtn.addEventListener("click",()=>handleOperation());

deleteBtn.addEventListener("click",()=>{

  const screenValue=screen.value;
  if(screenValue.length>=1){
    let newValue=screenValue.slice(0,-1);
    screen.value=newValue;
  }
  

})
