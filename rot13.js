function rot13(rot13String) {
    const string = rot13String;

    // Getting ROT13 data
    const _input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split("")
    const _output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split("")

    // Creating rot13 data and populating based on input output variables.
    let rot13Seq = {}
    let rot13SeqInv = {}

    _input.forEach((e, i) => {
        rot13Seq[e] = _output[i]
    })

    _output.forEach((e, i) => {
        rot13SeqInv[e] = _input[i]
    })

    // Spliting string if the character is a letter.
    const replacedString = string.split("").map(e => {
        if (e.match(/\w/)) {
            return rot13SeqInv[e]
        } else {
            return e
        }
    }).join("")

    return replacedString
}