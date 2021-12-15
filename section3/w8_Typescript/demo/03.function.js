"use strict";
/*
    函数类型
    * 声明式
    * 赋值式
*/
exports.__esModule = true;
exports.total = exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
var res1 = add(1, 2);
var minus = function (a, b) {
    return a - b;
};
// 函数参数
// 1. 函数的实参与形参类型和数量必须一致
// add(10,'20') // 报错
// add(10,20,30) // 报错
// 2. 可选参数 与 参数默认值
// 默认值与可选参数是一个意思，所以不能同时使用可选参数与默认值
function getData(url, page, size) {
    if (page === void 0) { page = 1; }
}
getData('/list', 2, 5);
getData('/list', 2);
getData('/list');
// 3. 剩余参数
function total(a) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.reduce(function (prev, item) { return prev + item; }, a);
}
exports.total = total;
total(10, 20);
total(10, 20, 30);
total(10, 20, 30, 31, 32, 33, 36, 98);
function createArray(item, len) {
    return Array(len).fill(item);
}
createArray(10, 3);
createArray('hello', 3);
