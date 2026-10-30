const readline = require("readline");

const SIZE = 20;
const slots = new Array(SIZE).fill(0); // 0 = empty, 1 = occupied

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Wraps rl.question in a Promise so we can use await
function ask(prompt) {
  return new Promise((resolve) => rl.question(prompt, resolve));
}

// Keep asking until the user types a whole number
async function readInt(prompt) {
  while (true) {
    const answer = (await ask(prompt)).trim();
    if (/^-?\d+$/.test(answer)) {
      return parseInt(answer, 10);
    }
    console.log("Please enter a number.");
  }
}

function isValidSlot(slot) {
  return slot >= 1 && slot <= SIZE;
}

// Park in the first free slot, scanning left to right
function parkFirstFree() {
  for (let i = 0; i < SIZE; i++) {
    if (slots[i] === 0) {
      slots[i] = 1;
      console.log(`Car parked in slot ${i + 1}.`);
      return;
    }
  }
  console.log("Parking lot is full.");
}

// Park in a specific slot if it is empty
function parkAtSlot(slot) {
  if (!isValidSlot(slot)) {
    console.log(`Invalid slot. Choose 1-${SIZE}.`);
    return;
  }
  const index = slot - 1;
  if (slots[index] === 1) {
    console.log(`Slot ${slot} is already occupied.`);
  } else {
    slots[index] = 1;
    console.log(`Car parked in slot ${slot}.`);
  }
}

// Free up a slot if a car is in it
function leaveSlot(slot) {
  if (!isValidSlot(slot)) {
    console.log(`Invalid slot. Choose 1-${SIZE}.`);
    return;
  }
  const index = slot - 1;
  if (slots[index] === 0) {
    console.log(`Slot ${slot} is already empty.`);
  } else {
    slots[index] = 0;
    console.log(`Car left slot ${slot}.`);
  }
}

// Show the visual row, plus available and filled slot numbers
function displayStatus() {
  const visual = slots.map((s) => `[${s}]`).join("");
  const free = [];
  const filled = [];

  for (let i = 0; i < SIZE; i++) {
    if (slots[i] === 0) free.push(i + 1);
    else filled.push(i + 1);
  }

  console.log("\n--- Parking Status ---");
  console.log(visual);
  console.log(`Available (${free.length}): ${free.join(" ") || "none"}`);
  console.log(`Filled    (${filled.length}): ${filled.join(" ") || "none"}`);
}

function printMenu() {
  console.log("\n1. Park in first free slot");
  console.log("2. Park in a chosen slot");
  console.log("3. Leave a slot");
  console.log("4. Show status");
  console.log("5. Exit");
}

async function main() {
  displayStatus();
  let choice = 0;

  while (choice !== 5) {
    printMenu();
    choice = await readInt("Choose an option: ");

    switch (choice) {
      case 1:
        parkFirstFree();
        displayStatus();
        break;
      case 2:
        parkAtSlot(await readInt("Enter slot number (1-20): "));
        displayStatus();
        break;
      case 3:
        leaveSlot(await readInt("Enter slot number (1-20): "));
        displayStatus();
        break;
      case 4:
        displayStatus();
        break;
      case 5:
        console.log("Goodbye!");
        break;
      default:
        console.log("Invalid option. Pick 1-5.");
    }
  }

  rl.close();
}

main();
