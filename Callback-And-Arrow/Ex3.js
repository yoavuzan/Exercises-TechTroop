const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};
const logData = function (data){console.log(data)}
displayData(console.error, logData, "I like to party")