export const pythonBasics = {
  title: "Python Basics — Core Concepts",
  description: "Introduction to Python syntax, variables, loops and functions.",

  sections: [
    {
      heading: "Introduction to Python",
      content: [
        "Python is a high-level, interpreted programming language.",
        "It is widely used in AI, ML, web development and automation."
      ],
      code: `print("Hello, World!")`
    },
    {
      heading: "Variables and Data Types",
      content: [
        "Python is dynamically typed.",
        "Common types: int, float, str, bool."
      ],
      code: `age = 21
salary = 5500.75
name = "Sarfraz"
is_student = True`
    },
    {
      heading: "Conditional Statements",
      content: [
        "Used for decision making.",
        "Python uses indentation instead of braces."
      ],
      code: `number = 10

if number > 0:
    print("Positive")
else:
    print("Negative")`
    },
    {
      heading: "Loops",
      content: [
        "Loops execute code multiple times.",
        "Common loops: for and while."
      ],
      code: `for i in range(5):
    print(i)`
    },
    {
      heading: "Functions",
      content: [
        "Functions help organize reusable code.",
        "Defined using def keyword."
      ],
      code: `def add(a, b):
    return a + b

print(add(5, 3))`
    }
  ]
};
