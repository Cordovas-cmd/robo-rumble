
// starting player conditions-----------


// The game will prompt the player to name their robot.
// The player's robot will be initialized with the following properties:

//     100 health points
//     10 attack points
//     10 money points

var playerHealth = 100;
var playerAttack = 10;



// Opponent conditions---------------

// The player's opponent will be initialized with the following properties:

//     50 health points
//     12 attack points
var enemyName = "Clamps";
var enemyHealth = 50;
var enemyAttack = 12;

// Start/rules--------------------------------

// The game will display "Welcome to Robot Gladiators!"
// The game will prompt the player to either fight the round or skip it.
// If the player chooses to skip:

//     A penalty of 10 money points will be deducted from the player's robot.
//     The game will end.


// Fight option ----------------
// If the player chooses to fight:

//     The player's robot will attack Roborto, and the player-robot's attack points will be deducted from Roborto's health points.
//     The game will display Roborto's remaining health points.
//     Roborto will attack the player's robot, and Roberto's attack points will be deducted from the player's robot's health points.
//     The game will display the player-robot's remaining health points.

var playerName = window.prompt("What is your robot's name?");

function fight() {

        window.alert("The fight has begun!");

        
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

      
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;


  // Log a resulting message to the console so we know that it worked
  console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

  }
fight();