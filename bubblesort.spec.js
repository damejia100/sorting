describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles single items', function () {
    expect(bubbleSort(["hi"])).toEqual(["hi"])
    expect(bubbleSort([1])).toEqual([1])

  });
  it('handles multiple items', function () {
    expect(bubbleSort(["hi","hello"])).toEqual(["hello","hi"])
    expect(bubbleSort([1,88,20])).toEqual([1,20,88])
    expect(bubbleSort([1901,88,20, 5, 92, 760])).toEqual([5,20,88, 92,760, 1901])

  });
  it("handles objects with custom sorts", function () {
    expect(bubbleSort([{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }], compareByAge)).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }])
  })

});
