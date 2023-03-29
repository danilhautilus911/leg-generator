import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../prototypes/prototype_41/Container'
import { initSketch } from '../prototypes/prototype_41/Sketch'

// function initSketch() {
//   const sketchContainer = document.getElementById('Sketch')
//   console.log('init', sketchContainer)
// }

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_41')
  ReactDOM.render(<Container initSketch={initSketch} />, container)
})
