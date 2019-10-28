const peelMyString = function (stringToPeel) {
    if (!stringToPeel || stringToPeel.length <= 2) {
        throw new Error("Invalid conditions");
    }
    else {
        return stringToPeel.substring(1,stringToPeel.length - 2);
    }
}

console.log(peelMyString(`Oh no, I've lost a character!`));
console.log(peelMyString(`Oh`));