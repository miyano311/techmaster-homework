function compareUserAge(a, b) {
  const ageA = a.age;
  const ageB = b.age;

  let comparison = 0;
  if (ageA > ageB) {
    comparison = 1;
  } else if (ageA < ageB) {
    comparison = -1;
  }
  return comparison;
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

console.log(userArr.sort(compareUserAge));
*/
