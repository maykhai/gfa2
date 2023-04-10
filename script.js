  function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const sum = num1 + num2;
    document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum + ".";
    }
  function subtract() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const difference = num1 - num2;
    document.getElementById("result").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + difference + ".";
    }
  function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const product = num1 * num2;
    document.getElementById("result").innerHTML = "The product of " + num1 + " and " + num2 + " is " + product + ".";
    }
  function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const quotient = num1 / num2;
    document.getElementById("result").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + quotient + ".";
    }
  function modulus() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const remainder = num1 % num2;
    document.getElementById("result").innerHTML = "The remainder of " + num1 + " divided by " + num2 + " is " + remainder + ".";
    }