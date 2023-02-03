// Traverse a 2d array - 4 Ended
// Description

// Given a 2D Array, traverse the matrix from left to right, and from last row to first row.

// Refer the following image for better understanding.



// Screenshot (94).png


// Input
// First line contains two integers N and M, no of rows and columns of matrix.

// Next N lines contains M space separated integers which are elements of matrix.

// Constraints

// 1 <= N*M <= 10^6

// 1 <= A[i][j] <= 100


// Output
// Print all elements of matrix on single line, in the order as given in the problem statement.



// Sample Input 1 

// 4 3
// 1 8 9
// 2 7 10
// 3 6 11
// 4 5 12
// Sample Output 1

// 12 11 10 9 5 6 7 8 4 3 2 1

function traverse2dArray(N, M, matrix) {
  let bag = "";

  for (let i = M - 1; i >= 0; i--) {
    for (let j = N - 1; j >= 0; j--) {
      bag += matrix[j][i] + " ";
    }
  }
  console.log(bag);
}
