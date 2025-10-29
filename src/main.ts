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

  // Get the increment button element from the document
  const increase = document.getElementById("increment");
  // Get the decrement button element from the document
  const decrease = document.getElementById("dec");
  // Get the reset button element from the document
  const reset = document.getElementById("reset");
  // Get the counter span element from the document
  const ctr = document.getElementById("counter");

  // Check if any element is missing, then exit the function
  if (!increase || !decrease || !reset || !ctr) return;

  // Add click event to the increment button
  increase.addEventListener("click", () => {
    // Increase the counter by 1
    counter++;

    updateCounter(ctr);
  });

  // Add click event to the decrement button
  decrease.addEventListener("click", () => {
    // Decrease the counter by 1
    counter--;

    updateCounter(ctr);

  });

  // Add click event to the reset button
  reset.addEventListener("click", () => {
    // Reset the counter to 0
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

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
