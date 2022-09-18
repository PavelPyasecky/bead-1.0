export const required = value => {
    if (value) {
        return undefined
    }
    return 'Field is required!';
}

export const maxLengthCreator = maxSize => {
    const maxLengthCustom = (value) => {
        if (value.length > maxSize) return `Max length is ${maxSize} symbols.`;
        return undefined;
    }
    return maxLengthCustom;
}