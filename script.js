const container = document.querySelector('main')
const btnDefault = document.querySelector('#default')
const btnRainbow = document.querySelector('#rainbow')
const btnEraser = document.querySelector('#eraser')
const btnReset = document.querySelector('#reset')
const buttons = document.querySelectorAll('.button-container button')
const gridButtons = document.querySelectorAll('.grid-options button')

const btnGridOne = document.querySelector('#gridOne')
const btnGridTwo = document.querySelector('#gridTwo')
const btnGridThree = document.querySelector('#gridThree')

let grid = 0;

function createGrid(grid) {
    for (let i = 0; i < grid; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)

        for (let i = 0; i < grid; i++) {
            const rowBoxes = document.createElement('div')
            rowBoxes.classList.add('row-boxes')
            row.appendChild(rowBoxes)
        }
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function defaultHover() {
    const gridBoxes = document.querySelectorAll('div .row-boxes')
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener('mouseenter', () => gridBox.classList.add('defaultHover'))
    })
}

function rainbowHover() {
    const gridBoxes = document.querySelectorAll('div .row-boxes')
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener('mouseenter', () => {
            gridBox.classList.add('tempRGB')
        })
    })
}

function resetButtons() {
    buttons.forEach((button) => {
        button.classList.remove('button-clicked')
    })

    const gridBoxes = document.querySelectorAll('div .row-boxes')
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener('mouseenter', () => gridBox.classList.remove('defaultHover'))
        gridBox.addEventListener('mouseenter', () => gridBox.classList.remove('tempRGB'))
    })
}

function resetGridButtons() {
    gridButtons.forEach((gridButton) => {
        gridButton.classList.remove('button-clicked')
    })
}

function emptyGrid() {
    const allDiv = document.querySelectorAll('.row div')
    allDiv.forEach((inDiv) => {
        inDiv.classList.remove('defaultHover')
        inDiv.classList.remove('tempRGB')

    })
}

function clickedButtons() {
    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            resetButtons()

            switch (button.id) {
                case 'default':
                    btnDefault.classList.add('button-clicked')
                    defaultHover()
                    break;
                case 'rainbow':
                    btnRainbow.classList.add('button-clicked')
                    rainbowHover()
                    break;
                case 'eraser':
                    btnEraser.classList.add('button-clicked')
                    break;
                case 'reset':
                    btnReset.classList.add('button-clicked')
                    emptyGrid()

            }
        })
    })
}

function resizeGrid() {
    gridButtons.forEach((gridButtons) => {
        gridButtons.addEventListener('click', () => {
            removeGrid()
            resetGridButtons()
            resetButtons()
            switch (gridButtons.id) {
                case 'gridOne':
                    btnGridOne.classList.add('button-clicked')
                    createGrid(10)
                    break;
                case 'gridTwo':
                    btnGridTwo.classList.add('button-clicked')
                    createGrid(20)
                    break;
                case 'gridThree':
                    btnGridThree.classList.add('button-clicked')
                    createGrid(30)
                    break;
            }
        })
    })
}

function startSketch() {
    clickedButtons()
    resizeGrid()
}


startSketch()