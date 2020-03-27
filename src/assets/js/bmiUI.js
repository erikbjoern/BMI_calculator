const calculateBMI = () => {
    let weightInput = document.getElementById("weight")
    let heightInput = document.getElementById("height")
    let result = calculateMetricBMI(parseInt(weightInput.value), parseInt(heightInput.value))
    let message = getBMIClassification(parseFloat(result))
    let displayResultsElement = document.getElementById("results")
    displayResultsElement.innerHTML = `<div id='BMI'><h6>Body-Mass Index:</h6><br><h1>${result}</h1></div> <h3>Your BMI value is: ${result},<br> which is considered ${message}.</h3>`,
    displayResultsElement.classList.add('notification')
}