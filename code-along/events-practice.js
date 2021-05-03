// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Roll the dice, and keep a running log of roll history by player

// RECIPE (algorithm) – do not modify the HTML!

// Store a reference to the roll button in memory

// Listen for the clicking of the roll button, when clicked:

  // - Ignore the roll button's default behavior

  // - Store a random integer in memory, representing the roll of the first die
  
  // - Store a random integer in memory, representing the roll of the second die

  // - Store the total of the two random numbers, representing the total roll

  // - Replace the first die image using the first random value (hint: setAttribute)

  // - Replace the second die image using the second random value (hint: setAttribute)

  // - Store a reference to the player name input element

  // - Grab the value of the player name element and store the player's name in memory
  
  // - Make sure the player's name is filled out; if it is:

    // - Form a sentence in memory, containing the player's name and the total that was rolled

    // - Store a reference to the "result" un-ordered list element

    // - Insert the sentence to the "result" un-ordered list as a list item (li)