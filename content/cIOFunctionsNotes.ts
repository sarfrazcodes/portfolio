export const cIOFunctionsNotes = {
  title: "C Programming - Input / Output Functions",
  sections: [
    {
      heading: "1. Overview of I/O in C",
      content: `
Input/Output (I/O) in C allows programs to:
- Take input from the user
- Display output to the screen

C provides two types of I/O:
1. Unformatted I/O
2. Formatted I/O
      `,
    },

    {
      heading: "2. Unformatted I/O Functions",
      content: `
Header Files:
- #include <stdio.h>
- #include <conio.h> (Non-standard)

Concept:
- No format specifiers
- Mostly character or string based
- Simpler and low-level operations
      `,
      subsections: [
        {
          title: "getchar()",
          description: `
Reads one character from standard input.
Buffered input (requires Enter).
Returns int to support EOF.
Equivalent to: getc(stdin)
          `,
          example: `
#include <stdio.h>

int main() {
    char ch;
    printf("Enter a character: ");
    ch = getchar();
    printf("You entered: %c", ch);
    return 0;
}
          `,
        },
        {
          title: "putchar()",
          description: `
Prints a single character to standard output.
Equivalent to: putc(ch, stdout)
Faster than printf for single characters.
          `,
          example: `
#include <stdio.h>

int main() {
    putchar('H');
    putchar('i');
    return 0;
}
          `,
        },
        {
          title: "puts()",
          description: `
Prints a string and automatically adds a newline.
          `,
          example: `
#include <stdio.h>

int main() {
    puts("Hello World");
    return 0;
}
          `,
        },
        {
          title: "gets() (Removed in C11)",
          description: `
Reads a string until newline.
Does not check buffer size.
Causes buffer overflow.
Use fgets() instead.
          `,
        },
        {
          title: "getch() and getche() (Non-standard)",
          description: `
Declared in <conio.h>.
getch() - Reads character without displaying it.
getche() - Reads and displays character.
Unbuffered input.
          `,
        },
      ],
    },

    {
      heading: "3. Formatted I/O Functions",
      content: `
Header File:
- #include <stdio.h>

Concept:
- Uses format specifiers
- Allows control over input/output format
- Supports multiple data types
      `,
      subsections: [
        {
          title: "printf()",
          description: `
Prints formatted output using format specifiers.

Common specifiers:
%d - int
%f - float
%lf - double
%c - char
%s - string
          `,
          example: `
#include <stdio.h>

int main() {
    int age = 20;
    float marks = 88.5;
    printf("Age = %d\\n", age);
    printf("Marks = %.2f", marks);
    return 0;
}
          `,
        },
        {
          title: "scanf()",
          description: `
Reads formatted input.
Requires address operator (&) except for strings.
Leaves newline in buffer.
          `,
          example: `
#include <stdio.h>

int main() {
    int age;
    scanf("%d", &age);
    printf("Age: %d", age);
    return 0;
}
          `,
        },
        {
          title: "sprintf()",
          description: `
Writes formatted output into a string instead of printing.
          `,
          example: `
#include <stdio.h>

int main() {
    char buffer[50];
    sprintf(buffer, "Score: %d", 90);
    printf("%s", buffer);
    return 0;
}
          `,
        },
        {
          title: "sscanf()",
          description: `
Reads formatted data from a string.
          `,
          example: `
#include <stdio.h>

int main() {
    char data[] = "10 20";
    int a, b;
    sscanf(data, "%d %d", &a, &b);
    return 0;
}
          `,
        },
      ],
    },

    {
      heading: "4. Key Differences",
      content: `
Unformatted I/O:
- No format specifiers
- Limited data type handling
- Simpler and low-level

Formatted I/O:
- Uses format specifiers
- Supports multiple data types
- More control over structure and precision
      `,
    },

    {
      heading: "5. Advanced Insights",
      content: `
- getchar() returns int for EOF handling
- gets() was removed due to security vulnerabilities
- printf() has more overhead than putchar()
- scanf() may leave newline characters in input buffer
- All standard I/O operates using streams: stdin, stdout, stderr
      `,
    },
  ],
};