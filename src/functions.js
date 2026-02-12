function capitalize(string) {
    try {
        string = String(string)
        return ("" + string).at(0).toLocaleUpperCase() + ("" + string).substring(1).toLocaleLowerCase();
    } catch (error) {
        throw new Error("Invalid value type passed into function")
    }
}

export {capitalize};