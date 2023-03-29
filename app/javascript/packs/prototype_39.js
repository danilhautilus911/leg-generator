import { func } from 'prop-types'
import { getRandomArbitrary, sample } from '../prototypes/utilities'

const cells = 32
const canvasSide = 640
const cellSize = canvasSide / cells

let userDetailWidth = 2
let userDetailHeight = 40
const systemDetailWidth = userDetailWidth * cellSize
const systemDetailHeight = userDetailHeight * cellSize
// console.log(systemDetailWidth, systemDetailHeight)

const detailAmount = 15

const canvas = document.createElement('div')
canvas.style.width = canvasSide + 'px'
canvas.style.height = canvasSide + 'px'
canvas.classList.add('canvas')
document.body.appendChild(canvas)

function createCanvasElements() {
  const canvasElement = document.createElement('div')
  canvasElement.style.width = cellSize + 'px'
  canvasElement.style.height = cellSize + 'px'
  canvasElement.classList.add('canvasElement')
  canvas.appendChild(canvasElement)

  const canvasCircle = document.createElement('div')
  canvasCircle.classList.add('canvasCircle')
  canvasElement.appendChild(canvasCircle)
}

for (let row = 0; row < cells; row++) {
  for (let column = 0; column < cells; column++) {
    createCanvasElements(
      column * cellSize,
      (column + 1) * cellSize,
      row * cellSize,
      (row + 1) * cellSize
    )
  }
}

function createDetail() {
  let x = Math.floor(getRandomArbitrary(1 - userDetailWidth, 32)) * cellSize
  let y = Math.floor(getRandomArbitrary(1 - userDetailHeight, 32)) * cellSize
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
    detail.appendChild(element)

    const circle = document.createElement('div')
    circle.classList.add('circle')
    element.appendChild(circle)
  }

  for (let row = 0; row < userDetailWidth; row++) {
    for (let column = 0; column < userDetailHeight; column++) {
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
  for (let count = 0; count < detailAmount; count++) {
    createDetail()
  }
}

document.addEventListener('DOMContentLoaded', () => {
  generateDetails()
})
