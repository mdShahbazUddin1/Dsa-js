function worldTestChampion(IndPoints, AusPoints, IndMatches, AusMatches) {
  if (IndPoints > AusPoints) {
    console.log("India");
  }
  if (AusPoints > IndPoints) {
    console.log("Australia");
  }
  if (IndPoints == AusPoints && IndMatches < AusMatches) {
    console.log("India");
  }
  if (IndPoints == AusPoints && AusMatches < IndMatches) {
    console.log("Australia");
  }
  if (IndPoints == AusPoints && AusMatches == IndMatches) {
    console.log("Play another game!");
  }
}
