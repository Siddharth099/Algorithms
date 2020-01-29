//By considering the terms in the Fibonacci sequence that do not exceed the nth term, find the sum of the even-valued terms.

function fiboEvenSum(n) {
  let first=1, second=2, fibSum = 0, evenSum = 2;
  if(n <=1) return evenSum;
  for(let i=2; i<n; i++){
      fibSum = first + second;
      first = second;
      second = fibSum;
      if(fibSum % 2 === 0) evenSum += fibSum; 
  }
  return evenSum;
}

fiboEvenSum(10);
