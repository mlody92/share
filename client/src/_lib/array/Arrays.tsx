export class Arrays {
     static removeFirst<T> (array: Array<T>, value: T) {
        const idx = array.indexOf(value);
        if (idx !== -1) {
            array.splice(idx, 1);
        }
    }
}


