function palindrome(str) {
    // Removing all non-alphanmeric characters and underscores, and setting the string to lowerCase
    const newString = str.replaceAll(/\W+|_/g, '').toLowerCase()
    // Determining the center 
    const center = parseInt(newString.length / 2)

    // Slicing the string in two parts according to center
    let firstStr = newString.slice(0, center)
    let secondStr = newString.slice(center, newString.length)

    // If the string has an odd length, then we have to remove the center letter.
    if (newString.length % 2 !== 0) {
        firstStr = newString.slice(0, center)
        secondStr = newString.slice(center + 1, str.length)
    }

    // Getting first string part backwards
    const firstStrBack = firstStr.split('').reverse().join("")

    // Checking if the string is palindrome by matching the first part (normally or backwards) to the second part.
    const isPalindrome = secondStr.match(new RegExp(firstStr + '|' + firstStrBack, 'g'))

    if (isPalindrome) {
        return true
    } else {
        return false
    }
}