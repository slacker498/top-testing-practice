function capitalize(string) {
    return ("" + string).at(0).toLocaleUpperCase() + ("" + string).substring(1).toLocaleLowerCase();
}

export {capitalize};