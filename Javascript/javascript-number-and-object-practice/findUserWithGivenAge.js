function findUserWithGivenAge(targetAge, arr) {
  var i = 0;
  var output = [];
  while (i < arr.length) {
    if (arr[i]["age"] > targetAge)
      output.push(arr[i]);
    i++;
  }
  return output;
}

/*
var userArr = [
  {
    name: "Fletcher",
    age: 20,
    isStatus: false
  },
  {
    name: "Iowa",
    age: 39,
    isStatus: true
  },
  {
    name: "Essex",
    age: 30,
    isStatus: true
  },
  {
    name: "Cleveland",
    age: 23,
    isStatus: false
  }
]

console.log(findUserWithGivenAge(25, userArr));
*/
