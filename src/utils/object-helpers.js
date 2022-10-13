
export const updateObjectInArray = (items, itemPropName, itemPropValue, objNewProps) => {
    return items.map(item => {
        if (item[itemPropName] === itemPropValue) {
            return {...item, ...objNewProps}
        }
        return item;
    })
}
