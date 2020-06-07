const fs = require("fs");

// 同步方式（尽量避免）
fs.renameSync("a.txt", "b.txt");

// 异步方式（推荐）
fs.rename("a.txt", "b.txt", (err) => {
  console.log(err);
});
