const scores = [
  { name: 'Felix Ouma', score: 100 },
  { name: 'Richard Leakey', score: 50 },
  { name: 'Isaiah Thomas', score: 40 },
  { name: 'Joel Cenas', score: 25 },
  { name: 'Charles Brandsam', score: 100 },
  { name: 'Kennedy Stam', score: 50 },
  { name: 'Lambert Kizito', score: 40 },
  { name: 'Alice Wonderland', score: 25 },
];

const board = scores.reduce((prev, current) => {
  prev += `<li>${current.name} ${current.score}</li>`;
  return prev;
}, '');

export default board;