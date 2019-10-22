describe('Split Array function', function() {
  it('is able to split an array into two halves when even', function() {
    expect (split([2,3,5,3,1,3])).toEqual([ [ 2, 3, 5 ], [ 3, 1, 3 ] ])
  });
  it('is able to split an array into two halves when odd', function() {
    expect (split([2,3,5,3,1])).toEqual([ [ 2, 3 ], [ 5, 3, 1] ])
  });
  it('is able to split an array of strings into two halves when odd', function() {
    expect (split(['hi', 'hello', 'hey'])).toEqual([ ['hi'], ['hello', 'hey'] ])
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([ [ 2, 3, 9 ], [ 1,4,5] ])).toEqual([1,2,3,4,5, 9])
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([ [ 2, 3, 6 ], [ 1,4,5] ])).toEqual([1,2,3,4,5,6])
  });
});
