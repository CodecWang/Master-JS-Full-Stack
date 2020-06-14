const EventEmitter = require("events");

// 创建一个EventEmitter类的实例
const emitter = new EventEmitter();

emitter.on("takeoutArrived", function () {
  console.log("外卖已收到～");
});

emitter.emit("takeoutArrived");
