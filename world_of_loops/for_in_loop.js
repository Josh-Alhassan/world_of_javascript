const jeopardyWinnings = {
  regularPlay: 2334332,
  watsonChallege: 3000000,
  tournamentOfChamp: 3234322,
  battleOfTheDecades: 100000,
};

for (let prop in jeopardyWinnings) {
  console.log(prop);
  console.log(jeopardyWinnings[prop]);
}
