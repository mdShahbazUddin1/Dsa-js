function partyPlanning(N, PamID, M, JimID) {
  let obj = {};

  for (let i = 0; i < PamID.length; i++) {
    obj[PamID[i]] = 1;
  }

  let flag = true;
  for (let j = 0; j < JimID.length; j++) {
    if (obj[JimID[j]] == undefined) {
      flag = false;
      break;
    }
  }

  if (flag == true) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
