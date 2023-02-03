function ticTacToe(mat) {
  let winner = "Tie";

  if (mat[0][0] == mat[1][1] && mat[0][0] == mat[2][2]) {
    winner = mat[0][0];
  } else if (mat[0][2] == mat[1][1] && mat[0][2] == mat[2][0]) {
    winner = mat[1][1];
  } else {
    for (let i = 0; i < mat.length; i++) {
      if (mat[i][0] == mat[i][1] && mat[i][0] == mat[i][2]) {
        winner = mat[i][0];
        break;
      }
      if (mat[0][i] == mat[1][i] && mat[1][i] == mat[2][i]) {
        winner = mat[0][i];
        break;
      }
    }
  }
  console.log(winner);
}
