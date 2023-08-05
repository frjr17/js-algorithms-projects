function convertToRoman(num) {
    let numLength = num.toString().length
    let newNum = num.toString()
    let romanNumArr = []
    // Creating set number following DRY principle, to don't repeat the same pattern
    function setNumber(arr, num, first, second, third) {
        let newNum = num;
        let number = num[0]
        let romanNumArr = [...arr];

        // If number is 0, it passes out as nothing.
        if (number !== '0') {
            if (number >= '1' && number < '4') {
                romanNumArr.push(first.repeat(newNum[0]))
            }
            if (number === '4') {
                romanNumArr.push(first + second)
            }
            if (number >= '5' && number < '9') {
                romanNumArr.push(second + first.repeat(number - 5))
            }
            if (number === '9') {
                romanNumArr.push(first + third)
            }
        }

        // Avoiding errors by setting hardocoded params if number is only one left.
        if (newNum.length === 1) {
            newNum = '';
            numLength = 1
        } else {
            newNum = newNum.split("").slice(1).join("")
            numLength = newNum.length
        }

        return [romanNumArr, newNum, numLength]
    }


    switch (numLength) {
        case 4:
            romanNumArr.push('M'.repeat(newNum[0]))
            newNum = newNum.split("").slice(1).join("")
            numLength = newNum.length
            console.log(romanNumArr, newNum, numLength)
        case 3:
            [romanNumArr, newNum, numLength] = setNumber(romanNumArr, newNum, 'C', 'D', 'M')
        case 2:
            [romanNumArr, newNum, numLength] = setNumber(romanNumArr, newNum, 'X', 'L', 'C')
        default:
            [romanNumArr, newNum, numLength] = setNumber(romanNumArr, newNum, 'I', 'V', 'X')
    }



    return romanNumArr.join("")

}

