// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) => {

    // 1
    // let strArr = str.split("");
    // let revStr = strArr.reverse().join('');
    // return revStr;


    // 2
    // let revStr = "";

    // for (let char of str) {
    //     revStr = char + revStr;
    // }
    // return revStr;


    // 3
    let strArr = str.split("");
    return strArr.reduce((rev, jar) => revStr = jar + rev, "");

}

// reverse("melvin    ");

module.exports = reverse;