export const cIOFunctionsNotes = {
  title: "C Programming — Input / Output Functions",
  description: "Detailed explanation of formatted and unformatted I/O functions in C.",

  sections: [
    {
      heading: "Introduction to I/O in C",
      content: [
        "Input/Output (I/O) allows programs to take data from the user and display results.",
        "C provides two types of I/O functions: Unformatted and Formatted.",
        "All standard I/O functions are declared in stdio.h."
      ],
    },

    {
      heading: "Unformatted I/O Functions",
      content: [
        "Unformatted I/O functions do not use format specifiers.",
        "They mainly work with characters and strings.",
        "They are simpler and operate at a lower level compared to formatted I/O."
      ],
    },

    {
      heading: "getchar() and putchar()",
      content: [
        "getchar() reads one character from standard input (stdin).",
        "It returns int to support EOF detection.",
        "putchar() prints a single character to standard output (stdout).",
        "getchar() is equivalent to getc(stdin).",
        "putchar() is equivalent to putc(character, stdout)."
      ],
      code: `#include <stdio.h>

int main() {
    char ch;
    printf("Enter a character: ");
    ch = getchar();
    printf("You entered: %c\\n", ch);
    return 0;
}`
    },

    {
      heading: "puts() and gets()",
      content: [
        "puts() prints a string and automatically adds a newline.",
        "gets() was used to read strings but was removed in C11.",
        "gets() caused buffer overflow because it did not check size.",
        "fgets() is the safer alternative."
      ],
      code: `#include <stdio.h>

int main() {
    char name[20];
    fgets(name, sizeof(name), stdin);
    puts(name);
    return 0;
}`
    },

    {
      heading: "getch() and getche() (Non-Standard)",
      content: [
        "Declared in conio.h (not part of standard C).",
        "getch() reads a character without displaying it.",
        "getche() reads and displays the character.",
        "These functions are unbuffered and do not require Enter."
      ],
    },

    {
      heading: "Formatted I/O Functions",
      content: [
        "Formatted I/O uses format specifiers like %d, %f, %c, %s.",
        "They provide control over how data is displayed or read.",
        "Declared in stdio.h."
      ],
    },

    {
      heading: "printf()",
      content: [
        "printf() prints formatted output.",
        "It supports format specifiers like %d (int), %f (float), %c (char), %s (string).",
        "It allows precision control like %.2f."
      ],
      code: `#include <stdio.h>

int main() {
    int age = 20;
    float marks = 88.5;

    printf("Age = %d\\n", age);
    printf("Marks = %.2f", marks);
    return 0;
}`
    },

    {
      heading: "scanf()",
      content: [
        "scanf() reads formatted input from the user.",
        "It requires the address operator (&) for variables except strings.",
        "It may leave newline characters in the input buffer."
      ],
      code: `#include <stdio.h>

int main() {
    int age;
    scanf("%d", &age);
    printf("Age: %d", age);
    return 0;
}`
    },

    {
      heading: "sprintf() and sscanf()",
      content: [
        "sprintf() writes formatted data into a string instead of printing.",
        "sscanf() reads formatted data from a string.",
        "Both are useful for string processing."
      ],
      code: `#include <stdio.h>

int main() {
    char buffer[50];
    int a, b;

    sprintf(buffer, "Sum: %d", 50);
    printf("%s\\n", buffer);

    char data[] = "10 20";
    sscanf(data, "%d %d", &a, &b);

    return 0;
}`
    },

    {
      heading: "Key Differences",
      content: [
        "Unformatted I/O does not use format specifiers.",
        "Formatted I/O provides better control over data formatting.",
        "Unformatted functions are simpler but limited.",
        "Formatted functions support multiple data types."
      ],
    },

    {
      heading: "Advanced Insights",
      content: [
        "getchar() returns int to properly detect EOF.",
        "gets() was removed due to security vulnerabilities.",
        "printf() has more overhead than putchar().",
        "All standard I/O works using streams: stdin, stdout, stderr."
      ],
    }
  ]
};