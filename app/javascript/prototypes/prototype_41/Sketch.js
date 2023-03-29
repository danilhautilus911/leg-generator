import { func } from 'prop-types'
import { getRandomArbitrary, sample, generateHash } from '../utilities'

function getAmount1() {
  let detailAmount1 = localStorage.getItem('detailAmountInput1')
  console.log(detailAmount1)
  return detailAmount1
}
function getHeight1() {
  let detailHeight1 = localStorage.getItem('detailHeightInput1')
  console.log(detailHeight1)
  return detailHeight1
}
function getWidth1() {
  let detailWidth1 = localStorage.getItem('detailWidthInput1')
  console.log(detailWidth1)
  return detailWidth1
}
function getBackgroundColor1() {
  let detailBackgroundlColor1 = localStorage.getItem(
    'detailBackgroundColorInput1'
  )
  console.log(detailBackgroundlColor1)
  return detailBackgroundlColor1
}
function getBorderColor1() {
  let detailBorderlColor1 = localStorage.getItem('detailBorderColorInput1')
  console.log(detailBorderlColor1)
  return detailBorderlColor1
}

function getAmount2() {
  let detailAmount2 = localStorage.getItem('detailAmountInput2')
  console.log(detailAmount2)
  return detailAmount2
}
function getHeight2() {
  let detailHeight2 = localStorage.getItem('detailHeightInput2')
  console.log(detailHeight2)
  return detailHeight2
}
function getWidth2() {
  let detailWidth2 = localStorage.getItem('detailWidthInput2')
  console.log(detailWidth2)
  return detailWidth2
}
function getBackgroundColor2() {
  let detailBackgroundlColor2 = localStorage.getItem(
    'detailBackgroundColorInput2'
  )
  console.log(detailBackgroundlColor2)
  return detailBackgroundlColor2
}
function getBorderColor2() {
  let detailBorderlColor2 = localStorage.getItem('detailBorderColorInput2')
  console.log(detailBorderlColor2)
  return detailBorderlColor2
}

function getAmount3() {
  let detailAmount3 = localStorage.getItem('detailAmountInput3')
  console.log(detailAmount3)
  return detailAmount3
}
function getHeight3() {
  let detailHeight3 = localStorage.getItem('detailHeightInput3')
  console.log(detailHeight3)
  return detailHeight3
}
function getWidth3() {
  let detailWidth3 = localStorage.getItem('detailWidthInput3')
  console.log(detailWidth3)
  return detailWidth3
}
function getBackgroundColor3() {
  let detailBackgroundlColor3 = localStorage.getItem(
    'detailBackgroundColorInput3'
  )
  console.log(detailBackgroundlColor3)
  return detailBackgroundlColor3
}
function getBorderColor3() {
  let detailBorderlColor3 = localStorage.getItem('detailBorderColorInput3')
  console.log(detailBorderlColor3)
  return detailBorderlColor3
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

const canvasSide = 640
const cellSize = canvasSide / cells

const systemDetailWidth1 = getWidth1() * cellSize
const systemDetailHeight1 = getHeight1() * cellSize
const systemDetailWidth2 = getWidth2() * cellSize
const systemDetailHeight2 = getHeight2() * cellSize
const systemDetailWidth3 = getWidth3() * cellSize
const systemDetailHeight3 = getHeight3() * cellSize

let canvasContainerId = ''

const canvas = document.createElement('div')
canvas.style.width = canvasSide + 'px'
canvas.style.height = canvasSide + 'px'
canvas.classList.add('canvas')
if (getTemplateBackgroundColor() == '') {
  canvas.classList.add('backgroundWhite')
} else {
  canvas.classList.add(getTemplateBackgroundColor())
}

// canvas.classList.add('backgroundBlue')
// canvas.setAttribute('id', 'canvasContainerId')

function generateInnerCanvas() {
  // document.body.appendChild(canvas)
  document.getElementById(canvasContainerId).appendChild(canvas)
}

function createCanvasElements() {
  const canvasElement = document.createElement('div')
  canvasElement.style.width = cellSize + 'px'
  canvasElement.style.height = cellSize + 'px'
  canvasElement.classList.add('canvasElement')
  canvas.appendChild(canvasElement)

  const canvasCircle = document.createElement('div')
  canvasCircle.classList.add('canvasCircle')
  canvasElement.appendChild(canvasCircle)
  if (getTemplateBorderColor() == '') {
    canvasCircle.classList.add('borderWhite')
  } else {
    canvasCircle.classList.add(getTemplateBorderColor())
  }
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

function createDetail1() {
  let x = Math.floor(getRandomArbitrary(1 - getWidth1(), cells)) * cellSize
  let y = Math.floor(getRandomArbitrary(1 - getHeight1(), cells)) * cellSize
  console.log(x, y)

  const rotateArray = ['rotate', 'notRotate']
  // let z = sample(rotateArray)
  // console.log(z)

  const detail = document.createElement('div')
  detail.style.width = systemDetailWidth1 + 'px'
  detail.style.height = systemDetailHeight1 + 'px'
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

  function createDetailsElement1() {
    const element = document.createElement('div')
    element.style.width = cellSize + 'px'
    element.style.height = cellSize + 'px'
    element.classList.add('element')

    if (getBackgroundColor1() == '') {
      element.classList.add('backgroundWhite')
    } else {
      element.classList.add(getBackgroundColor1())
    }

    detail.appendChild(element)

    const circle = document.createElement('div')
    circle.classList.add('circle')

    if (getBorderColor1() == '') {
      circle.classList.add('borderWhite')
    } else {
      circle.classList.add(getBorderColor1())
    }

    element.appendChild(circle)
  }

  for (let row = 0; row < getWidth1(); row++) {
    for (let column = 0; column < getHeight1(); column++) {
      createDetailsElement1(
        column * cellSize,
        (column + 1) * cellSize,
        row * cellSize,
        (row + 1) * cellSize
      )
    }
  }
}
function createDetail2() {
  let x = Math.floor(getRandomArbitrary(1 - getWidth2(), cells)) * cellSize
  let y = Math.floor(getRandomArbitrary(1 - getHeight2(), cells)) * cellSize
  console.log(x, y)

  const rotateArray = ['rotate', 'notRotate']
  // let z = sample(rotateArray)
  // console.log(z)

  const detail = document.createElement('div')
  detail.style.width = systemDetailWidth2 + 'px'
  detail.style.height = systemDetailHeight2 + 'px'
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

  function createDetailsElement2() {
    const element = document.createElement('div')
    element.style.width = cellSize + 'px'
    element.style.height = cellSize + 'px'
    element.classList.add('element')

    if (getBackgroundColor2() == '') {
      element.classList.add('backgroundWhite')
    } else {
      element.classList.add(getBackgroundColor2())
    }

    detail.appendChild(element)

    const circle = document.createElement('div')
    circle.classList.add('circle')

    if (getBorderColor2() == '') {
      circle.classList.add('borderWhite')
    } else {
      circle.classList.add(getBorderColor2())
    }

    element.appendChild(circle)
  }

  for (let row = 0; row < getWidth2(); row++) {
    for (let column = 0; column < getHeight2(); column++) {
      createDetailsElement2(
        column * cellSize,
        (column + 1) * cellSize,
        row * cellSize,
        (row + 1) * cellSize
      )
    }
  }
}
function createDetail3() {
  let x = Math.floor(getRandomArbitrary(1 - getWidth3(), cells)) * cellSize
  let y = Math.floor(getRandomArbitrary(1 - getHeight3(), cells)) * cellSize
  console.log(x, y)

  const rotateArray = ['rotate', 'notRotate']
  // let z = sample(rotateArray)
  // console.log(z)

  const detail = document.createElement('div')
  detail.style.width = systemDetailWidth3 + 'px'
  detail.style.height = systemDetailHeight3 + 'px'
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

  function createDetailsElement3() {
    const element = document.createElement('div')
    element.style.width = cellSize + 'px'
    element.style.height = cellSize + 'px'
    element.classList.add('element')

    if (getBackgroundColor3() == '') {
      element.classList.add('backgroundWhite')
    } else {
      element.classList.add(getBackgroundColor3())
    }

    detail.appendChild(element)

    const circle = document.createElement('div')
    circle.classList.add('circle')

    if (getBorderColor3() == '') {
      circle.classList.add('borderWhite')
    } else {
      circle.classList.add(getBorderColor3())
    }

    element.appendChild(circle)
  }

  for (let row = 0; row < getWidth3(); row++) {
    for (let column = 0; column < getHeight3(); column++) {
      createDetailsElement3(
        column * cellSize,
        (column + 1) * cellSize,
        row * cellSize,
        (row + 1) * cellSize
      )
    }
  }
}

function generateDetails1() {
  for (let count = 0; count < getAmount1(); count++) {
    createDetail1()
  }
}

function generateDetails2() {
  for (let count = 0; count < getAmount2(); count++) {
    createDetail2()
  }
}

function generateDetails3() {
  for (let count = 0; count < getAmount3(); count++) {
    createDetail3()
  }
}

function initSketch(id) {
  canvasContainerId = id
  generateInnerCanvas()
  generateDetails1()
  generateDetails2()
  generateDetails3()
}

export { initSketch }
export { generateDetails1 }
export { generateDetails2 }
export { generateDetails3 }
