// Selecting the button to add a event to click,
// Selecting the input to get the value when its get value,
// Selecting the <ul> unorder list to add the items when input get value.
const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const listElement = document.querySelector('ul');


// Function to adding the items in the list when the add to list button clicked
function addToList() {
    // Getting the input value by .value
    const gettingValue = inputElement.value;


    // Creating the <li> list items by createElement method
    const listItem = document.createElement('li');


    // Setting the innerText value to to what we get in the input 
    listItem.innerText = gettingValue;


    //  Setting Listitem <li> to be a child og <ul> 
    listElement.appendChild(listItem);


    // Adding empty string to the inputElement. 
    // It's clear the input value for adding the new value to the <li>
    



}

//  Adding eventListener to the button element and calling the function
buttonElement.addEventListener('click', addToList);