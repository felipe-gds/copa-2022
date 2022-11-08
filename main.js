function addGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong> ${hour} </strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>
   `
}

function addCard(date, day, games) {

    return `
        <div class="card">
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = 
    addCard("24/11", "quinta", 
     addGame("brazil", "16:00", "serbia")) + 
    addCard("28/11", "segunda", 
     addGame("brazil", "13:00", "switzerland") + 
     addGame("portugal", "16:00", "uruguay")) + 
    addCard("02/12", "sexta", 
     addGame("brazil", "16:00", "cameroon"));
