const formContainer = document.querySelector(".form-container");
const addPlayerButton = document.querySelector(".add-button");
const tableContainer = document.querySelector(".table-container");

function addToTable(playerName) {
    console.log(playerName);
    const trElement = document.createElement("tr"); 
    const tdName = document.createElement("td"); 
    const tdContainer = document.createElement("td"); 
    tdContainer.classList.add("td-Container"); 

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

    
    let tdPoints = document.createElement("td");

    if ( playerName.localeCompare("") === 0 ) {
        return 0; 
    } else {
        tdName.textContent = playerName; 
        tdPoints.textContent = "0"; 
        tdContainer.appendChild(subtractThreePoint); 
        tdContainer.appendChild(subtractTwoPoint); 
        tdContainer.appendChild(subtractOnePoint);
        tdContainer.appendChild(tdPoints);  
        tdContainer.appendChild(addOnePoint); 
        tdContainer.appendChild(addTwoPoint); 
        tdContainer.appendChild(addThreePoint);

        
       // tdContainer.appendChild(tdPoints); 
        trElement.appendChild(tdName);
        trElement.appendChild(tdContainer);  
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
