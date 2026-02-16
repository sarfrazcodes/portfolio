export const recursionBasics = {
  title: "Recursion Practice — Basic to Advanced",
  description:
    "Structured recursion problems from basic to advanced level including class-based implementations in TypeScript style logic.",

  sections: [
    {
      heading: "1) Sum of First N Natural Numbers (with Trace)",
      content: [
        "Base case: when n === 0, return 0.",
        "Recursive case: return n + sum_n(n-1).",
      ],
      code: `function sumN(n: number): number {
  if (n === 0) return 0;
  return n + sumN(n - 1);
}

function traceCalls(n: number): number {
  console.log("Entering:", n);

  if (n === 0) return 0;

  const result = traceCalls(n - 1);

  console.log("Returning from:", n);
  return result + n;
}

console.log("Sum =", traceCalls(5));`,
    },

    {
      heading: "2) Count Occurrences of a Digit",
      content: [
        "Use modulo (%) to extract last digit.",
        "Use Math.floor(num / 10) to reduce number.",
        "Handle negative numbers using Math.abs().",
      ],
      code: `function countDigit(num: number, d: number): number {
  num = Math.abs(num);

  if (num === 0) return 0;

  const lastDigit = num % 10;
  const count = lastDigit === d ? 1 : 0;

  return count + countDigit(Math.floor(num / 10), d);
}

console.log(countDigit(225522, 2));`,
    },

    {
      heading: "3) Print Array Elements Recursively",
      content: [
        "Base case: idx === arr.length.",
        "No loops allowed.",
      ],
      code: `function printArray(arr: number[], idx: number = 0): void {
  if (idx === arr.length) return;

  console.log(idx + ":", arr[idx]);
  printArray(arr, idx + 1);
}

printArray([10, 20, 30, 40]);`,
    },

    {
      heading: "4) Find Maximum Element Recursively",
      content: [
        "Keep track of running maximum.",
        "Move index forward until end of array.",
      ],
      code: `function findMax(arr: number[], idx: number, currentMax: number): number {
  if (idx === arr.length) return currentMax;

  currentMax = Math.max(currentMax, arr[idx]);
  return findMax(arr, idx + 1, currentMax);
}

function maxRecursive(arr: number[]): number {
  return findMax(arr, 0, arr[0]);
}

console.log(maxRecursive([3, 7, 2, 9, 5]));`,
    },

    {
      heading: "5) Reverse an Integer (No Strings)",
      content: [
        "Use helper function to accumulate reversed value.",
        "Reapply sign at the end.",
      ],
      code: `function reverseHelper(num: number, reversed: number = 0): number {
  if (num === 0) return reversed;

  return reverseHelper(
    Math.floor(num / 10),
    reversed * 10 + (num % 10)
  );
}

function reverseInt(num: number): number {
  const sign = num < 0 ? -1 : 1;
  num = Math.abs(num);

  return sign * reverseHelper(num);
}

console.log(reverseInt(12034));`,
    },

    {
      heading: "6) Count Vowels in String",
      content: [
        "Check character at index.",
        "Move recursively until end of string.",
      ],
      code: `function countVowels(str: string, i: number = 0): number {
  const vowels = "aeiouAEIOU";

  if (i === str.length) return 0;

  const count = vowels.includes(str[i]) ? 1 : 0;
  return count + countVowels(str, i + 1);
}

console.log(countVowels("Recursion Is Powerful"));`,
    },

    {
      heading: "7) Class: FastPower (Optimized Exponentiation)",
      content: [
        "Divide and conquer approach.",
        "If n is even → compute half power once.",
        "If n is odd → multiply by x.",
        "Supports negative powers.",
      ],
      code: `class FastPower {
  power(x: number, n: number): number {
    if (n === 0) return 1;

    if (n < 0) return 1 / this.power(x, -n);

    if (n % 2 === 0) {
      const half = this.power(x, n / 2);
      return half * half;
    }

    return x * this.power(x, n - 1);
  }
}

const fp = new FastPower();
console.log(fp.power(2, 10));
console.log(fp.power(2, -3));`,
    },
  ],
};
