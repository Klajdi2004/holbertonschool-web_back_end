export default function taskBlock(trueOrFalse) {
  let task = false; // Changed 'const' to 'let' to allow reassignment
  let task2 = true;  // Changed 'const' to 'let' to allow reassignment

  if (trueOrFalse) {
    task = true;   // Removed 'const' to update the outer 'task' variable
    task2 = false; // Removed 'const' to update the outer 'task2' variable
  }

  return [task, task2];
}