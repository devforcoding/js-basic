// (function(a, b, c) {
//     console.log (a + b + c);
//     return a + b + c;
// })(1, 2, 3);

// ((a, b, c) => {
// //     console.log (a + b + c);
// //     return a + b + c;
// // })(1, 2, 3);

// (() => {
//    const capitalize = (s) => {
//        return s.toUpperCase();
//    };
//    console.log(capitalize('java script'));
// })();


// (() => {
//     const capitalize = (s) => s.toUpperCase();
//     console.log(capitalize('java script'));
// })();

// (() => { //function () {
//     const getFactorial = function (n) {
//         return (n > 1) ? n * getFactorial(n - 1) : n;
//     };
//     console.log(getFactorial(45));
// })();

// (() => { //function () {
//     const getFactorial = function getF(n) {
//         return (n > 1) ? n * getF(n - 1) : n;
//     };
//     console.log(getFactorial(45));
// })();


// (() => { //function () {
//     function getDate(d) {
//         return d;
// }
// console.log(getDate());
// })();

// (() => { //function () {
//     const makeCapitalize = (s) => s.toUpperCase(); {
//
//     }
// })();


// function power(base, exp){
//     var result = 1;
//     for(var i = 0; i < exp; i++)
//     {
//         result = result * base;
//     }
//     return(result);
// }
// console.log(power(2,5));

// function stringGen(len) {
//     var text = "";
//
//     var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
//
//     for (var i = 0; i < len; i++)
//         text += charset.charAt(Math.floor(Math.random() * charset.length));
//
//     return text;
// }
//
// console.log(stringGen(4));
// console.log(stringGen(4));
// console.log(stringGen(4));
// console.log(stringGen(4));
// console.log(stringGen(4));
// console.log(stringGen(4));
// console.log(stringGen(4));
// console.log(stringGen(4));