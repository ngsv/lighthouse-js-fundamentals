const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 15,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 11,
    plumpness: 3
  }
]

const metric = 'redness';


function judgeVegetable(veggies, characteristic) {

  let highestRank = veggies[0][characteristic];
  let highestSubmitter = veggies[0].submitter;

  for (let i = 1; i < veggies.length; i++) {
    if (veggies[i][characteristic] > highestRank) {
      highestRank = veggies[i][characteristic];
      highestSubmitter = veggies[i].submitter;
    }
  }

  return highestSubmitter;
}


console.log(judgeVegetable(vegetables, metric));
