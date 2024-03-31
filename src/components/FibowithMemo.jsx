import React, { useState, useMemo } from 'react';

function FibowithMemo({ n }) {
  const [fibonacci, setFibonacci] = useState([]);

  // this function will memorize the calculation of Fibonacci numbers
  const calculateFibonacci = useMemo(() => {
    const fib = (num) => {
      if (num <= 1) return 1;
      return fib(num - 1) + fib(num - 2);
    };

    const fibonacciArray = Array.from({ length: n }, (_, index) => fib(index));
    return fibonacciArray;
  }, [n]);

  return (
    <div>
      <h2>Fibonacci Series up to {n}:</h2>
      <ul>
        {calculateFibonacci.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default FibowithMemo