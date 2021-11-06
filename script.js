const formContainer = document.querySelector(".form-container");
const addPlayerButton = document.querySelector(".add-button");
const tableContainer = document.querySelector(".table-container");
const headerContainer = document.querySelector(".headers-container");

function addToTable(playerName) {
   
    const trElement = document.createElement("tr"); 
    const tdName = document.createElement("td"); 
    const tdContainer = document.createElement("td"); 
    tdContainer.classList.add("td-Container"); 

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
    const fieldGoalContainer = document.createElement("td"); 
    fieldGoalContainer.classList.add("fieldGoal-Container");

    const madeFG = document.createElement("button"); 
    madeFG.textContent = "+1"; 
    const missedFG = document.createElement("button"); 
    missedFG.textContent = "-1"; 
    // FIELD GOALS //
    
    let tdPoints = document.createElement("div");
    let tdRebounds = document.createElement("div"); 
    let tdFieldGoals = document.createElement("div"); 

    if ( playerName.localeCompare("") === 0 ) {
        return 0; 
    } else {
        tdName.textContent = playerName; 
        tdPoints.textContent = "0"; 
        tdRebounds.textContent = "0"; 
        tdFieldGoals.textContent = "0-0";

        
        divPointsContainer.appendChild(subtractThreePoint); 
        divPointsContainer.appendChild(subtractTwoPoint); 
        divPointsContainer.appendChild(subtractOnePoint);
        divPointsContainer.appendChild(tdPoints);  
        divPointsContainer.appendChild(addOnePoint); 
        divPointsContainer.appendChild(addTwoPoint); 
        divPointsContainer.appendChild(addThreePoint);
        tdContainer.appendChild(divPointsContainer); 
        
        divReboundContainer.appendChild(subtractOneRebound);
        divReboundContainer.appendChild(tdRebounds); 
        divReboundContainer.appendChild(addOneRebound);
        reboundContainer.appendChild(divReboundContainer); 
        
        fieldGoalContainer.appendChild(madeFG); 
        fieldGoalContainer.appendChild(tdFieldGoals); 
        fieldGoalContainer.appendChild(missedFG);
        
       // tdContainer.appendChild(tdPoints); 
        trElement.appendChild(tdName);
        trElement.appendChild(tdContainer);  
        trElement.appendChild(reboundContainer); 
        trElement.appendChild(fieldGoalContainer);
        tableContainer.appendChild(trElement); 
        
        return 1; 
    }

    
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
