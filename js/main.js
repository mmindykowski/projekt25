let myParagraph = document.getElementById("opis");


let myButton = document.querySelector('button');


document.querySelector('button').onclick = function() {
    myParagraph.textContent = 'Dowolny tekst w paragrafaie';
}