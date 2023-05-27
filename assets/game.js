
// starting player conditions-----------


// The game will prompt the player to name their robot.
// The player's robot will be initialized with the following properties:

//     100 health points
//     10 attack points
//     10 money points

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


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

// fight function
var fight = function() {
        // Alert players that they are starting the round
        window.alert("Welcome to Robot Gladiators!");
      
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
      
        // if player choses to fight, fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
          // remove enemy's health by subtracting the amount set in the playerAttack variable
          enemyHealth = enemyHealth - playerAttack;
          console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
          );
      
          // check enemy's health
          if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
          } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
          }
      
          // remove players's health by subtracting the amount set in the enemyAttack variable
          playerHealth = playerHealth - enemyAttack;
          console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
          );
      
          // check player's health
          if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
          } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
          }
          // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
          }
          // if no (false), ask question again by running fight() again
          else {
            fight();
          }
          // if player did not chose 1 or 2 in prompt
        } else {
          window.alert("You need to pick a valid option. Try again!");
        }
      }; // end of fight function
      
      // run fight function to start game
      fight();
      