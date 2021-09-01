const container = document.querySelector('#container');
let columns;
let rows;
const defaultSize = 16;

function createGrid(columns, rows) { // Code that generates the divs for the drawing grid
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    
    for (i = 0; i<(columns*rows); i++){
        let elements    = document.createElement('div');
        container.appendChild(elements).className = "grid-item";
        
        
        elements.addEventListener('mouseover',()=>{
            elements.style.backgroundColor = 'black';
        })
    };
};
createGrid(defaultSize,defaultSize)

// button to erase drawings and create a new grid  ඞ
const resetButton = document.querySelector('#resetbutton');
resetButton.addEventListener('click', resetGrid);

function resetGrid(){
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((elements) => {
      container.removeChild(elements);
    });
    let newSize = prompt('How big do you want your next grid?')
    if (newSize > 100) {
       alert('size was bigger than 100 - press clear button again and input proper value')  
    } else if(typeof newSize === 'string'){
        alert('please enter a number - press clear button again and input proper value')
    } else {
        createGrid(newSize, newSize)
    }

}
 

// Function to use rainbow colors ((do This Later Bro because it is optional hehe))))
/*
const rainbowButton = document.querySelector('#rainbowcolor')

rainbowButton.addEventListener('click', changeColor)

function changeColor(){
    let elements = document.querySelector('.grid-item')
    elements.addEventListener*('hover', rainbowColor)
    function rainbowColor() {
        const Color1 = Math.floor(Math.random() * 256);
        const Color2 = Math.floor(Math.random() * 256);
        const Color3 = Math.floor(Math.random() * 256);
        elements.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
    }
    
}
*/