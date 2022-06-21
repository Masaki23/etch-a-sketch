const container = document.querySelector('#container');
const gridArray = [];
const gridBtn = document.querySelector('button');
let gridPrompt = 0;
let gridWH = 0;
let gridColor = [];
function createGridArray(gridSize=16) {
    let arraySize = gridArray.length;
    gridWH = 800 / gridSize;
    let o, r, s = 255;

    if (gridSize > 100 || gridSize < 1)
    {
        alert('Enter a valid number!');
        return;
    }
    
    if(arraySize != 0)
    {
        for(let i = 0; i < gridArray.length; i++)
        {
            gridArray[i].style.backgroundColor = 'white';
            container.removeChild(gridArray[i]);
        }
        while(gridArray.length > 0) {
            gridArray.pop();
        }
    }

    for(let i = 0; i < (gridSize * gridSize); i++)
    {
        gridArray[i] = document.createElement('div');
        gridArray[i].classList.add(`square${i}`);
        gridArray[i].style.display = "flex";
        gridArray[i].style.backgroundColor = 'white';
        gridArray[i].style.width = `${gridWH}px`;
        gridArray[i].style.height = `${gridWH}px`;
        gridArray[i].addEventListener('mouseover', () => {
            o = Math.round;
            r = Math.random;
            if(gridArray[i].style.backgroundColor == 'white')
            {
                gridArray[i].style.backgroundColor = 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
            }
            else
            {
                gridColor = gridArray[i].style.backgroundColor.match(/\d+/g);

                gridArray[i].style.backgroundColor = 'rgb(' + (gridColor[0]-Math.round(gridColor[0]*0.1)) + ',' + (gridColor[1]-Math.round(gridColor[1]*0.1)) + ',' + (gridColor[2]-Math.round(gridColor[2]*0.1)) + ')';
                console.log('a');
            }
        });
        container.appendChild(gridArray[i]);
    }
}

createGridArray();

gridBtn.addEventListener('click', () => {
    createGridArray(parseInt(prompt('What size do you want to make the grid? (1-100)')));
});