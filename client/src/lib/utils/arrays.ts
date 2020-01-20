export const removeFirst = <T>(array: Array<T>, value: T) => {
    if (array === undefined) {
        return;
    }
    const idx = array.indexOf(value);
    if (idx !== -1) {
        array.splice(idx, 1);
    }
};



