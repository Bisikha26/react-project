export const toTwoDigit = (num) => {
    return num > 9 ? num : ( '0' + num );
    // return num > 9 ? num : `0${num}`
}