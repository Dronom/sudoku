module.exports = function solveSudoku(matrix) {
  const arr = matrix;
  if (check(arr)) {
    return arr;
  }
}

function check(arr){
  for (let row = 0; row < 9 ; row++) {
    for (let column = 0; column < 9; column++) {     
      if (arr[row][column] === 0) {
        for (let number = 1; number < 10; number++) {
          if (checkRow(arr,row,number) && checkColumn(arr,column,number) && checkSquare(arr,row,column,number)){
            arr[row][column] = number;
            if (check(arr)) {
              return true;
            }
            arr[row][column] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function checkColumn(arr,column,number) {
  for (let counter = 0; counter < 9; counter++) {
    if (arr[counter][column] == number ) {
      return false;
    }
  }
  return true;
}

function checkRow(arr,row,number) {
  for (let counter = 0; counter < 9; counter++) {
    if (arr[row][counter] == number ) {
      return false;
    }
  }
  return true;
}

function checkSquare(arr,row,column,number) {
  row -= Math.floor(row % 3);
  column -= Math.floor(column % 3);
  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
      if (arr[row + i][column + j] == number) {
        return false;
      }
    }
  }
  return true;
}