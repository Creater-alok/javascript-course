let calculation = localStorage.getItem("calculation") || "";

displayCalculation();

function doCalculation(input) {
  if (input === "=") calculation = eval(calculation);
  else if (input === "Clear all") {
    calculation = "";
    console.log("Calculations cleared.");
  } else calculation += input;

  localStorage.setItem("calculation", calculation);
  displayCalculation();
}

function displayCalculation() {
  document.querySelector(".calculation-output").innerHTML = calculation;
}