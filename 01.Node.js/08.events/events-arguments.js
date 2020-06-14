const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("takeoutArrived", (args) =>
  console.log(`在${args.platform}上点的${args.food}已收到～`)
);

emitter.emit("takeoutArrived", { platform: "美团", food: "烤鱼" });
