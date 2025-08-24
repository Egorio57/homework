// 1

function log_name(name){
    return `Hello "${name}"`
}

console.log(log_name("egor"))

// 2

const array_numbers = [1, 2, 3, 43, 1, 11]

function enumeration(array){
    for(let i = 0; i < array_numbers.length; i++){
        if(array_numbers[i] >= 10){
            console.log(array_numbers[i])
        }
    }
}

enumeration(array_numbers)

// 3

function calculator(operand1, operand2, sign){
    if(sign === "minus"){
        return (operand1 - operand2)
    } 
    else if(sign === "plus"){
        return (operand1 + operand2)
    }
    else if(sign === "multiplication"){
        return (operand1 * operand2)
    }
    else if(sign === "division"){
        return (operand1 / operand2)
    }
}

console.log(calculator(2, 3, "minus"))