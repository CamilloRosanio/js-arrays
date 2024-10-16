const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log('Risultato 1: ' + fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, 'Patrick')

console.log('Risultato 2: ' + teachers[4])

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log('Risultato 3: rimosso ' + lastTeacher)

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift(0);
console.log('Risultato 4: rimosso ' + firstTeacher)

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa')
console.log('Risultato 5: ' + teachers[5])

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah')
console.log('Risultato 6: ' + teachers[0])

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let presenzaFabio

if (teachers.includes('Fabio')) {
  presenzaFabio = 'Presente'
} else {
  presenzaFabio = 'NON presente'
}

const isFabioPresent = presenzaFabio;
console.log('Risultato 7: ' + 'Fabio è: ' + presenzaFabio)

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
console.log('Risultato 8: indice numero ' + teachers.indexOf('Lewis'))

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log('Risultato 9: ' + teachers.toString())

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length;
let outputMessage;

if (teachers.length == 0) {
  outputMessage = 'Array vuoto'
} else {
  outputMessage = 'Array con ' + teachers.length + ' elementi'
}

console.log('Risultato 10: ' + outputMessage)