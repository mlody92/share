export class Arrays {
    static removeFirst<T>(array: Array<T>, value: T) {
        if (array.length === 0) {
            return;
        }
        const idx = array.indexOf(value);
        if (idx !== -1) {
            array.splice(idx, 1);
        }
    }
}


