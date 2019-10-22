function bubbleSort(array, customSort=null) {
  let unsorted = array.length -1
  while (unsorted >= 1){
    for(let i = 0; i< unsorted; i++){
      let swapped = swap(array[i], array[i+1], customSort)
      array[i] = swapped[0]
      array[i+1] = swapped[1]
    }
    unsorted --
  }

  return array;
  /* your code here */

}

function swap (num1,num2, customSort= null){
  if (customSort){
    return customSort(num1,num2)
  }
  return (num1 <= num2)? [num1,num2] : [num2,num1]
}

function compareByAge (item1, item2){
  return (item1.age <= item2.age)? [item1,item2] : [item2,item1]
}
