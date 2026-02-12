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

export { capitalize, reverseString, calculator };
