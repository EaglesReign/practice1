//Phil Hofer
//practice1.js

var arr = [1,2,3,4,5,6,7,8,9,10];
function printArray() {
  for (var i=0; i<10; i++) {
    if (i%2===0) {
      print(i);
    }
  }
}

var gap = 1;
function printArray2() {
  for (var i=0; i<10; i+=gap++) {
    print(arr[i]);
  }
}

printArray();
printArray2();
