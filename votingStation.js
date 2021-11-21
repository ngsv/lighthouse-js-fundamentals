const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  let goodStations = [];
  for (let i = 0; i < stations.length; i++) {
    if (stations[i][1] >= 20 && ((stations[i][2] === "school") || (stations[i][2] === "community centre"))) {
      goodStations.push(stations[i][0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));

//Alternative Solution
// function chooseStations(stations) {
//   let goodStations = [];
//   for (const station of stations){
//     if(station[1] >= 20){
//       if(station[2] === 'community centre' || station[2] === 'school'){
//         goodStations.push(station[0])
//       }
//     }
//   }
//   return goodStations
// }
// console.log(chooseStations(stations));
