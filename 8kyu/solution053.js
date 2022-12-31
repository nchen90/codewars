//Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// My Solution
function combat(health, damage) {
    if(health - damage <= 0){
      return 0
    }else {
      return health - damage
    }
}

// Refactor
const combat = (health, damage) => health - damage <= 0 ? 0 : health - damage