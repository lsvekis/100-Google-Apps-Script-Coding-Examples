/**
 * Calculates the square of a number.
 *
 * @param {number} num The number to square.
 * @return {number} The squared result.
 */
function square(num) {
  // Multiply num by itself
  return num * num;
}

function testSquare() {
  var value = 4;
  Logger.log("Square of " + value + " is " + square(value));
}

