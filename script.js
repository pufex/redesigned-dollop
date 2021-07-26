'use strict'

alert("Program służy do liczenia silni metodą iteracji. ");

function factorial(a){
    a = Math.floor(Math.abs(Number(a)));
    
    if(a){} else return 1;

    var n = 1;
    for(var i = 1; i <= a; i++){
        n = n*i;
    }
    return n;
}

var number = Number(prompt("Wprowadź liczbę: "));
if(number){}
else number = 0;

alert(`Silnia liczby ${number} wynosi: ${factorial(number)}.`);