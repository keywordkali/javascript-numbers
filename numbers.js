
let nbrs = [
    106,    573,    204,    804,    482,
    457,    769,    889,    860,    399,
    599,    824,    346,    851,    450,
    590,    520,    321,    341,    619,
    505,    769,    532,    764,    101
];
function Clicked() {
let largest = 0;
let smallest = 1000;


for (let i = 0; i < nbrs.length; i++) {

  if (nbrs[i] > largest) {
    largest = nbrs[i];
  } else if (nbrs[i] < smallest) {
    smallest = nbrs[i];
  }
  
}
document.getElementById("LargestNumber").value=largest;
    document.getElementById("SmallestNumber").value=smallest;
    console.log(largest);
    console.log(smallest);

}