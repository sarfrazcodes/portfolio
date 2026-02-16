export const dsaBasics = {
  title: "DSA Basics — Arrays & Algorithms",
  description:
    "Understanding arrays, searching, sorting and core algorithm concepts.",
  sections: [
    {
      heading: "What is an Array?",
      content: [
        "An array is a collection of elements stored in contiguous memory locations.",
        "In Python, we use lists to represent arrays.",
        "Arrays allow fast access using index positions."
      ],
      code: `arr = [10, 20, 30, 40, 50]
print(arr[0])`
    },
    {
      heading: "Time Complexity Basics",
      content: [
        "Time complexity measures how fast an algorithm runs as input size grows.",
        "Big-O notation helps describe algorithm efficiency."
      ],
      code: `# O(n) example
for i in arr:
    print(i)`
    },
    {
      heading: "Linear Search",
      content: [
        "Linear search checks each element one by one.",
        "Works on unsorted arrays.",
        "Time Complexity: O(n)"
      ],
      code: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`
    },
    {
      heading: "Binary Search",
      content: [
        "Binary search works only on sorted arrays.",
        "Divides search space in half each iteration.",
        "Time Complexity: O(log n)"
      ],
      code: `def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1`
    },
    {
      heading: "Bubble Sort",
      content: [
        "Bubble sort repeatedly swaps adjacent elements.",
        "Simple but inefficient.",
        "Time Complexity: O(n²)"
      ],
      code: `def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr`
    }
  ]
};
