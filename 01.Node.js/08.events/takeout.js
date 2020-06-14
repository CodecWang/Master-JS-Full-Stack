const { EventEmitter } = require("events");

// 定义Takeout类并继承自EventEmitter
class Takeout extends EventEmitter {
  arrived() {
    this.emit("arrived");
  }
}

const takeout = new Takeout();
takeout.on("arrived", () => console.log("外卖已收到～"));
takeout.arrived();
