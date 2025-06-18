 function convertToBoolean(arr) {
  return arr.map(elem =>  !!elem);
 }

console.log(convertToBoolean([500, 0, "Jimmy", "", []]));