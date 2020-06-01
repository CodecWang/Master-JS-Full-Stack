console.log("hello");
global.console.log("hello");

var name = "wang";
function sum(n1, n2) {
  return n1 + n2;
}

console.log(global.name);
console.log(global.sum);

console.log(__filename);
console.log(global.__filename);
