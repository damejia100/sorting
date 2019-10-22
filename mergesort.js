function split(wholeArray) {

    let arrLength = wholeArray.length/2;
      firstHalf = wholeArray.slice(0, arrLength)
      secondHalf = wholeArray.slice(arrLength, wholeArray.length +1)

  return [firstHalf, secondHalf];
}

function merge([arr1, arr2]) {

  let merged = []

  for (let i=0; i<arr1.length; i++) {
    let currentI = arr1[i];

    for (let j=0; j<arr2.length; j++) {
      debugger;
      let currentJ = arr2[j]

      if (currentI > currentJ) {
        merged.push(currentJ)
        arr2.splice(0,1)
        j--
      }
      else if (currentI < currentJ) {
        merged.push(currentI)
        arr1.splice(0,1)
        i--
      }
      else if (currentI === currentJ) {
        merged.push(currentJ);
        merged.push(currentI);
        arr2.splice(0,1)
        arr1.splice(0,1)
        j--
        i--
        // arr2.shift(currentJ)
        // arr1.shift(currentI)
      }

    }

  }
  return merged
  // [ [ 2, 3 ], [ 1,4,5] ]

}

// function sort(anArr) {
//   let sorted = []

//   for (let i=0; i<anArr.length; i++) {

//     anArr[i] <= anArr[i+1] ? [anArr[i], anArr[i+1] : [anArr[i+1], anArr[i]]

//   }
// }


// [ 2, 3, 6 ],
// [ 1,4,5] ]
