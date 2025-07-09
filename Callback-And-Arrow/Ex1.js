const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};

const pushPull = function (callbuck) {
  push();
  callbuck();
};

pushPull(pull);
