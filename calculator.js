
const screen=document.getElementById("screen");
const container=document.getElementById("bnt-container");


container.addEventListener("click",handleClick);

function handleClick(event)
{
  if(event.target.value=="=")
  {
    handleOperation()
  }
  else if(event.target.value=="del")
  {
    const screenValue=screen.value;
    if(screenValue.length>=1){
      let newValue=screenValue.slice(0,-1);
      screen.value=newValue;
    }
    else if(screenValue.length===0)
    {
      return
    }
  }
  else if (event.target.value=='Reset')
  {
    screen.value='';
  }
  else if(event.target.value=="dot-btn")
  {
    screen.value+=".";
  }
  else {
    screen.value+=event.target.value;;
  }
}

function handleOperation()
{
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