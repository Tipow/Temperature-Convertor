function convertTemperature() {
    // Getting the temperature input
    const tempInput = document.getElementById('tempInput').value;

    // Getting the conversion type (C to F or F to C)
    const conversionType = document.getElementById('conversionType').value;

    //Getting the result contrainer
    const resultSpace = document.getElementById('result');

    // Checking if the input is empty
    if (tempInput === "") {
        resultSpace.textContent = "Please enter a temperature*";
        resultSpace.classList.add("text-red-500", "font-bold");
    } else if (conversionType === "selected") {
        resultSpace.textContent = "Please choose a conversion type*";
        resultSpace.classList.add("text-red-500", "font-bold");
    }

    // Converting the temperature based on the selected option
    if (conversionType === "CtoF") {
        var result = (tempInput * 9 / 5) + 32;
        resultSpace.textContent = "Result: " + tempInput + "℃ = " + result.toFixed(2) + "℉";
        resultSpace.classList.remove("text-red-500", "font-bold");
    } else if (conversionType === "FtoC") {
        var result = (tempInput - 32) * 5 / 9;
        resultSpace.textContent = "Result: " + tempInput + "℉ = " + result.toFixed(2) + "℃";
    }

}