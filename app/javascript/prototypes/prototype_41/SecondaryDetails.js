import { func } from 'prop-types'
import { getRandomArbitrary, sample, generateHash } from '../utilities'

function getAmount() {
  let detailAmount = localStorage.getItem('detailAmountInput2')
  console.log(detailAmount)
  return detailAmount
}

function getHeight() {
  let detailHeight = localStorage.getItem('detailHeightInput2')
  console.log(detailHeight)
  return detailHeight
}

function getWidth() {
  let detailWidth = localStorage.getItem('detailWidthInput2')
  console.log(detailWidth)
  return detailWidth
}

function getBackgroundColor() {
  let detailBackgroundlColor = localStorage.getItem(
    'detailBackgroundColorInput2'
  )
  console.log(detailBackgroundlColor)
  return detailBackgroundlColor
}

function getBorderColor() {
  let detailBorderlColor = localStorage.getItem('detailBorderColorInput2')
  console.log(detailBorderlColor)
  return detailBorderlColor
}

function getTemplateBackgroundColor() {
  let templateBackgroundlColor = localStorage.getItem(
    'TemplateBackgroundColorInput'
  )
  // console.log(templateBackgroundlColor)
  return templateBackgroundlColor
}

function getTemplateBorderColor() {
  let templateBorderColor = localStorage.getItem('TemplateBorderColorInput')
  // console.log(templateBackgroundlColor)
  return templateBorderColor
}

function getTemplateCells() {
  let templateCells = localStorage.getItem('TemplateCellsInput')
  // console.log(templateCells)
  return templateCells
}

let cells = getTemplateCells()

if (cells == '') {
  cells = 32
} else {
  cells = getTemplateCells()
}

// alert(cells)

const canvasSide = 640
const cellSize = canvasSide / cells

// let userDetailWidth = 2
// let userDetailHeight = 40
const systemDetailWidth = getWidth() * cellSize
const systemDetailHeight = getHeight() * cellSize
console.log(systemDetailWidth, systemDetailHeight)

// const detailAmount = 15

let canvasContainerId = ''

// const canvas = document.createElement('div')
// canvas.style.width = canvasSide + 'px'
// canvas.style.height = canvasSide + 'px'
// canvas.classList.add('canvas')
// if (getTemplateBackgroundColor() == '') {
//   canvas.classList.add('backgroundWhite')
// } else {
//   canvas.classList.add(getTemplateBackgroundColor())
// }

// canvas.classList.add('backgroundBlue')
// canvas.setAttribute('id', 'canvasContainerId')

// function generateInnerCanvas() {
//   // document.body.appendChild(canvas)
//   document.getElementById(canvasContainerId).appendChild(canvas)
// }

// function createCanvasElements() {
//   const canvasElement = document.createElement('div')
//   canvasElement.style.width = cellSize + 'px'
//   canvasElement.style.height = cellSize + 'px'
//   canvasElement.classList.add('canvasElement')
//   canvas.appendChild(canvasElement)

//   const canvasCircle = document.createElement('div')
//   canvasCircle.classList.add('canvasCircle')
//   canvasElement.appendChild(canvasCircle)
//   if (getTemplateBorderColor() == '') {
//     canvasCircle.classList.add('borderWhite')
//   } else {
//     canvasCircle.classList.add(getTemplateBorderColor())
//   }
// }

// for (let row = 0; row < cells; row++) {
//   for (let column = 0; column < cells; column++) {
//     createCanvasElements(
//       column * cellSize,
//       (column + 1) * cellSize,
//       row * cellSize,
//       (row + 1) * cellSize
//     )
//   }
// }

function createDetail() {
  let x = Math.floor(getRandomArbitrary(1 - getWidth(), cells)) * cellSize
  let y = Math.floor(getRandomArbitrary(1 - getHeight(), cells)) * cellSize
  console.log(x, y)

  const rotateArray = ['rotate', 'notRotate']
  // let z = sample(rotateArray)
  // console.log(z)

  const detail = document.createElement('div')
  detail.style.width = systemDetailWidth + 'px'
  detail.style.height = systemDetailHeight + 'px'
  detail.style.left = x + 'px'
  detail.style.top = y + 'px'
  detail.classList.add('detail')

  if (x < 1 * cellSize || y < 1 * cellSize) {
    detail.classList.add('notRotate')
  } else if (
    1 * cellSize <= x <= 31 * cellSize &&
    1 * cellSize <= y <= 31 * cellSize
  ) {
    detail.classList.add(sample(rotateArray))
  } else if (x > 31 * cellSize || y > 31 * cellSize) {
    detail.classList.add('notRotate')
  }

  canvas.appendChild(detail)

  function createDetailsElement() {
    const element = document.createElement('div')
    element.style.width = cellSize + 'px'
    element.style.height = cellSize + 'px'
    element.classList.add('element')

    if (getBackgroundColor() == '') {
      element.classList.add('backgroundWhite')
    } else {
      element.classList.add(getBackgroundColor())
    }

    detail.appendChild(element)

    const circle = document.createElement('div')
    circle.classList.add('circle')

    if (getBorderColor() == '') {
      circle.classList.add('borderWhite')
    } else {
      circle.classList.add(getBorderColor())
    }

    element.appendChild(circle)
  }

  for (let row = 0; row < getWidth(); row++) {
    for (let column = 0; column < getHeight(); column++) {
      createDetailsElement(
        column * cellSize,
        (column + 1) * cellSize,
        row * cellSize,
        (row + 1) * cellSize
      )
    }
  }
}

function generateDetails() {
  for (let count = 0; count < getAmount(); count++) {
    createDetail()
  }
}

function initSketch(id) {
  canvasContainerId = id
  // generateInnerCanvas()
  generateDetails()
}

export { initSketch }
export { generateDetails }
