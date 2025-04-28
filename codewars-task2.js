//Базові задачі
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return arr = string.split(" ")
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript



//Поглиблені задачі
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
    return list.reduce((acc, num) => num < acc ? num : acc, list[0]);
}

var max = function (list) {
    return list.reduce((acc, num) => num > acc ? num : acc, list[0]);
}

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    if (toReturn === 'value') {
        return Math.min(...arr);
    } else if (toReturn === 'index') {
        return arr.indexOf(Math.min(...arr));
    }
}

//Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
    return i *= 2;
}

//Twice as old    https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2);
}

//Return n - th even number    https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
    return n * 2 - 2;
}

//What's the real floor     https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
    if (n <= 0) {
        return n;
    }
    if (n < 13 && n > 0) {
        return n - 1;
    }
    if (n >= 13) {
        return n - 2;
    }
}
function getRealFloor(n) {
    return n <= 0 ? n : (n < 13 && n > 0) ? (n - 1) : (n >= 13) ? (n - 2) : 0;
}

//Clock    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
    const hour = 3_600_000;
    const min = 60_000;
    const sec = 1_000;
    return h * hour + m * min + s * sec;
}

//Is n divisible by x and y    https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
    return Boolean(n % x == 0 && n % y == 0);
}
