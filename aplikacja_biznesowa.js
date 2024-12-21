let score = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];

let cost = [
  0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22, 0.31,
  0.25, 0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.2,
  0.25, 0.3, 0.25, 0.24, 0.25, 0.25, 0.27, 0.25, 0.26, 0.29,
];

printAndGetHughScore(score, cost);

function printAndGetHughScore(score, cost) {
  for (let i = 0; i < score.length; i++) {
    console.log(`Płyn do baniek nr ${i} wynik: ${score[i]}`);
  }
  console.log(`Liczba testów: ${score.length}`);
  let highScore = score[0];
  for (let i = 0; i < score.length; i++) {
    if (score[i] > highScore) {
      highScore = score[i];
    }
  }
  const bestSolutions = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  console.log(...bestSolutions);
  let licznik = 0;
  for (let i = 0; i < score.length; i++) {
    if (score[i] == highScore) {
      licznik++;
    }
  }
  console.log(`najwiksza liczba byla ${licznik} razy`);

  const costOfBottle = [];
  for (let i = 0; i < score.length; i++) {
    costOfOneBottle = Math.floor(score[i] * cost[i]);
    costOfBottle.push(costOfOneBottle);
  }
  console.log(`Tablica kosztow = ${costOfBottle}`);

  let lowesCost = costOfBottle[0];

  for (let i = 0; i < costOfBottle.length; i++) {
    if (costOfBottle[i] < lowesCost) {
      lowesCost = costOfBottle[i];
    }
  }
  let indexOfLowestCost = [];
  for (let i = 0; i < costOfBottle.length; i++) {
    if (costOfBottle[i] == lowesCost) {
      indexOfLowestCost.push(i);
    }
  }
  console.log(
    `Najmneijszy koszt to ${lowesCost} and is the ${indexOfLowestCost} index`
  );

  //Sprawdzanie kosztow i porownanie ich z njawiksza i
  // najmmniejsza i najwieksa waroscia

  let wynik1 = score[indexOfLowestCost] * lowesCost;
  let wynik2 = score[bestSolutions[0]] * costOfBottle[bestSolutions[0]];
  let wynik3 = score[bestSolutions[1]] * costOfBottle[bestSolutions[1]];

  console.log(`++++++++++++++++++`);
  console.log(`Wynik dla najmniejszego kostu = $${wynik1}`);
  console.log(`Wynik dla idexu 11 dla najlepszego kostu = $${wynik2}`);
  console.log(`Wynik dla idexu 18 dla najlepszego kostu = $${wynik3}`);

  console.log(costOfBottle[bestSolutions[0]], score[bestSolutions[0]]);
  console.log(score[indexOfLowestCost], lowesCost);
}
