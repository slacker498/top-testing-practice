function capitalize(string) {
  try {
    if (
      typeof string == "number" ||
      string instanceof Number ||
      string instanceof String ||
      typeof string == "string"
    )
      return (
        ("" + string).at(0).toLocaleUpperCase() +
        ("" + string).substring(1).toLocaleLowerCase()
      );
    else throw Error();
  } catch (error) {
    return null;
  }
}

function reverseString(string) {
  try {
    if (
      typeof string == "number" ||
      string instanceof Number ||
      string instanceof String ||
      typeof string == "string"
    )   return ("" + string).split("").reverse().join("");
    else throw Error();
  } catch (error) {
    return null;
  }
}

const calculator = (() => {
    const errorMessage = "Invalid params entered! Only number and bigint values allowed";
    const add = (num1, num2) => {
        if ((!num1 && num1 != 0) && (!num2 && num2 != 0) ) return 0;
        if (typeof num1 !== "number" &&
            typeof num2 !== "number" &&
            typeof num1 !== "bigint" &&
            typeof num2 !== "bigint"             
        ) return errorMessage;
        return (num1 || 0) + (num2 || 0);
    }

    const subtract = (num1, num2) => {
        if ((!num1 && num1 != 0) && (!num2 && num2 != 0) ) return 0;
        if (typeof num1 !== "number" &&
            typeof num2 !== "number" &&
            typeof num1 !== "bigint" &&
            typeof num2 !== "bigint"             
        ) return errorMessage;
        return (num1 || 0) - (num2 || 0);
    }

    const multiply = (num1, num2) => {
        if ((!num1 && num1 != 0) && (!num2 && num2 != 0) ) return 0;
        if (typeof num1 !== "number" &&
            typeof num2 !== "number" &&
            typeof num1 !== "bigint" &&
            typeof num2 !== "bigint"             
        ) return errorMessage;
        return (num1 || 0) * (num2 || 1);
    }

    const divide = (num1, num2) => {
        if ((!num1 && num1 != 0) && (!num2 && num2 != 0) ) return 0;
        if (typeof num1 !== "number" &&
            typeof num2 !== "number" &&
            typeof num1 !== "bigint" &&
            typeof num2 !== "bigint"           
        ) return errorMessage;
        if (num2 == 0) return "Zero Division Error"
        return (num1 || 0) / (num2 || 1);
    }

    return {add, subtract, multiply, divide};
})();


function analyzeArray(array) {
    if (!(array instanceof Array)) return "Param is not an array!";
    for (let item of array) {
        if (typeof item !== "number" && typeof item !== "bigint" ) return "Given array contains a non-number!";
    }
    return (
        {
            average: array.reduce((total, curr) => total + curr , 0) / (array.length || Number(1)),
            min: array.reduce((maxVal, curr) => Math.min(maxVal, curr), array[0]) || Number(0),
            max: array.reduce((minVal, curr) => Math.max(minVal, curr), array[0]) || Number(0),
            length: array.length || Number(0),
        }
    )
}

function caesarCipher(string, shift) {
    if (typeof string !== "string" || typeof shift !== "number") return "ValueError: First param must be a string and shift must be number";

    // Modify Number prototype to respond properly with negative shift
    Number.prototype.mod = function(b) {
        return ((this % b) + b) % b;
    }

    const isUpper = (code) => code >= 65 && code < 65 + 26;
    const isAlpha = (code) => (code >= 65 && code < 65 + 26) || (code >= 97 && code < 97 + 26);

    let result = "";

    for (let i = 0; i < string.length; i++) {
        const letter = string.charCodeAt(i);
        const shiftCode = isUpper(letter)? 65 : 97;

        result += String.fromCharCode( (isAlpha(letter))? shiftCode + (letter - shiftCode + shift).mod(26) : letter);
    }

    return result;
}


export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
