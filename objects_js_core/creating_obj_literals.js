console.log("Hello World");

const fitBillData = {
  totalSteps: 308744,
  totalMiles: 211.7,
  avgCaloriesBurn: 5755,
  workOutThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
};

const totalStep = fitBillData.totalSteps;
const totalMile = fitBillData["totalMiles"];
const noOfSleep = fitBillData.avgGoodSleep;

console.log(totalStep);
console.log("Total Miles Ran is " + totalMile);
console.log("Total hours of sleep is " + noOfSleep);

console.table(fitBillData);
