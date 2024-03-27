/*function reverseStatus(buttonClass) {
  const gamingButton = document.querySelector(`.${buttonClass}`);
  if (gamingButton.classList.contains("button-on")) {
    gamingButton.classList.remove("button-on");
  } else {
    turnOffPrevious();//using button-on class
    gamingButton.classList.add("button-on");
  }
}

function turnOffPrevious(){
  const onButton = document.querySelector('.button-on');
  if(onButton){
    onButton.classList.remove('button-on');
  }
}*/

function calculateTotal() {
  let cost = Number(document.querySelector(".js-cost-input").value); //value returns a string
  const message =  document.querySelector(".js-total-cost");
  if(cost < 0){
    message.classList.add('error_message'); 
    message.innerHTML = 'Error: cost cannot be less than $0';
    return;
  }
  if(message.classList.contains('error_message'))
    message.classList.remove('error_message');
  if (cost && cost < 40) cost += 10;

  if (cost) {
    message.innerHTML = `$${cost}`;
  }
}

function handleCostKeyDown(event) {
  if (event.key === "Enter") calculateTotal();
}