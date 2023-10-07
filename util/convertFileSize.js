export function returnFileSize(number) {
    if (number < 1024) {
        return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
        return `${(number / 1024).toFixed(1)} KB`;
    }
    else if (number >= 1048576 && number < 1000000000) {
        return `${(number / 1048576).toFixed(1)} MB`;
    } else if (number >= 1000000000) {
        return `${(number / 1000000000).toFixed(1)} GB`;
    }
}