var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // This alerts players the round is starting.
    window.alert("Welcome to Roobt Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");
    console.log(promptFight);
    // if player chooses to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack var
        enemyHealth = enemyHealth - playerAttack;
        console.log(
         playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
    );
    // this is to check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
    }

    //remove player's health by subtracting the amount set in the enemyAttack var
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    //this is to check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health");
    }
    //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
        }
        else {
            fight();
        }
    }   else {
        window.alert("You need to choose a valid option. Try again!");
    }
}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
// fight ();

