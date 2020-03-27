const calculateMetricBMI = (weight, height) => {
    let result
    result = (weight / Math.pow((height / 100), 2)).toFixed(2)
    return result
}

const getBMIClassification = (value) => {
    if (value<18.5) {
    return "underweight"
    } else if (value < 25) {
    return "healthy weight"
    } else if (value < 30) { 
    return "overweight"
    } else if (value < 35) {
    return "obesity class 1"
    } else if (value < 40) {
    return "obesity class 2"
    } else {
    return "extreme obesity class 3"
    } 
}

