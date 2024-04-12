function Calculator() {
    this.add = function(a, b) {
      return a + b;
    }
  
    this.subtract = function(a, b) {
      return a - b;
    }
  
    this.multiply = function(a, b) {
      return a * b;
    }
  
    this.divide = function(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return a / b;
    }
  }
  
  // Example usage:
  const calc = new Calculator();
  console.log(calc.add(5, 3)); // Output: 8
  console.log(calc.subtract(5, 3)); // Output: 2
  console.log(calc.multiply(5, 3)); // Output: 15
  console.log(calc.divide(6, 3)); // Output: 2
  