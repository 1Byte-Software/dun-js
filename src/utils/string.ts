// Format string by object
// Example: "Hello {friendName} I'm {myName}" with object {friendName: "Alice", myName: "Bob"} to "Hello Alice I'm Bob"
export function formatStringByObj(str: string, obj: { [key: string]: string | number }) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            str = str.replace(`{${key}}`, obj[key].toString());
        }
    }
    return str;
}

export const joinPath = (...paths: string[]) => {
    return paths.join('/');
};
