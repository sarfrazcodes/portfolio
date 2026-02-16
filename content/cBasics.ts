export const cBasics = {
  title: "C Basics — Fundamentals of C Programming",
  description: "Core syntax, variables, control structures and functions in C.",

  sections: [
    {
      heading: "Introduction to C",
      content: [
        "C is a powerful procedural programming language developed by Dennis Ritchie.",
        "It is widely used for system programming, embedded systems and operating systems."
      ],
      code: `#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`
    },
    {
      heading: "Variables and Data Types",
      content: [
        "Variables store data values.",
        "Common data types: int, float, char, double."
      ],
      code: `int age = 20;
float salary = 5000.50;
char grade = 'A';

printf("%d %f %c", age, salary, grade);`
    },
    {
      heading: "Conditional Statements",
      content: [
        "Used to make decisions in a program.",
        "Common keywords: if, else if, else."
      ],
      code: `int number = 10;

if (number > 0) {
    printf("Positive");
} else {
    printf("Negative");
}`
    },
    {
      heading: "Loops",
      content: [
        "Loops allow repeated execution of code.",
        "Common loops: for, while, do-while."
      ],
      code: `for(int i = 0; i < 5; i++) {
    printf("%d\\n", i);
}`
    },
    {
      heading: "Functions",
      content: [
        "Functions help in modular programming.",
        "They allow code reuse."
      ],
      code: `int add(int a, int b) {
    return a + b;
}`
    }
  ]
};
