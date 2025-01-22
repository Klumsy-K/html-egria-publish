
// report

console.log("js is working");

//TABLES

//HIT LOCATION TABLES
//FRONT
const hlFront = ['hl_CT','hl_RA','hl_RA','hl_RL','hl_RT','hl_CT','hl_LT','hl_LL','hl_LA','hl_LA','hl_HD'];
//LEFT
const hlLeft = ['hl_LT','hl_LL','hl_LA','hl_LA','hl_LL','hl_LT','hl_CT','hl_RT','hl_RA','hl_RL','hl_HD'];
//RIGHT
const hlRight = ['hl_RT','hl_RL','hl_RA','hl_RA','hl_RL','hl_RT','hl_CT','hl_LT','hl_LA','hl_LL','hl_HD'];
// REAR
const hlRear = ['hl_CTR','hl_RA','hl_RA','hl_RL','hl_RTR','hl_CTR','hl_LTR','hl_LL','hl_LA','hl_LA','hl_HD'];



// random Int function
function randomInt(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
        throw new Error("Both arguments must be numbers.");
    }

    if (min > max) {
        throw new Error("The 'min' value must be less than or equal to the 'max' value.");
    }

    // Generate a random integer between min and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// For Loop function that iterates random Int with an increasing delay
async function runIterations(iterations, min, max, resultId) {
    if (typeof iterations !== "number" || iterations < 0) {
        throw new Error("The 'iterations' parameter must be a non-negative number.");
    }

    for (let i = 0; i < iterations; i++) {
        const result = randomInt(min, max);
        document.getElementById(resultId).innerHTML = result;
        console.log(`Iteration ${i + 1}: Random Integer = ${result}`);
        if (i > 0) {
        await sleep(25, i);
        }
//        if (i == (iterations - 1)){
//        return result;
//        }
    }
}

async function diceD6 (resultId){
    const iterations = randomInt(5,12);
//    return runIterations(iterations,1,6);
    runIterations(iterations,1,6,resultId);
}



function sleep(milliseconds, multiplier) {
const totalDelay = milliseconds * multiplier;
    return new Promise((resolve) => setTimeout(resolve, totalDelay));
}



function delay(milliseconds, multiplier) {
    if (typeof milliseconds !== "number" || typeof multiplier !== "number") {
        throw new Error("Both arguments must be numbers.");
    }

    if (milliseconds < 0 || multiplier < 0) {
        throw new Error("Both arguments must be non-negative numbers.");
    }

    // Calculate total delay
    const totalDelay = milliseconds * multiplier;

    // Return a promise that resolves after the calculated delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Delayed for ${totalDelay} milliseconds.`);
        }, totalDelay);
        // report timeout
        //console.log('Timeout', totalDelay);
    });
}



async function addDice (result1, result2, totalId){



await sleep (1500,1);

var firstDie = parseInt(document.getElementById(result1).innerHTML);
console.log(firstDie);
var secondDie = parseInt(document.getElementById(result2).innerHTML);
console.log(secondDie);

document.getElementById(totalId).innerHTML = parseInt(firstDie + secondDie);
if(firstDie + secondDie == 2){
document.getElementById("critFlag").innerHTML = "CRIT!!!";
console.log("crit");
}
}


 function changeCellColor(targetCell,color) {
            // Target the specific cell using its ID
            const cell = document.getElementById(targetCell);

            // Change the background color of the cell
            cell.style.backgroundColor = color;

            // Optionally change the text color
//            cell.style.color = "darkblue";
 }



// DETERMINE HIT LOCATION (accepts arc choice; rolls 2d6; compares to table; returns location id)
// needs hl tables by 2d6 result and hit arc.:

async function highlightHL (dieResultId){

// find the incoming fire arc

 const hitArc = document.querySelector('input[name="hitArcs"]:checked').value;
      console.log("Hit arc:", hitArc);

    var arcTable = hlFront;

if (hitArc == 'left'){
   var arcTable = hlLeft;
}
if (hitArc == 'right'){
    var arcTable = hlRight;
}
if (hitArc == 'rear'){
    var arcTable = hlFront;
}


// highlight the HL

await sleep (1550,1);
var dieResult = parseInt(document.getElementById(dieResultId).innerHTML);

const targetCell = arcTable[(dieResult)-2];
const cell = document.getElementById(targetCell);
cell.style.backgroundColor = 'salmon';
}

function clearCellColoring() {
  const table = document.getElementById("hlTable");

  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    for (let j = 0; j < row.cells.length; j++) {
      const cell = row.cells[j];
      cell.style.backgroundColor = ""; // Set background color to default
    }
  }
  document.getElementById("critFlag").innerHTML = "";
}



 // CLUSTER ROLLS BY WEAPON TYPE AND SIZE (takes: weapon type, size; rolls 2d6; looks up weapon size on table)
            // └ DETERMINE HIT LOCATIONS FOR GROUPINGS

 // CRIT ROLL ( 2d6; if sorting; returns number of crits)

 // CRIT LOCATION ROLL (takes number of crits, 1d6 + 1d6, returns two numbers for each crit)