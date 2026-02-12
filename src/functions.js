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

export { capitalize, reverseString };
