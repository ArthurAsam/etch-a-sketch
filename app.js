let container = document.querySelector('.container'); 
let input = +prompt("Enter a number between 1 - 100", "")
let resize = document.querySelector('.resize'); 
let original = document.getElementById('original'); 
let clear = document.getElementById('clear'); 
let erase = document.getElementById('erase'); 

if (input <= 100 && input >= 1){
    createGrid(input); 
} else {
    alert("reload page and enter a number 1 - 100");  
}


function triggerGrid(){
    let resizeInput = +prompt("Enter a number between 1 - 100", "")

    if (resizeInput <= 100 && resizeInput >= 1){
        container.innerHTML = ''; 
        createGrid(resizeInput); 
    } else {
        alert("reload page and enter a number 1 - 100"); 
        return; 
    }
}


function createGrid(input){
    for (let i = 1; i <= input; i++){
        let divCol = document.createElement('div'); 
        divCol.classList.add('item', 'col'); 
        container.append(divCol); 
        for(let j = 0; j < input; j++){
            let divRow = document.createElement('div'); 
            divRow.classList.add('item', 'row'); 
            divCol.append(divRow); 
        } 
    }

}

function makeOriginal(){
    let divList = container.querySelectorAll('div'); 
    divList.forEach((node) =>{
        
        let innerList = node.querySelectorAll('div')
        console.log(innerList)
        innerList.forEach((div) =>{
            div.addEventListener('mouseenter', (e)=> {
                e.preventDefault()
                div.style.cssText = "background-color: DarkGrey"
            })
        })
     
    })
}

function clearContainer(){
   let rowList = container.querySelectorAll('.row'); 
   console.log(rowList)
   rowList.forEach((div)=>{
    div.style.cssText = "background-color: none"; 
   })
}

clear.addEventListener('click', clearContainer)
resize.addEventListener('click', triggerGrid)
original.addEventListener('click', makeOriginal)