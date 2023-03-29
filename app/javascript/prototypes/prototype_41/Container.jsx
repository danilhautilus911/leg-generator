import React, { Component } from 'react'
import SC_Button from '../../components/SC_Button'
import { generateDetails } from './Sketch'
import html2canvas from 'html2canvas'
import { getRandomArbitrary, sample, generateHash } from '../utilities'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount1: '',
      height1: '',
      width1: '',
      background1: '',
      border1: '',
      amount2: '',
      height2: '',
      width2: '',
      background2: '',
      border2: '',
      amount3: '',
      height3: '',
      width3: '',
      background3: '',
      border3: '',
      visible: false,
      secondVisible: false,
      thirdVisible: false
    }
  }

  handleSendToLocalStorage = () => {
    new Promise((resolve, reject) => {
      localStorage.setItem('detailAmountInput1', this.state.amount1)
      localStorage.setItem('detailHeightInput1', this.state.height1)
      localStorage.setItem('detailWidthInput1', this.state.width1)
      localStorage.setItem(
        'detailBackgroundColorInput1',
        this.state.background1
      )
      localStorage.setItem('detailBorderColorInput1', this.state.border1)

      localStorage.setItem('detailAmountInput2', this.state.amount2)
      localStorage.setItem('detailHeightInput2', this.state.height2)
      localStorage.setItem('detailWidthInput2', this.state.width2)
      localStorage.setItem(
        'detailBackgroundColorInput2',
        this.state.background2
      )
      localStorage.setItem('detailBorderColorInput2', this.state.border2)

      localStorage.setItem('detailAmountInput3', this.state.amount3)
      localStorage.setItem('detailHeightInput3', this.state.height3)
      localStorage.setItem('detailWidthInput3', this.state.width3)
      localStorage.setItem(
        'detailBackgroundColorInput3',
        this.state.background3
      )
      localStorage.setItem('detailBorderColorInput3', this.state.border3)

      console.log('work')
      resolve()
    })
    window.location.reload()
    // this.colorElement()
  }

  rebuild() {
    window.location.reload()
  }

  handleAmount1 = (event) => {
    const { amount } = this.state
    console.log(amount)
    this.setState({
      amount1: event.target.value
    })
  }
  handleHeight1 = (event) => {
    const { height } = this.state
    console.log(height)
    this.setState({
      height1: event.target.value
    })
  }
  handleWidth1 = (event) => {
    const { width } = this.state
    console.log(width)
    this.setState({
      width1: event.target.value
    })
  }
  handleWhiteBackgroundColor1 = () => {
    const { background } = this.state
    this.setState({
      background1: 'backgroundWhite'
    })
    const { border } = this.state
    this.setState({
      border1: 'borderWhite'
    })
    console.log(background, border)
  }
  handleGreenBackgroundColor1 = () => {
    const { background } = this.state
    this.setState({
      background1: 'backgroundGreen'
    })
    const { border } = this.state
    this.setState({
      border1: 'borderGreen'
    })
    console.log(background, border)
  }
  handleBlueBackgroundColor1 = () => {
    const { background } = this.state
    this.setState({
      background1: 'backgroundBlue'
    })
    const { border } = this.state
    this.setState({
      border1: 'borderBlue'
    })
    console.log(background, border)
  }
  handleGreyBackgroundColor1 = () => {
    const { background } = this.state
    this.setState({
      background1: 'backgroundGrey'
    })
    const { border } = this.state
    this.setState({
      border1: 'borderGrey'
    })
    console.log(background, border)
  }

  handleAmount2 = (event) => {
    const { amount2 } = this.state
    console.log(amount2)
    this.setState({
      amount2: event.target.value
    })
  }
  handleHeight2 = (event) => {
    const { height2 } = this.state
    console.log(height2)
    this.setState({
      height2: event.target.value
    })
  }
  handleWidth2 = (event) => {
    const { width2 } = this.state
    console.log(width2)
    this.setState({
      width2: event.target.value
    })
  }
  handleWhiteBackgroundColor2 = () => {
    const { background2 } = this.state
    this.setState({
      background2: 'backgroundWhite'
    })
    const { border2 } = this.state
    this.setState({
      border2: 'borderWhite'
    })
    console.log(background2, border2)
  }
  handleGreenBackgroundColor2 = () => {
    const { background2 } = this.state
    this.setState({
      background2: 'backgroundGreen'
    })
    const { border2 } = this.state
    this.setState({
      border2: 'borderGreen'
    })
    console.log(background2, border2)
  }
  handleBlueBackgroundColor2 = () => {
    const { background2 } = this.state
    this.setState({
      background2: 'backgroundBlue'
    })
    const { border2 } = this.state
    this.setState({
      border2: 'borderBlue'
    })
    console.log(background2, border2)
  }
  handleGreyBackgroundColor2 = () => {
    const { background2 } = this.state
    this.setState({
      background2: 'backgroundGrey'
    })
    const { border2 } = this.state
    this.setState({
      border2: 'borderGrey'
    })
    console.log(background2, border2)
  }

  handleAmount3 = (event) => {
    const { amount3 } = this.state
    console.log(amount3)
    this.setState({
      amount3: event.target.value
    })
  }
  handleHeight3 = (event) => {
    const { height3 } = this.state
    console.log(height3)
    this.setState({
      height3: event.target.value
    })
  }
  handleWidth3 = (event) => {
    const { width3 } = this.state
    console.log(width3)
    this.setState({
      width3: event.target.value
    })
  }
  handleWhiteBackgroundColor3 = () => {
    const { background3 } = this.state
    this.setState({
      background3: 'backgroundWhite'
    })
    const { border3 } = this.state
    this.setState({
      border3: 'borderWhite'
    })
    console.log(background3, border3)
  }
  handleGreenBackgroundColor3 = () => {
    const { background3 } = this.state
    this.setState({
      background3: 'backgroundGreen'
    })
    const { border3 } = this.state
    this.setState({
      border3: 'borderGreen'
    })
    console.log(background3, border3)
  }
  handleBlueBackgroundColor3 = () => {
    const { background3 } = this.state
    this.setState({
      background3: 'backgroundBlue'
    })
    const { border3 } = this.state
    this.setState({
      border3: 'borderBlue'
    })
    console.log(background3, border3)
  }
  handleGreyBackgroundColor3 = () => {
    const { background3 } = this.state
    this.setState({
      background3: 'backgroundGrey'
    })
    const { border3 } = this.state
    this.setState({
      border3: 'borderGrey'
    })
    console.log(background3, border3)
  }

  componentDidMount() {
    this.props.initSketch('Sketch')
  }

  generateImage = () => {
    return new Promise((resolve, reject) => {
      const imageArea = document.getElementById('Sketch')

      html2canvas(imageArea).then((canvas) => {
        canvas.style.position = 'absolute'
        canvas.style.left = '-99999px'
        document.body.appendChild(canvas)

        resolve()
        this.downloadImage()
      })
    })
  }

  downloadImage = () => {
    const downloads = document.getElementsByTagName('canvas')[0]
    const imageData = downloads.toDataURL('image/png')

    const link = document.createElement('a')
    link.download = `Prototype-41-${generateHash()}.png`
    link.href = imageData
    link.click()
    link.remove()

    downloads.remove()
  }

  visibleTrue = () => {
    const { visible, secondVisible, thirdVisible } = this.state
    if (!visible) {
      this.setState({
        visible: true
      })
    } else if (visible && !secondVisible) {
      this.setState({
        secondVisible: true
      })
    } else if (visible && secondVisible) {
      this.setState({
        thirdVisible: true
      })
    }
  }

  visibleFalse = () => {
    const { visible } = this.state
    this.setState({
      visible: false
    })
  }

  secondVisibleFalse = () => {
    const { visible } = this.state
    this.setState({
      secondVisible: false
    })
  }

  thirdVisibleFalse = () => {
    const { visible } = this.state
    this.setState({
      thirdVisible: false
    })
  }

  // test() {
  //   document.getElementById('Sketch').appendChild()
  // }

  render() {
    return (
      <div className="Container">
        <div className="Left">
          <div className="header">
            <h1>bricks</h1>
            <div onClick={this.visibleTrue} className="addButton">
              <h3>+</h3>
            </div>
          </div>
          {this.state.visible && (
            <div className="detailCreation">
              <div className="detailProportions">
                <h2>proportions</h2>
                <div className="inputSet">
                  <input
                    name="myInput"
                    placeholder={localStorage.getItem('detailWidthInput1')}
                    onChange={this.handleHeight1}
                  />
                  <h2>x</h2>
                  <input
                    name="myInput"
                    placeholder={localStorage.getItem('detailWidthInput1')}
                    onChange={this.handleWidth1}
                  />
                </div>
              </div>
              <div className="colorPalette">
                <h2>color</h2>
                <div className="colorPaletteSet">
                  <div
                    onClick={this.handleWhiteBackgroundColor1}
                    className="whiteDetail"
                    id="colorCircle"
                  ></div>
                  <div
                    onClick={this.handleGreenBackgroundColor1}
                    className="greenDetail"
                    id="colorCircle"
                  ></div>
                  <div
                    onClick={this.handleBlueBackgroundColor1}
                    className="blueDetail"
                    id="colorCircle"
                  ></div>
                  <div
                    onClick={this.handleGreyBackgroundColor1}
                    className="greyDetail"
                    id="colorCircle"
                  ></div>
                  <div className="yellowDetail" id="colorCircle"></div>
                  <div className="pinkDetail" id="colorCircle"></div>
                </div>
              </div>
              <div className="detailAmount">
                <h2>amount</h2>
                <input
                  name="myInput"
                  placeholder={localStorage.getItem('detailAmountInput1')}
                  onChange={this.handleAmount1}
                />
              </div>
              <div className="removeButton" onClick={this.visibleFalse}></div>
            </div>
          )}
          {this.state.secondVisible && (
            <div className="detailCreation">
              <div className="detailProportions">
                <h2>proportions</h2>
                <div className="inputSet">
                  <input
                    name="myInput"
                    placeholder={localStorage.getItem('detailWidthInput2')}
                    onChange={this.handleHeight2}
                  />
                  <h2>x</h2>
                  <input
                    name="myInput"
                    placeholder={localStorage.getItem('detailWidthInput2')}
                    onChange={this.handleWidth2}
                  />
                </div>
              </div>
              <div className="colorPalette">
                <h2>color</h2>
                <div className="colorPaletteSet">
                  <div
                    onClick={this.handleWhiteBackgroundColor2}
                    className="whiteDetail"
                    id="colorCircle"
                  ></div>
                  <div
                    onClick={this.handleGreenBackgroundColor2}
                    className="greenDetail"
                    id="colorCircle"
                  ></div>
                  <div
                    onClick={this.handleBlueBackgroundColor2}
                    className="blueDetail"
                    id="colorCircle"
                  ></div>
                  <div
                    onClick={this.handleGreyBackgroundColor2}
                    className="greyDetail"
                    id="colorCircle"
                  ></div>
                  <div className="yellowDetail" id="colorCircle"></div>
                  <div className="pinkDetail" id="colorCircle"></div>
                </div>
              </div>
              <div className="detailAmount">
                <h2>amount</h2>
                <input
                  name="myInput"
                  placeholder={localStorage.getItem('detailAmountInput2')}
                  onChange={this.handleAmount2}
                />
              </div>
              <div
                className="removeButton"
                onClick={this.secondVisibleFalse}
              ></div>
            </div>
          )}
          {this.state.thirdVisible && (
            <div className="detailCreation">
              <div className="detailProportions">
                <h2>proportions</h2>
                <div className="inputSet">
                  <input
                    name="myInput"
                    placeholder={localStorage.getItem('detailWidthInput3')}
                    onChange={this.handleHeight3}
                  />
                  <h2>x</h2>
                  <input
                    name="myInput"
                    placeholder={localStorage.getItem('detailWidthInput3')}
                    onChange={this.handleWidth3}
                  />
                </div>
              </div>
              <div className="colorPalette">
                <h2>color</h2>
                <div className="colorPaletteSet">
                  <div
                    onClick={this.handleWhiteBackgroundColor3}
                    className="whiteDetail"
                    id="colorCircle"
                  ></div>
                  <div
                    onClick={this.handleGreenBackgroundColor3}
                    className="greenDetail"
                    id="colorCircle"
                  ></div>
                  <div
                    onClick={this.handleBlueBackgroundColor3}
                    className="blueDetail"
                    id="colorCircle"
                  ></div>
                  <div
                    onClick={this.handleGreyBackgroundColor3}
                    className="greyDetail"
                    id="colorCircle"
                  ></div>
                  <div className="yellowDetail" id="colorCircle"></div>
                  <div className="pinkDetail" id="colorCircle"></div>
                </div>
              </div>
              <div className="detailAmount">
                <h2>amount</h2>
                <input
                  name="myInput"
                  placeholder={localStorage.getItem('detailAmountInput3')}
                  onChange={this.handleAmount3}
                />
              </div>
              <div
                className="removeButton"
                onClick={this.thirdVisibleFalse}
              ></div>
            </div>
          )}
          <SC_Button
            className="generateButton"
            text="generate"
            handleClick={this.handleSendToLocalStorage}
          ></SC_Button>
        </div>
        <div className="Right">
          <div className="buttonSet">
            <SC_Button text="rebuild" handleClick={this.rebuild}></SC_Button>
            <SC_Button
              text="download"
              handleClick={this.generateImage}
            ></SC_Button>
          </div>
          <div className="Sketch" id="Sketch"></div>
        </div>
      </div>
    )
  }
}
