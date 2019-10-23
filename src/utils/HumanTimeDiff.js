export default function timeString(startTime, endTime) {
  endTime = endTime || new Date()
  let milliseconds = (new Date(endTime)).getTime() - (new Date(startTime)).getTime()

  function numberEnding () {
    return ' '
      // return (number > 1) ? '' : '';
  }

  var temp = Math.floor(milliseconds / 1000);
  var years = Math.floor(temp / 31536000);
  if (years) {
      return years + ' лет' + numberEnding(years);
  }

  //TODO: Months! Maybe weeks? 
  var days = Math.floor((temp %= 31536000) / 86400);
  if (days) {
      return days + ' дней' + numberEnding(days);
  }
  var hours = Math.floor((temp %= 86400) / 3600);
  if (hours) {
      return hours + ' час' + numberEnding(hours);
  }
  var minutes = Math.floor((temp %= 3600) / 60);
  if (minutes) {
      return minutes + ' мин' + numberEnding(minutes);
  }
  var seconds = temp % 60;
  if (seconds) {
      return seconds + ' сек' + numberEnding(seconds);
  }
  return 'менее секунды'; //'just now' //or other string you like;
}