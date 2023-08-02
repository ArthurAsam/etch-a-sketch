let gridContainer = document.getElementById('grid-container')
let rangeSlider = getElementById('customRange'); 


let color = document.getElementById('color'); 
let rainbow = document.getElementById('rainbow'); 
let erase = document.getElementById('erase'); 
let clear = document.getElementById('clear'); 
let displayCircle = document.getElementById('colorDisplay'); 

let color_picker = document.getElementById('color-picker'); 





for (let i = 0; i < ; i++){
    let div = document.createElement('div'); 
    div.classList.add('cell'); 
    container.appendChild(div); 

}; 



let cells = document.querySelectorAll('.cell')



function random(number){
    return Math.floor(Math.random() * (number + 1)); 
}

color_picker.oninput = (function(){
    color.style.backgroundColor = color_picker.value; 


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

            cell.style.background = 'lightblue'; 


        })
         
    }
}


function clearMode(){
    for (const cell of cells){
    
            cell.style.backgroundColor = 'lightblue'; 

         
    }

}








