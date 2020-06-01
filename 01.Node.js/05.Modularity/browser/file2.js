console.log(name); // 或使用window.name
console.log(window.sum(1, 2));

// 下面两句造成全局变量污染
var name = "gates";
var sum = "A sum function";

console.log(name);
console.log(window.sum(1, 2));
