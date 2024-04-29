// utils.js
/* 
* 首字母转大写
*/
export function handleFirstUpperCase(str) {
    return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}