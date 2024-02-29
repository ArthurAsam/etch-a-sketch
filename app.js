let container = document.querySelector('.container'); 
let input = +prompt("Enter a number between 1 - 100", "")
let resize = document.querySelector('.resize'); 
let original = document.getElementById('original'); 
let clear = document.getElementById('clear'); 
let erase = document.getElementById('eraser'); 
let dark = document.getElementById('darker'); 
let random = document.getElementById('RGB'); 


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
                div.style.cssText = "background-color: #dcdcdc"
            })
        })
     
    })
}

function clearContainer(){
   let rowList = container.querySelectorAll('.row'); 
  
   rowList.forEach((div)=>{
    div.style.cssText = "background-color: none"; 
   })
}



function darkenColor(){
  let rowList = container.querySelectorAll('.row')
   
  
  rowList.forEach((div) =>{
    div.addEventListener('mouseenter', (e)=>{
         let currentPercent= 100; 
         
        if (div.hasAttribute('data-percent')){
            currentPercent = div.dataset.percent; 
        } 
        currentPercent -= 10; 
        div.dataset.percent = currentPercent; 
        
        
        let divBg = getComputedStyle(div).getPropertyValue('--color-grey')
        console.log(currentPercent)
        if (div.style.color !== 'black'){
            div.style.backgroundColor = `color-mix(in srgb, ${divBg} ${currentPercent}%, black)`
        } else {
            div.style.backgroundColor  = `color-mix(in srgb, ${divBg} ${currentPercent}%, white)` 
        }
    })
  }); 

}; 

 


function randomInteger(max){
   return Math.floor(Math.random()* (max + 1))
 }




 function randomColor(){
    let rowList = container.querySelectorAll('.row'); 
    rowList.forEach((div)=>{
     div.addEventListener('mouseenter', (e)=>{
        
        let R = randomInteger(255); 
        let G = randomInteger(255); 
        let B = randomInteger(255); 
        
        div.style.cssText = `background-color: rgb(${R},${G},${B})`; 
     })
    })
 }

 function eraseColor(){
    let rowList = container.querySelectorAll('.row'); 
    rowList.forEach((div)=>{
     div.addEventListener('mouseenter', (e)=>{
        e.preventDefault(); 
        div.style.cssText = 'background-color: none;'
     })
    })
 }




random.addEventListener('click', randomColor)
dark.addEventListener('click', darkenColor)
erase.addEventListener('click', eraseColor)
clear.addEventListener('click', clearContainer)
resize.addEventListener('click', triggerGrid)
original.addEventListener('click', makeOriginal)