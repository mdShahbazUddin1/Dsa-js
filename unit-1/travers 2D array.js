// Image
// For example, for the above matrix, the required output would be as shown below.

// 4 3 2 1 5 6 7 8 12 11 10 9


// Input
// First line contains two integers N and M, no of rows and columns of matrix.

// Next N lines contains M space separated integers which are elements of matrix.

// Constraints

// 1 <= N*M <= 10^6

// 1 <= A[i][j] <= 100


// Output

function traverse2dArray(N, M, matrix) {
  //write code here
  let bag = "";
  for (let i = 0; i < M; i++) {
    for (let j = N - 1; j >= 0; j--) {
      bag += matrix[j][i] + " ";
    }
  }
  console.log(bag);
}
