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
              <svg
                width="28"
                height="27"
                viewBox="0 0 28 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.921875 13.7188C0.921875 14.2083 1.09375 14.625 1.4375 14.9688C1.78125 15.3021 2.19271 15.4688 2.67188 15.4688H12.25V25.0625C12.25 25.5312 12.4219 25.9375 12.7656 26.2812C13.1094 26.625 13.5208 26.7969 14 26.7969C14.4896 26.7969 14.9062 26.625 15.25 26.2812C15.5938 25.9375 15.7656 25.5312 15.7656 25.0625V15.4688H25.3281C25.8073 15.4688 26.2188 15.3021 26.5625 14.9688C26.9062 14.625 27.0781 14.2083 27.0781 13.7188C27.0781 13.2396 26.9062 12.8281 26.5625 12.4844C26.2188 12.1302 25.8073 11.9531 25.3281 11.9531H15.7656V2.39062C15.7656 1.91146 15.5938 1.5 15.25 1.15625C14.9062 0.8125 14.4896 0.640625 14 0.640625C13.5208 0.640625 13.1094 0.8125 12.7656 1.15625C12.4219 1.5 12.25 1.91146 12.25 2.39062V11.9531H2.67188C2.19271 11.9531 1.78125 12.1302 1.4375 12.4844C1.09375 12.8281 0.921875 13.2396 0.921875 13.7188Z"
                  fill="#FFFCEB"
                />
              </svg>
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
              <div className="removeButton" onClick={this.visibleFalse}>
                <svg
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.67969 5.62109H8.84766V3.19531C8.84766 2.89844 8.94531 2.66016 9.14062 2.48047C9.33594 2.29297 9.59375 2.19922 9.91406 2.19922H14.0625C14.3906 2.19922 14.6523 2.29297 14.8477 2.48047C15.043 2.66016 15.1406 2.89844 15.1406 3.19531V5.62109H17.3086V3.08984C17.3086 2.19141 17.0352 1.49219 16.4883 0.992188C15.9414 0.484375 15.1836 0.230469 14.2148 0.230469H9.76172C8.79297 0.230469 8.03516 0.484375 7.48828 0.992188C6.94922 1.49219 6.67969 2.19141 6.67969 3.08984V5.62109ZM1.48828 6.91016H22.5234C22.8125 6.91016 23.0547 6.80859 23.25 6.60547C23.4531 6.40234 23.5547 6.15625 23.5547 5.86719C23.5547 5.57812 23.4531 5.33594 23.25 5.14062C23.0547 4.94531 22.8125 4.84766 22.5234 4.84766H1.48828C1.19922 4.84766 0.953125 4.94922 0.75 5.15234C0.546875 5.34766 0.445312 5.58594 0.445312 5.86719C0.445312 6.15625 0.546875 6.40234 0.75 6.60547C0.953125 6.80859 1.19922 6.91016 1.48828 6.91016ZM6.62109 26.6797H17.3906C18.2891 26.6797 19.0117 26.4219 19.5586 25.9062C20.1055 25.3984 20.3984 24.6914 20.4375 23.7852L21.2461 6.6875H19.0664L18.293 23.4336C18.2773 23.7852 18.1641 24.0664 17.9531 24.2773C17.7422 24.4961 17.4727 24.6055 17.1445 24.6055H6.85547C6.52734 24.6055 6.25781 24.4961 6.04688 24.2773C5.83594 24.0586 5.72266 23.7773 5.70703 23.4336L4.89844 6.6875H2.75391L3.57422 23.7969C3.61328 24.7031 3.90234 25.4102 4.44141 25.918C4.98828 26.4258 5.71484 26.6797 6.62109 26.6797ZM8.55469 22.707C8.79688 22.707 8.98828 22.6367 9.12891 22.4961C9.27734 22.3555 9.35156 22.168 9.35156 21.9336L8.98828 9.65234C8.98828 9.42578 8.91406 9.24219 8.76562 9.10156C8.61719 8.96094 8.42188 8.89062 8.17969 8.89062C7.9375 8.89062 7.74219 8.96484 7.59375 9.11328C7.44531 9.25391 7.375 9.4375 7.38281 9.66406L7.73438 21.9453C7.74219 22.1797 7.82031 22.3672 7.96875 22.5078C8.11719 22.6406 8.3125 22.707 8.55469 22.707ZM12 22.707C12.25 22.707 12.4492 22.6367 12.5977 22.4961C12.7539 22.3555 12.832 22.1719 12.832 21.9453V9.66406C12.832 9.4375 12.7539 9.25391 12.5977 9.11328C12.4492 8.96484 12.25 8.89062 12 8.89062C11.7578 8.89062 11.5586 8.96484 11.4023 9.11328C11.2539 9.25391 11.1797 9.4375 11.1797 9.66406V21.9453C11.1797 22.1719 11.2539 22.3555 11.4023 22.4961C11.5586 22.6367 11.7578 22.707 12 22.707ZM15.457 22.707C15.6914 22.707 15.8828 22.6406 16.0312 22.5078C16.1797 22.3672 16.2578 22.1797 16.2656 21.9453L16.6172 9.66406C16.625 9.4375 16.5547 9.25391 16.4062 9.11328C16.2656 8.96484 16.0703 8.89062 15.8203 8.89062C15.5859 8.89062 15.3945 8.96094 15.2461 9.10156C15.0977 9.24219 15.0195 9.42969 15.0117 9.66406L14.6602 21.9336C14.6523 22.168 14.7188 22.3555 14.8594 22.4961C15.0078 22.6367 15.207 22.707 15.457 22.707Z"
                    fill="#E0DCC5"
                  />
                </svg>
              </div>
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
              <div className="removeButton" onClick={this.secondVisibleFalse}>
                <svg
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.67969 5.62109H8.84766V3.19531C8.84766 2.89844 8.94531 2.66016 9.14062 2.48047C9.33594 2.29297 9.59375 2.19922 9.91406 2.19922H14.0625C14.3906 2.19922 14.6523 2.29297 14.8477 2.48047C15.043 2.66016 15.1406 2.89844 15.1406 3.19531V5.62109H17.3086V3.08984C17.3086 2.19141 17.0352 1.49219 16.4883 0.992188C15.9414 0.484375 15.1836 0.230469 14.2148 0.230469H9.76172C8.79297 0.230469 8.03516 0.484375 7.48828 0.992188C6.94922 1.49219 6.67969 2.19141 6.67969 3.08984V5.62109ZM1.48828 6.91016H22.5234C22.8125 6.91016 23.0547 6.80859 23.25 6.60547C23.4531 6.40234 23.5547 6.15625 23.5547 5.86719C23.5547 5.57812 23.4531 5.33594 23.25 5.14062C23.0547 4.94531 22.8125 4.84766 22.5234 4.84766H1.48828C1.19922 4.84766 0.953125 4.94922 0.75 5.15234C0.546875 5.34766 0.445312 5.58594 0.445312 5.86719C0.445312 6.15625 0.546875 6.40234 0.75 6.60547C0.953125 6.80859 1.19922 6.91016 1.48828 6.91016ZM6.62109 26.6797H17.3906C18.2891 26.6797 19.0117 26.4219 19.5586 25.9062C20.1055 25.3984 20.3984 24.6914 20.4375 23.7852L21.2461 6.6875H19.0664L18.293 23.4336C18.2773 23.7852 18.1641 24.0664 17.9531 24.2773C17.7422 24.4961 17.4727 24.6055 17.1445 24.6055H6.85547C6.52734 24.6055 6.25781 24.4961 6.04688 24.2773C5.83594 24.0586 5.72266 23.7773 5.70703 23.4336L4.89844 6.6875H2.75391L3.57422 23.7969C3.61328 24.7031 3.90234 25.4102 4.44141 25.918C4.98828 26.4258 5.71484 26.6797 6.62109 26.6797ZM8.55469 22.707C8.79688 22.707 8.98828 22.6367 9.12891 22.4961C9.27734 22.3555 9.35156 22.168 9.35156 21.9336L8.98828 9.65234C8.98828 9.42578 8.91406 9.24219 8.76562 9.10156C8.61719 8.96094 8.42188 8.89062 8.17969 8.89062C7.9375 8.89062 7.74219 8.96484 7.59375 9.11328C7.44531 9.25391 7.375 9.4375 7.38281 9.66406L7.73438 21.9453C7.74219 22.1797 7.82031 22.3672 7.96875 22.5078C8.11719 22.6406 8.3125 22.707 8.55469 22.707ZM12 22.707C12.25 22.707 12.4492 22.6367 12.5977 22.4961C12.7539 22.3555 12.832 22.1719 12.832 21.9453V9.66406C12.832 9.4375 12.7539 9.25391 12.5977 9.11328C12.4492 8.96484 12.25 8.89062 12 8.89062C11.7578 8.89062 11.5586 8.96484 11.4023 9.11328C11.2539 9.25391 11.1797 9.4375 11.1797 9.66406V21.9453C11.1797 22.1719 11.2539 22.3555 11.4023 22.4961C11.5586 22.6367 11.7578 22.707 12 22.707ZM15.457 22.707C15.6914 22.707 15.8828 22.6406 16.0312 22.5078C16.1797 22.3672 16.2578 22.1797 16.2656 21.9453L16.6172 9.66406C16.625 9.4375 16.5547 9.25391 16.4062 9.11328C16.2656 8.96484 16.0703 8.89062 15.8203 8.89062C15.5859 8.89062 15.3945 8.96094 15.2461 9.10156C15.0977 9.24219 15.0195 9.42969 15.0117 9.66406L14.6602 21.9336C14.6523 22.168 14.7188 22.3555 14.8594 22.4961C15.0078 22.6367 15.207 22.707 15.457 22.707Z"
                    fill="#E0DCC5"
                  />
                </svg>
              </div>
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
              <div className="removeButton" onClick={this.thirdVisibleFalse}>
                <svg
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.67969 5.62109H8.84766V3.19531C8.84766 2.89844 8.94531 2.66016 9.14062 2.48047C9.33594 2.29297 9.59375 2.19922 9.91406 2.19922H14.0625C14.3906 2.19922 14.6523 2.29297 14.8477 2.48047C15.043 2.66016 15.1406 2.89844 15.1406 3.19531V5.62109H17.3086V3.08984C17.3086 2.19141 17.0352 1.49219 16.4883 0.992188C15.9414 0.484375 15.1836 0.230469 14.2148 0.230469H9.76172C8.79297 0.230469 8.03516 0.484375 7.48828 0.992188C6.94922 1.49219 6.67969 2.19141 6.67969 3.08984V5.62109ZM1.48828 6.91016H22.5234C22.8125 6.91016 23.0547 6.80859 23.25 6.60547C23.4531 6.40234 23.5547 6.15625 23.5547 5.86719C23.5547 5.57812 23.4531 5.33594 23.25 5.14062C23.0547 4.94531 22.8125 4.84766 22.5234 4.84766H1.48828C1.19922 4.84766 0.953125 4.94922 0.75 5.15234C0.546875 5.34766 0.445312 5.58594 0.445312 5.86719C0.445312 6.15625 0.546875 6.40234 0.75 6.60547C0.953125 6.80859 1.19922 6.91016 1.48828 6.91016ZM6.62109 26.6797H17.3906C18.2891 26.6797 19.0117 26.4219 19.5586 25.9062C20.1055 25.3984 20.3984 24.6914 20.4375 23.7852L21.2461 6.6875H19.0664L18.293 23.4336C18.2773 23.7852 18.1641 24.0664 17.9531 24.2773C17.7422 24.4961 17.4727 24.6055 17.1445 24.6055H6.85547C6.52734 24.6055 6.25781 24.4961 6.04688 24.2773C5.83594 24.0586 5.72266 23.7773 5.70703 23.4336L4.89844 6.6875H2.75391L3.57422 23.7969C3.61328 24.7031 3.90234 25.4102 4.44141 25.918C4.98828 26.4258 5.71484 26.6797 6.62109 26.6797ZM8.55469 22.707C8.79688 22.707 8.98828 22.6367 9.12891 22.4961C9.27734 22.3555 9.35156 22.168 9.35156 21.9336L8.98828 9.65234C8.98828 9.42578 8.91406 9.24219 8.76562 9.10156C8.61719 8.96094 8.42188 8.89062 8.17969 8.89062C7.9375 8.89062 7.74219 8.96484 7.59375 9.11328C7.44531 9.25391 7.375 9.4375 7.38281 9.66406L7.73438 21.9453C7.74219 22.1797 7.82031 22.3672 7.96875 22.5078C8.11719 22.6406 8.3125 22.707 8.55469 22.707ZM12 22.707C12.25 22.707 12.4492 22.6367 12.5977 22.4961C12.7539 22.3555 12.832 22.1719 12.832 21.9453V9.66406C12.832 9.4375 12.7539 9.25391 12.5977 9.11328C12.4492 8.96484 12.25 8.89062 12 8.89062C11.7578 8.89062 11.5586 8.96484 11.4023 9.11328C11.2539 9.25391 11.1797 9.4375 11.1797 9.66406V21.9453C11.1797 22.1719 11.2539 22.3555 11.4023 22.4961C11.5586 22.6367 11.7578 22.707 12 22.707ZM15.457 22.707C15.6914 22.707 15.8828 22.6406 16.0312 22.5078C16.1797 22.3672 16.2578 22.1797 16.2656 21.9453L16.6172 9.66406C16.625 9.4375 16.5547 9.25391 16.4062 9.11328C16.2656 8.96484 16.0703 8.89062 15.8203 8.89062C15.5859 8.89062 15.3945 8.96094 15.2461 9.10156C15.0977 9.24219 15.0195 9.42969 15.0117 9.66406L14.6602 21.9336C14.6523 22.168 14.7188 22.3555 14.8594 22.4961C15.0078 22.6367 15.207 22.707 15.457 22.707Z"
                    fill="#E0DCC5"
                  />
                </svg>
              </div>
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
            <div className="rebuild" onClick={this.rebuild}>
              <h3>rebuild</h3>
              <svg
                width="28"
                height="35"
                viewBox="0 0 28 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.046875 20.8281C0.046875 22.7656 0.40625 24.5833 1.125 26.2812C1.85417 27.9688 2.85417 29.4531 4.125 30.7344C5.39583 32.0156 6.875 33.0104 8.5625 33.7188C10.2604 34.4375 12.0781 34.7969 14.0156 34.7969C15.9427 34.7969 17.75 34.4375 19.4375 33.7188C21.125 33.0104 22.6094 32.0156 23.8906 30.7344C25.1719 29.4531 26.1667 27.9688 26.875 26.2812C27.5938 24.5833 27.9531 22.7656 27.9531 20.8281C27.9531 20.3594 27.8073 19.9792 27.5156 19.6875C27.2344 19.3958 26.8594 19.25 26.3906 19.25C25.9427 19.25 25.5781 19.3958 25.2969 19.6875C25.026 19.9792 24.8906 20.3594 24.8906 20.8281C24.8906 22.3385 24.6094 23.7552 24.0469 25.0781C23.4844 26.3906 22.7031 27.5521 21.7031 28.5625C20.7135 29.5625 19.5573 30.3438 18.2344 30.9062C16.9219 31.4583 15.5156 31.7344 14.0156 31.7344C12.4948 31.7344 11.0781 31.4583 9.76562 30.9062C8.45312 30.3438 7.29688 29.5625 6.29688 28.5625C5.30729 27.5521 4.53125 26.3906 3.96875 25.0781C3.40625 23.7552 3.125 22.3385 3.125 20.8281C3.125 19.3073 3.40104 17.8854 3.95312 16.5625C4.51562 15.2396 5.29167 14.0833 6.28125 13.0938C7.27083 12.0938 8.41667 11.3125 9.71875 10.75C11.0312 10.1875 12.4479 9.90625 13.9688 9.90625C14.4792 9.90625 14.9688 9.93229 15.4375 9.98438C15.9062 10.026 16.3385 10.0885 16.7344 10.1719L12.4844 14.375C12.349 14.5208 12.2396 14.6823 12.1562 14.8594C12.0833 15.026 12.0469 15.2083 12.0469 15.4062C12.0469 15.8333 12.1927 16.1927 12.4844 16.4844C12.776 16.776 13.1302 16.9219 13.5469 16.9219C13.9948 16.9219 14.3542 16.7812 14.625 16.5L21.0312 10.0312C21.1979 9.86458 21.3177 9.6875 21.3906 9.5C21.474 9.3125 21.5156 9.11458 21.5156 8.90625C21.5156 8.46875 21.3542 8.09375 21.0312 7.78125L14.625 1.25C14.3438 0.958333 13.9844 0.8125 13.5469 0.8125C13.1198 0.8125 12.7604 0.963542 12.4688 1.26562C12.1875 1.55729 12.0469 1.92188 12.0469 2.35938C12.0469 2.55729 12.0833 2.74479 12.1562 2.92188C12.2292 3.08854 12.3333 3.24479 12.4688 3.39062L16.25 7.125C15.8958 7.05208 15.526 6.99479 15.1406 6.95312C14.7656 6.91146 14.375 6.89062 13.9688 6.89062C12.0312 6.89062 10.2188 7.25521 8.53125 7.98438C6.85417 8.70312 5.38021 9.69792 4.10938 10.9688C2.83854 12.2396 1.84375 13.7188 1.125 15.4062C0.40625 17.0938 0.046875 18.901 0.046875 20.8281Z"
                  fill="#E0DCC5"
                />
              </svg>
            </div>
            <div className="download" onClick={this.generateImage}>
              <svg
                width="30"
                height="35"
                viewBox="0 0 30 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 34.2969H24C25.6875 34.2969 26.9635 33.8646 27.8281 33C28.6927 32.1458 29.125 30.8854 29.125 29.2188V13.8438C29.125 12.1771 28.6927 10.9167 27.8281 10.0625C26.9635 9.19792 25.6875 8.76562 24 8.76562H19.75V11.8438H23.7969C24.5156 11.8438 25.0677 12.0365 25.4531 12.4219C25.849 12.7969 26.0469 13.3646 26.0469 14.125V28.9531C26.0469 29.7135 25.849 30.2812 25.4531 30.6562C25.0677 31.0417 24.5156 31.2344 23.7969 31.2344H6.1875C5.45833 31.2344 4.90104 31.0417 4.51562 30.6562C4.14062 30.2812 3.95312 29.7135 3.95312 28.9531V14.125C3.95312 13.3646 4.14062 12.7969 4.51562 12.4219C4.90104 12.0365 5.45833 11.8438 6.1875 11.8438H10.2656V8.76562H6C4.3125 8.76562 3.03646 9.19792 2.17188 10.0625C1.30729 10.9167 0.875 12.1771 0.875 13.8438V29.2188C0.875 30.8958 1.30729 32.1615 2.17188 33.0156C3.03646 33.8698 4.3125 34.2969 6 34.2969ZM15 24.1719C15.1875 24.1719 15.3698 24.1406 15.5469 24.0781C15.724 24.0052 15.9062 23.875 16.0938 23.6875L21.3438 18.625C21.6146 18.3542 21.75 18.0469 21.75 17.7031C21.75 17.3385 21.6198 17.0417 21.3594 16.8125C21.1094 16.5833 20.8073 16.4688 20.4531 16.4688C20.0677 16.4688 19.7448 16.6094 19.4844 16.8906L17.2969 19.2188L16.2969 20.3594L16.4531 18.0312V1.84375C16.4531 1.45833 16.3073 1.125 16.0156 0.84375C15.7344 0.5625 15.3958 0.421875 15 0.421875C14.6042 0.421875 14.2604 0.5625 13.9688 0.84375C13.6875 1.125 13.5469 1.45833 13.5469 1.84375V18.0312L13.7031 20.3594L12.6875 19.2188L10.5 16.8906C10.25 16.6094 9.92708 16.4688 9.53125 16.4688C9.16667 16.4688 8.85938 16.5833 8.60938 16.8125C8.36979 17.0417 8.25 17.3385 8.25 17.7031C8.25 18.0469 8.38021 18.3542 8.64062 18.625L13.8906 23.6875C14.0885 23.875 14.276 24.0052 14.4531 24.0781C14.6302 24.1406 14.8125 24.1719 15 24.1719Z"
                  fill="#E0DCC5"
                />
              </svg>
            </div>
            {/* <SC_Button text="rebuild" handleClick={this.rebuild}></SC_Button> */}
            {/* <SC_Button
              text="download"
              handleClick={this.generateImage}
            ></SC_Button> */}
          </div>
          <div className="Sketch" id="Sketch"></div>
        </div>
      </div>
    )
  }
}
