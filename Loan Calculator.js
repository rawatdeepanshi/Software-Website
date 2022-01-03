var slider1 = document.getElementById("amount");
var slider2 = document.getElementById("interest");
var slider3 = document.getElementById("year");
var output1 = document.getElementById("demo1");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");

// @ts-ignore
output1.innerHTML = slider1.value;
// @ts-ignore
output2.innerHTML = slider2.value;
// @ts-ignore
output3.innerHTML = slider3.value;

slider1.oninput = function() {
  // @ts-ignore
  output1.innerHTML = this.value;
  // @ts-ignore
  var out1=output1;
}
slider2.oninput = function() {
  // @ts-ignore
  output2.innerHTML = this.value;
  // @ts-ignore
  var out2=output2;
}
slider3.oninput = function() {
  // @ts-ignore
  output3.innerHTML = this.value;
  // @ts-ignore
  var out3=output3;
}
document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {  

  // @ts-ignore
  const UIamount = slider1.value;
  // @ts-ignore
  const UIinterest = slider2.value;
  // @ts-ignore
  const UIyears = slider3.value;

  const principal = parseFloat(UIamount);
  const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears) * 12;

  //Compute monthly Payment

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  //Compute Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //Compute Total Payment

  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  //Show results

  document.getElementById("monthlyPayment").innerHTML = "₹ " + monthlyPayment;

  document.getElementById("totalInterest").innerHTML = "₹ " + totalInterest;

  document.getElementById("totalPayment").innerHTML = "₹ " + totalPayment;
    e.preventDefault();
}