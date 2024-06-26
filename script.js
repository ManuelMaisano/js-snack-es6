//SNACK 1

const Table = [
 'Brad Pitt',
 'Johnny Depp', 
 'Lady Gaga', 
 'Cristiano Ronaldo', 
 'Georgina Rodriguez', 
 'Chiara Ferragni',  
 'George Clooney', 
 'Amal Clooney', 
 'Fedez', 
 'Amadeus', 
 'Fiorello']

console.log(Table);

Table.forEach((element, posto, array) => {
    let placeholder = {
        tablename : 'Vip Table',
        guestName : element,
        place : posto,
    };
    let invitation = [];
    invitation.push(placeholder)
    console.log(invitation);
});

//SNACK 2

const students = [
   
    {
        Name : 'Marco della Rovere',
        id : 213,
        Grade : 78
    },
    {
        Name : 'Paola Cortellessa',
        id : 110,
        Grade : 96
    },
    {
        Name :'Andrea Mantegna',
        id : 145,
        Grade : 48
    },
    {
        Name :'Gaia Borromini',
        id : 196,
        Grade : 68
    },
    {
        Name :'Luigi Grimaldello',
        id : 196,
        Grade : 68
    },
   
    {
        Name : 'Piero della Francesca',
        id :  102,
        Grade : 50
    },
    {
        Name : 'Francesca da Polenta',
        id :  120,
        Grade : 84
    },

]

console.log(students);


//1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le 
//targhe col nome degli studenti: 
//creare una lista contenente il loro nome tutto in maiuscolo


const studentsCaps = students.map((element) => element.Name.toUpperCase());
console.log(studentsCaps);



//2. Dobbiamo creare una lista di tutti gli studenti 
//che hanno un totale di voti superiore a 70

const Grade = students.filter((element) => element.Grade >= 70);
console.log(Grade);


//3. Dobbiamo creare una lista di tutti gli studenti che hanno
//un totale di voti superiore a 70 e id superiore a 120

const idandgrade = students.filter((element) => element.Grade >= 70 && element.id >= 120);
console.log(idandgrade);


//SNACK 3
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare in console la bici con peso minore utilizzando destructuring e template literal



const racingbike =  [
    {
        modelName : 'CERVÉLO R5',
        weight : 7000,
    },
    {
        modelName : 'COLNAGO V4RS',
        weight : 6990,
    },
    {
        modelName : 'SPECIALIZED S-WORKS SL8 ED AETHOS',
        weight : 6620,
    },
    {
        modelName : 'FACTOR O2 VAM 2023',
        weight : 6800,
    },
    {
        modelName : 'ORBEA ORCA 2024',
        weight : 6700,
    },

];

console.log(racingbike);