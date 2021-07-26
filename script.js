'use strict'

alert("Program służy do wypełnienia listy gości.");

function bookGuests(){
    var guests = [];
    var guestNumber = 0;
    while(confirm("Czy chcesz kontynuować?")){
        var firstName = prompt("Wprowadź imię gościa: ");
        var surname = prompt("Wprowadź nazwisko gościa: ");
        var age = prompt("Wprowadź wiek gościa: ");

        guests[guestNumber] = {
            firstName = firstName, 
            surname = surname,
            age = age,
        };

        if(age >= 18){
            guests[guestNumber].majority = true;
        }
        else{
            guests[guestNumber].majority = false;
        }

        alert(`Wprowadzono nowego gościa. Imię: ${guests[guestNumber].firstName}; Nazwisko: ${guests[guestNumber].surname}; Wiek: ${guests[guestNumber].age}.`);
        guestNumber++;
    }
    return guests;
}

var guests = bookGuests();

document.write(guests);
alert("Klasa przechowująca listę gości została pokazana w konsoli (Ctrl + Shift + J).");

