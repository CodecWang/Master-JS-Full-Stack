const remote = "http://api.logger.io";

module.exports = function log(message) {
  console.log(`logged on ${remote}, message: ${message}`);
};

// 导出多个接口
// module.exports = {
//   log,
//   logUrl: remote, // 把remote重命名
// };
