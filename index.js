// Problem 1: Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Problem 1:", reverseString("hello")); 

// olleh
// ['h', 'e', 'l', 'l', 'o']

// Problem 2: Count Vowels in a String
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("Problem 2:", countVowels("programming")); 


// Problem 3: Check for Palindrome
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log("Problem 3:", isPalindrome("madam")); 
console.log("Problem 3:", isPalindrome("hello")); 


// Problem 4: Find the Maximum Number
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log("Problem 4:", findMax([5, 1, 9, 3])); // 9


// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  let unique = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}
console.log("Problem 5:", removeDuplicates([1, 2, 2, 3, 4, 4]));


// Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log("Problem 6:", sumArray([1, 2, 3, 4])); 


// Problem 7: Find Even Numbers in an Array
function findEvens(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log("Problem 7:", findEvens([1, 2, 3, 4, 5, 6])); 


// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  let words = str.split(" ");
  let capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalized.join(" ");
}
console.log("Problem 8:", capitalizeWords("hello world")); 


// Problem 9: Find the Factorial of a Number
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("Problem 9:", factorial(5)); 


// Problem 10: PingPong Challenge
function pingPong() {
  let result = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("PingPong");
    } else if (i % 3 === 0) {
      result.push("Ping");
    } else if (i % 5 === 0) {
      result.push("Pong");
    } else {
      result.push(i);
    }
  }
  return result.join(", ");
}
console.log("Problem 10:", pingPong());
