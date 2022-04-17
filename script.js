const container = document.querySelector('main')

const btnDefault = document.querySelector('#default')
const btnRainbow = document.querySelector('#rainbow')
const btnEraser = document.querySelector('#eraser')
const btnReset = document.querySelector('#reset')

const btnGridOne = document.querySelector('#gridOne')
const btnGridTwo = document.querySelector('#gridTwo')
const btnGridThree = document.querySelector('#gridThree')

const topButtons = document.querySelectorAll('.button-container button')
const botButtons = document.querySelectorAll('.grid-options button')

let boxes


function createGrid(gridSize) {
    clearGrid()
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)
        for (let j = 0; j < gridSize; j++) {
            const rowBoxes = document.createElement('div')
            rowBoxes.classList.add('row-boxes')
            row.appendChild(rowBoxes)
        }
    }
    boxes = document.querySelectorAll('div .row-boxes')
    addHoverEffects()
}
// used in createGrid so that when a new grid size is selected, the previous one is removed first
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    removeEffectsTop()
}

function startGrid() {
    createGrid(20)
    btnGridTwo.classList.add('button-clicked')
    botButtons.forEach((botButton) => {
        botButton.addEventListener('click', () => {
            removeEffectsBot()
            switch (botButton.id) {
                case 'gridOne':
                    createGrid(10)
                    btnGridOne.classList.add('button-clicked')
                    break;
                case 'gridTwo':
                    createGrid(20)
                    btnGridTwo.classList.add('button-clicked')
                    break;
                case 'gridThree':
                    createGrid(30)
                    btnGridThree.classList.add('button-clicked')
                    break;
            }
        })
    })
}

function addHoverEffects() {
    defaultHover()
    topButtons.forEach((topButton) => {
        topButton.addEventListener('click', () => {
            removeEffectsTop()
            switch (topButton.id) {
                case 'default':
                    defaultHover()
                    break;
                case 'rainbow':
                    rainbowHover()
                    break;
                case 'eraser':
                    eraserHover()
                    break;
                case 'reset':
                    resetGrid()
                    break;
            }
        })
    })
}

function defaultHover() {
    btnDefault.classList.add('button-clicked')
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'black'
        })
    })
}

function eraserHover() {
    btnEraser.classList.add('button-clicked')
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'white'
        })
    })
}

function rainbowHover() {
    btnRainbow.classList.add('button-clicked')
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', () => {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16)
            box.style.backgroundColor = `#${randomColor}`
        })
    })
}

function resetGrid() {
    btnReset.classList.add('button-clicked')
    boxes.forEach((box) => {
        box.style.backgroundColor = 'white'
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = ''
        })
    })
}

function removeEffectsBot() {
    btnGridOne.classList.remove('button-clicked')
    btnGridTwo.classList.remove('button-clicked')
    btnGridThree.classList.remove('button-clicked')
}

function removeEffectsTop() {
    btnDefault.classList.remove('button-clicked')
    btnRainbow.classList.remove('button-clicked')
    btnEraser.classList.remove('button-clicked')
    btnReset.classList.remove('button-clicked')
}

startGrid()