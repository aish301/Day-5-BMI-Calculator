let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
let submitbutton = document.getElementById("submitbtn");
let output = document.getElementById("output");

submitbutton.addEventListener("click", function () {
    let weight = weightInput.value;
    let height = heightInput.value;

    let heightInMeter = height / 100;
    let bmi = weight / (heightInMeter * heightInMeter);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal";
    }
    else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }

    output.innerText = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
});
