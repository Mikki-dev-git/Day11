var temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];

function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  // only change code below this line
  for (var i = 0; i < arr.length; i++) {
    var sum = 0;
    var average = 0;
    for (var g = 0; g < arr[i].length; g++) {
      sum += arr[i][g];
      // console.log(arr[i][g] + "");
    }
    average = sum / arr[i].length;
    averageDayTemp.push(average);
    // console.log9sum/arr[i].length);
  }
  // Only change code above this line
  return averageDayTemp;
}
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;
