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