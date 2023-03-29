import p5 from 'p5'
import { getRandomArbitrary, sample } from '../prototypes/utilities'

const cells = 32
const canvasSize = 640
const cellSize = canvasSize / cells

// две эти переменные будут спрашиваться у юзера в формате выпадающего списка
let userDetailWidth = 10
let userDetailHeight = 1
const systemCellWidth = userDetailWidth * cellSize
const systemCellHeight = userDetailHeight * cellSize
// console.log(systemCellWidth, systemCellHeight)

const detailAmount = 1024

function drawDetail(p) {
  // var coordinateMax = cells
  // var coordinates = []
  // while (coordinateMax >= 0) {
  //   coordinates.push(coordinateMax--)
  // }
  // console.log(coordinates)

  p.fill(255)
  p.rect(0, 0, cellSize, cellSize)
}

function drawDetail(p) {
  p.fill(130)
  p.rect(0, 0, cellSize, cellSize)
}

function combineDetail(p) {
  let x = Math.floor(getRandomArbitrary(0, 32)) * cellSize
  let y = Math.floor(getRandomArbitrary(0, 32)) * cellSize
  console.log(x, y)

  p.fill(255)
  p.rect(x, y, systemCellWidth, systemCellHeight)

  for (let row = 0; row < userDetailWidth; row++) {
    for (let column = 0; column < userDetailHeight; column++) {
      drawDetail(
        p,
        column * cellSize,
        (column + 1) * cellSize,
        row * cellSize,
        (row + 1) * cellSize
      )
    }
  }
}

function drawDetails(p) {
  p.background(0)

  for (let count = 0; count <= detailAmount; count++) {
    drawDetail(p)
    // console.log(count)
  }
}

// function drawDetails(p) {
//   p.background(0)

//   let count = 0
//   while (count < detailAmount) {
//     count++
//     drawDetail(p)
//     console.log(count)
//   }
// }

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent('prototype_38')
    p.frameRate(1)
    p.background(0)
  }

  p.draw = () => {
    combineDetail(p)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
})
