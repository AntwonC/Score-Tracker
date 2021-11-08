const formContainer = document.querySelector(".form-container");
const addPlayerButton = document.querySelector(".add-button");
const tableContainer = document.querySelector(".table-container");
const headerContainer = document.querySelector(".headers-container");
const exportData = document.querySelector(".export-data"); 

function addToTable(playerName) {
   
    const trElement = document.createElement("tr"); 
    // NAME //
    const tdName = document.createElement("td"); 
    const tdContainer = document.createElement("td"); 
    tdContainer.classList.add("td-Container"); 
    // NAME //

    // POINTS //
    const divPointsContainer = document.createElement("div"); 
    divPointsContainer.classList.add("div-Points"); 

    const addOnePoint = document.createElement("button"); 
    addOnePoint.textContent = "+1"; 
    const subtractOnePoint = document.createElement("button"); 
    subtractOnePoint.textContent = "-1"; 
    
    const addTwoPoint = document.createElement("button"); 
    addTwoPoint.textContent = "+2"; 
    const subtractTwoPoint = document.createElement("button"); 
    subtractTwoPoint.textContent = "-2"; 
    
    const addThreePoint = document.createElement("button"); 
    addThreePoint.textContent = "+3"; 
    const subtractThreePoint = document.createElement("button"); 
    subtractThreePoint.textContent = "-3"; 
     // POINTS //
     // REBOUNDS //
    const divReboundContainer = document.createElement("div"); 
    divReboundContainer.classList.add("div-RB"); 
    const reboundContainer = document.createElement("td"); 
    reboundContainer.classList.add("rebound-Container");

    const addOneRebound = document.createElement("button"); 
    addOneRebound.textContent = "+1"; 
    const subtractOneRebound = document.createElement("button"); 
    subtractOneRebound.textContent = "-1"; 
     // REBOUNDS //
     // FIELD GOALS //
    const divFGContainer = document.createElement("div");
    divFGContainer.classList.add("div-FG");
    const fieldGoalContainer = document.createElement("td"); 
    fieldGoalContainer.classList.add("fieldGoal-Container");

    const madeFG = document.createElement("button"); 
    madeFG.textContent = "+1"; 
    const missedFG = document.createElement("button"); 
    missedFG.textContent = "-1"; 
    // FIELD GOALS //
    
    let pName = document.createElement("p");
    let tdPoints = document.createElement("p");
    let tdRebounds = document.createElement("p"); 
    let tdFieldGoals = document.createElement("p"); 

    if ( playerName.localeCompare("") === 0 ) {
        return 0; 
    } else {
        pName.textContent = playerName; 
        tdPoints.textContent = "0"; 
        tdRebounds.textContent = "0"; 
        tdFieldGoals.textContent = "0-0";
        // NAME //
        tdName.appendChild(pName);
        // NAME //

        // POINTS //
        divPointsContainer.appendChild(subtractThreePoint); 
        divPointsContainer.appendChild(subtractTwoPoint); 
        divPointsContainer.appendChild(subtractOnePoint);
        divPointsContainer.appendChild(tdPoints);  
        divPointsContainer.appendChild(addOnePoint); 
        divPointsContainer.appendChild(addTwoPoint); 
        divPointsContainer.appendChild(addThreePoint);
        tdContainer.appendChild(divPointsContainer); 
        // POINTS //
        // REBOUNDS //
        divReboundContainer.appendChild(subtractOneRebound);
        divReboundContainer.appendChild(tdRebounds); 
        divReboundContainer.appendChild(addOneRebound);
        reboundContainer.appendChild(divReboundContainer); 
        // REBOUNDS //
        // FIELD GOALS //
        divFGContainer.appendChild(madeFG); 
        divFGContainer.appendChild(tdFieldGoals); 
        divFGContainer.appendChild(missedFG);
        fieldGoalContainer.appendChild(divFGContainer);
        // FIELD GOALS //

       // tdContainer.appendChild(tdPoints); 
        trElement.appendChild(tdName);
        trElement.appendChild(tdContainer);  
        trElement.appendChild(reboundContainer); 
        trElement.appendChild(fieldGoalContainer);
        tableContainer.appendChild(trElement); 
        
        //
        addOnePoint.addEventListener("click", () => {
           let resValue = changeNumber(tdPoints.textContent, 1); 
           tdPoints.textContent = resValue;
        }); 

        subtractOnePoint.addEventListener("click", () => {
            let resValue = changeNumber(tdPoints.textContent, -1); 
            tdPoints.textContent = resValue;
         }); 

        addTwoPoint.addEventListener("click", () => {
            let resValue = changeNumber(tdPoints.textContent, 2); 
            tdPoints.textContent = resValue;
        }); 

        subtractTwoPoint.addEventListener("click", () => {
            let resValue = changeNumber(tdPoints.textContent, -2); 
            tdPoints.textContent = resValue;
        }); 

        addThreePoint.addEventListener("click", () => {
            let resValue = changeNumber(tdPoints.textContent, 3); 
            tdPoints.textContent = resValue;
        }); 

        subtractThreePoint.addEventListener("click", () => {
            let resValue = changeNumber(tdPoints.textContent, -3); 
            tdPoints.textContent = resValue;
        }); 

        addOneRebound.addEventListener("click", () => {
            let resValue = changeNumber(tdRebounds.textContent, 1); 
            tdRebounds.textContent = resValue;
         });

        subtractOneRebound.addEventListener("click", () => {
            let resValue = changeNumber(tdRebounds.textContent, -1); 
            tdRebounds.textContent = resValue;
        });

        // Field Goals 
        madeFG.addEventListener("click", () => {
            let resValue = updateFG(tdFieldGoals.textContent, true); 
            tdFieldGoals.textContent = resValue; 
        });

        missedFG.addEventListener("click", () => {
            let resValue = updateFG(tdFieldGoals.textContent, false); 
            tdFieldGoals.textContent = resValue; 
        });
        return 1; 
    }

    
} 

function changeNumber(number, value) {
    let num = +number; 
    num += value;
    return num.toString();
}

function updateFG(score, result) {
    let firstNumber = ""; 
    let secondNumber = ""; 
    let nextNumber = false; 

    for(let i = 0; i < score.length; i++) {
        if ( score.charAt(i) === '-' ) {
            nextNumber = true;
            continue;  
        }

        if ( nextNumber ) {
            secondNumber += score.charAt(i); 
        } else {
            firstNumber += score.charAt(i); 
        }
    }

    if ( result ) {    
        firstNumber = +firstNumber + 1;
        secondNumber = +secondNumber + 1;
        let finalString = firstNumber + "-" + secondNumber; 
        return finalString; 
    } else {
        secondNumber = +secondNumber + 1
        let finalString = firstNumber + "-" + secondNumber; 
        return finalString; 
    }

}

function exportingToFile(tableData) {
   
    var textFile = null,
    makeTextFile = function (text) {
        var data = new Blob([text], {type: 'text/plain'});
        
        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }
        
        textFile = window.URL.createObjectURL(data);
        
        // returns a URL you can use as a href
        return textFile;
    };
    
    let pData = tableData.getElementsByTagName('p'); 
    let data = "[Name] | [Points] | [Rebounds] | [Field Goal]\n\n";
    let count = 0; 

    // Empty table, don't allow downloadable link
    if ( pData.length === 0 || pData === undefined ) {
        return -1; 
    }

    for(let i = 0; i < pData.length; i++) {

        if ( count === 4 ) {
            data += "\n\n";
            count = 0; 
        }
        data += "[" + pData[i].textContent + "]" + "|";
        console.log(`pData: ${pData[i].textContent}`);
        count++; 
        
    }

    let link = document.getElementById("downloadLink"); 
    link.href = makeTextFile(data); 
    link.style.display = "block";

    setTimeout(() => {
        link.style.display = "none"; 
    }, 3000); 
    /*for( let i in tableData.rows ) {
        let row = tableData.rows[i]; 
        console.log(`row: ${row.textContent}`);
        for( let j in row.cells ) {
            let col = row.cells[j];
            //console.log(`col: ${col.textContent}`);
        }
    }  */
}

function createForm() {

    if ( formContainer.childElementCount > 1 ) {
        return;
    }

    const playerNameInput = document.createElement("input"); 
    playerNameInput.classList.add("user-Input");
    playerNameInput.type = "input"; 
    playerNameInput.placeholder = "Player Name";

    const submitButton = document.createElement("input");
    submitButton.classList.add("submit-Button");
    submitButton.type = "button"; 
    submitButton.value = "Add"; 

    formContainer.appendChild(playerNameInput); 
    formContainer.appendChild(submitButton);

    submitButton.addEventListener("click", () => {
        var res = addToTable(playerNameInput.value);

        if ( res === 1 ) {
            submitButton.remove(); 
            playerNameInput.remove(); 
        }

    }); 
    
}

addPlayerButton.addEventListener("click", createForm); 

exportData.addEventListener("click", () => {
    exportingToFile(tableContainer);
});
