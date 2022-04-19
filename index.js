//find solution set of an inequality for specified domain of the variable
let startButton = document.querySelector('button').addEventListener('click', solveInequality)

function solveInequality(){
    //show an array of true values
    values = [] 
    //replace x with values
    for(x=0; x<10;x++){
        console.log(2*x-5>7)//7 false 4 true
        //show true values
        if(2*x-5>7) values.push(x)
    
    }
    console.log(values)
    document.querySelector('h2').innerText= `{${values}}`
}
