var motoGP = [
  { circuit: 'Losail', location: 'Qatar', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } },
  { circuit: 'Autodromo', location: 'Argentine', winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' } },
  { circuit: 'De Jerez', location: 'Spain', winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' } },
  { circuit: 'Mugello', location: 'Italy', winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } }
];

let result = {};

for (let event of motoGP) {
  let country = event.winner.country;
  let name = `${event.winner.firstName} ${event.winner.lastName}`;
  let winLocation = `${event.circuit}, ${event.location}`;

  if (!result[country]) {
    result[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }

  result[country].winningCircuits.push({ name, winLocation });
  result[country].totalWin++;
}

console.log(JSON.stringify(result, null, 2));