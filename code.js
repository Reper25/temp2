let userInput = prompt("would you like to convert to c or f?")
let userTemp = prompt("enter the temperature?")
userInput = userInput.toLowerCase();
let result;
if (userInput == 'c') {
  result = (userTemp - 32) * 5 / 9
} else {
  result = (userTemp * 9 / 5) + 32
}
document.write(result)

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // TODO: Implement the conversion logic here
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    // TODO: Implement the conversion logic here
    let c = ((parseFloat(
        fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));
  }
  
  // Prompt the user for input
  let temperature = parseFloat(prompt("Enter the temperature:"));
  let conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)");
  
  if (conversionType.toLowerCase() === "celsius to fahrenheit") {
    // TODO: Call the celsiusToFahrenheit function and display the result
    document.getElementById("result").innerHTML = 
    celToFah(inputTemp) + "&#176; Celcius";
  } else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
    // TODO: Call the fahrenheitToCelsius function and display the result
    document.getElementById("result").innerHTML = 
    celToFah(inputTemp) + "&#176; Fahrenheit";
  } else {
    alert("Invalid conversion type.");
  }