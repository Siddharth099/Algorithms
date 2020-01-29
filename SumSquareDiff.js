//Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function sumSquareDifference(n) {
  let sum = 0, sum1 = 0;
  for(let i=1; i<=n;i++){
    sum += i;
  }
  for(let i=1; i<=n;i++){
    sum1 += i*i;
  }
  return (sum*sum)-sum1;
}

sumSquareDifference(100);
