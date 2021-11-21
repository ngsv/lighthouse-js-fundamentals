const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(moves) {
  let coordinates = [0, 0];
  for (let move of moves) {
    if (move === "north") {
      coordinates[1] += 1;
    } else if (move === "south") {
      coordinates[1] -= 1;
    } else if (move === "west") {
      coordinates[0] -= 1;
    } else if (move === "east") {
      coordinates[0] += 1;
    }
  }
  return coordinates;
}

console.log(finalPosition(moves));



//Alternative Solution
// const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
//
// const finalPosition = function(moves) {
//   // Your code in here ...
//   let vertMove = 0;
//   let horMove = 0;
//   let finalPos = [];
//   for (const move of moves) {
//     if (move === 'north') {
//       vertMove = vertMove + 1;
//     } else if (move === 'south') {
//       vertMove = vertMove - 1;
//     } else if (move === 'east') {
//       horMove = horMove + 1;
//     } else if (move === 'west') {
//       horMove = horMove - 1;
//     }
//   }
//   finalPos.push(horMove);
//   finalPos.push(vertMove);
//   return (finalPos);
// };
//
// console.log(finalPosition(moves));
