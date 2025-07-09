const returnTime = function (time) {
  console.log("The current time is: " + time);
};
function getTime(cullback) {
  const time = new Date();
  cullback(time);
}
getTime(returnTime);
