function convertTemperature() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    let outputValue;

    // Conversion logic
    if (inputUnit === 'celsius') {
        if (outputUnit === 'fahrenheit') {
            outputValue = (inputValue * 9/5) + 32;
        } else if (outputUnit === 'kelvin') {
            outputValue = inputValue + 273.15;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === 'fahrenheit') {
        if (outputUnit === 'celsius') {
            outputValue = (inputValue - 32) * 5/9;
        } else if (outputUnit === 'kelvin') {
            outputValue = (inputValue - 32) * 5/9 + 273.15;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === 'kelvin') {
        if (outputUnit === 'celsius') {
            outputValue = inputValue - 273.15;
        } else if (outputUnit === 'fahrenheit') {
            outputValue = (inputValue - 273.15) * 9/5 + 32;
        } else {
            outputValue = inputValue;
        }
    }
    if(inputUnit===outputUnit){
        document.getElementById('outputValue').textContent = `Result is same as the input temperature`;
    }
    else{
        document.getElementById('outputValue').textContent = `Result is ${outputValue.toFixed(2)} ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}`;
    }
}




    //document.getElementById('result').innerText = `${inputTemp}°C is equal to ${result.toFixed(2)}°F`;
