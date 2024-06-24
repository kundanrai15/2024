$(document).ready(function() {
    const endNumber = 100; // Change this to the number you want

    let currentNumber = 0;
    const counterElement = $('#counter');

    function updateCounter() {
      counterElement.text(currentNumber);
      if (currentNumber < endNumber) {
        currentNumber++;
        setTimeout(updateCounter, 100); // Adjust the speed of counting (milliseconds)
      }
    }

    updateCounter();
  });