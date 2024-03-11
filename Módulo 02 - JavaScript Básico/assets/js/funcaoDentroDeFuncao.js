function addSquares(a, b) {
  const square = (x) => {
    return x * x;
  }

  let sqrA = square(a);
  let sqrB = square(b);
  return sqrA + sqrB;
}

console.log(addSquares(2, 3));