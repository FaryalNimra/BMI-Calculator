// Function to validate number inputs (allow only numbers)
function validateNumberInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

// Function to calculate BMI
function calculateBMI() {
    // Get input values
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var age = parseFloat(document.getElementById('age').value);

    // Check if inputs are valid numbers
    if (isNaN(height) || isNaN(weight) || isNaN(age)) {
        alert('Please enter valid numeric values for height, weight, and age.');
        return;
    }

    // Calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));

    // Display BMI result
    document.getElementById('bmiResult').innerText = bmi.toFixed(2);

    // Determine and display BMI range
    var range = "";
    if (bmi < 18.5) {
        range = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        range = "Healthy";
    } else if (bmi >= 25 && bmi <= 29.9) {
        range = "Overweight";
    } else {
        range = "Obese";
    }

    document.getElementById('rangeResult').innerText = "You are in the " + range + " range.";
}

// Function to reset values to 0
function resetValues() {
    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";
    document.getElementById('age').value = "";
    document.getElementById('bmiResult').innerText = "0.0";
    document.getElementById('rangeResult').innerText = "Please enter your height and weight.";
}

// Event listener for the calculate button
document.getElementById('calculateBMI').addEventListener('click', calculateBMI);

// Event listener for the reset button
document.getElementById('resetButton').addEventListener('click', resetValues);
