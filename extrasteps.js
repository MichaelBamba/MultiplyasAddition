function ExtraEffort(number, Count) {
  let n = number;
  for (let c = 1; c < Count; c++) number + n;
  console.log(number);
  return number;
}
ExtraEffort(5, 5);
