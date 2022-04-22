//find solution set of an inequality for specified domain of the variable
//let inequationPlace = document.getElementById('enterInequation').value
//const placeInput = document.getElementById('inequation').value
const btn = document.querySelector('button').addEventListener('click', solveInequation)
let inequation = null

function parse(inequation){
    return (`'use strict', return (${inequation})`)()
}
function solveInequation(inequation){
    inequation = document.getElementById('inequation').value
    console.log(inequation)
    //show an array of true values
    arr = [] 
    //replace x with values
    for(x=-10; x<11;x++){
        eval(inequation)//7 false 4 true
        //show true values
        if(eval(inequation)) arr.push(x)
    }
    console.log(arr)
    document.body.querySelector('h2').innerText = `{${arr}}` 
}

//2*x-5>7