let numbers = [4, 22, 56, 77];
numbers.sort();
console.log(numbers);

//by default all numbers are sorted as lexographic order 
//numbers are treated as strings

//by using sort strings can be sorted as numbers

//natural sorting
numbers.sort((a, b) => a - b);//ascending
console.log(numbers);   

//descending
numbers.sort((a,b) => b-a);//descending
console.log(numbers);


