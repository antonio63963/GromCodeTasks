 const calc = (num) => {
     let result = num;

     const calculator = {
         add(number) {
             result += number;
             return this;
         },
         subtract(number) {
             result -= number;
             return this;
         },
         mult(number) {
             result *= number;
             return this;
         },
         div(number) {
             result /= number;
             return this;
         },
         result() {
             return result;
         }
     };
     return calculator;
 };


 console.log(calc(5).add(20).mult(10).result());




