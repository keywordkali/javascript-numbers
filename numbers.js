function loaded() {
let nbrs = [
    106,    573,    204,    804,    482,
    457,    769,    889,    860,    399,
    599,    824,    346,    851,    450,
    590,    520,    321,    341,    619,
    505,    769,    532,    764,    101
];
let largest = nbrs[0];
let smallest = nbrs[0];


for (let i = 1; i < nbrs.length; i++) {

  if (nbrs[i] > largest) {
    largest = nbrs[i];
  } else if (nbrs[i] < smallest) {
    smallest = nbrs[i];
  }
  console.log(largest);
  console.log(smallest);
}
document.getElementById("Largest Number").value=largest;
document.getElementById("Smallest Number").value=smallest;
}