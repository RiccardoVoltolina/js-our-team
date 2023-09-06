/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */


// MILESTONE 0

let divElement = document.querySelector('.stampa')

const team = [
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief',
        foto: './img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social media manager',
        foto: './img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic designer',
        foto: './img/barbara-ramos-graphic-designer.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: './img/scott-estrada-developer.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office manager',
        foto: './img/walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder ceo',
        foto: './img/wayne-barnett-founder-ceo.jpg',
    },
];
// MILESTONE 1

for (let i = 0; i < team.length; i++) {
    const membriTeam = team[i];
    console.log(membriTeam);
    const markup = `
    <div class="card" style="width: 18rem;">
    <img src="${membriTeam.foto}" alt="">
        <div class="card-body">
          <h5 class="card-title">${membriTeam.nome}</h5>
          <p class="card-text">${membriTeam.ruolo}</p>
        </div>
    </div>`
    console.log(markup);
    divElement.insertAdjacentHTML('beforeend' , markup)

}

let stampa2 = document.querySelector('.stampa_2')

const team2 = [
    
];
let azione = false
document.getElementById('generate').addEventListener('click', function () {
    team2.nome = document.getElementById('nomeCognome').value
    team2.ruolo = document.getElementById('ruolo').value;
    team2.foto = document.getElementById('foto').value;
    azione = true
    
    while (azione === true) {
        const markup2 = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${team2.nome}</h5>
              <p class="card-text">${team2.ruolo}</p>
            </div>
        </div>`
        divElement.insertAdjacentHTML('beforeend' , markup2)
        
    }


})






