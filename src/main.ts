// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>"CMPM 121 Project"</h1>
    <p>Counter: <span id="counter">0</span></p>
    <button id="increment">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get the changes in the button element from the document
  const increase = document.getElementById("increment");
  const decrease = document.getElementById("dec");
  const reset = document.getElementById("reset");
  const ctr = document.getElementById("counter");

  // Check if any element is missing, then exit the function
  if (!increase || !decrease || !reset || !ctr) return;

  // Add click event to the increment button
  increase.addEventListener("click", () => {
    counter++;

    updateCounter(ctr);
  });

  // Add click event to the decrement button
  decrease.addEventListener("click", () => {
    counter--;

    updateCounter(ctr);
  });

  // Add click event to the reset button
  reset.addEventListener("click", () => {
    counter = 0;

    updateCounter(ctr);
  });
}

function updateCounter(count: HTMLElement) {
  // Update the counter display
  count.innerHTML = `${counter}`;
  // Update the document title
  document.title = "Clicked " + counter;
  // Change the background color based on even/odd count
  document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
}

// Start the counter app
function start() {
  // Call setup to initialize the UI
  setup();
}

start();
