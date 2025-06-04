 function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        // The for statement above and console.log below shows how to loop through every element in an array//
        sum = sum + arr[i];
              console.log(arr[i]);
    }
    return sum;
    }

console.log(arrSum([ 2, 2, 2]));
