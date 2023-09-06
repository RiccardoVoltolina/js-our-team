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
    
}