//grid-selectors
let gridContainer = document.getElementById('grid-container')
let rangeSlider = document.getElementById('custom-range'); 
let rangeValueDisplay = document.getElementById('rangevalue')
let slideContainer = document.querySelector('slider-container'); 
let cells;

//button-selectors
let color = document.getElementById('color'); 
let rainbow = document.getElementById('rainbow'); 
let erase = document.getElementById('erase'); 
let clear = document.getElementById('clear'); 

//color-picker selectors
let color_picker = document.getElementById('color-picker'); 


function makeGrid(rows, cols){
    gridContainer.innerHTML = ''; 
    
    rangeValueDisplay.textContent = (`Your grid size is: ${rows} x ${cols}`); 
    
    gridContainer.style.setProperty("--grid-cols", cols); 
    gridContainer.style.setProperty("--grid-rows", rows); 
    for(let i = 0; i < rows * cols; i++){
        let gridItem = document.createElement('div'); 
        gridItem.classList.add('grid-item'); 
        gridContainer.appendChild(gridItem); 
        cells = document.querySelectorAll('.grid-item')
        console.log(cells)
    }
}



function getSliderValue(){
    makeGrid(rangeSlider.value, rangeSlider.value); 
}

rangeSlider.addEventListener("input", getSliderValue);  


function random(number){
    return Math.floor(Math.random() * (number + 1)); 
}

color_picker.oninput = (function(){

    color.style.backgroundColor = color_picker.value; 
    color_picker.style.backgroundColor = color_picker.value; 

    for (const cell of cells){
        
        cell.addEventListener('mouseenter', () => {

        
        cell.style.backgroundColor = color_picker.value; 

        });
    }
        
}); 

function colorMode(){

    for (const cell of cells){
        
        cell.addEventListener('mouseenter', () => {
    
        
        cell.style.backgroundColor = color_picker.value; 

        });
    }
    

    
}

function rainbowMode(){
    for (const cell of cells){

        cell.addEventListener('mouseenter', () => {

            const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)}`
        
            cell.style.backgroundColor = randomColor;   


        })
       

    }

}

function eraseMode(){
    for (const cell of cells){

        cell.addEventListener('mouseenter', () =>{

            cell.style.background = ''; 


        })
         
    }
}


function clearMode(){
    for (const cell of cells){
    
            cell.style.backgroundColor = ''; 

         
    }

}








