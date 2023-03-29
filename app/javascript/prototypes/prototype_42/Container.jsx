import React, { Component, useState } from 'react'
import SC_Button from '../../components/SC_Button'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      templateCells: '',
      templateBackground: '',
      templateBorder: ''
    }
  }

  handleSendToLocalStorage = () => {
    new Promise((resolve, reject) => {
      localStorage.setItem('cellsAmount', this.state.cells)
      localStorage.setItem(
        'TemplateBackgroundColorInput',
        this.state.templateBackground
      )
      localStorage.setItem(
        'TemplateBorderColorInput',
        this.state.templateBorder
      )
      localStorage.setItem('TemplateCellsInput', this.state.templateCells)
      resolve()
    })
    window.location.reload()
  }

  handleOption1CellsAmount = () => {
    const { templateCells } = this.state
    this.setState({
      templateCells: '32'
    })
    console.log(templateCells)
  }

  handleOption2CellsAmount = () => {
    const { templateCells } = this.state
    this.setState({
      templateCells: '64'
    })
    console.log(templateCells)
  }

  handleWhiteTemplateColor = () => {
    const { templateBackground } = this.state
    this.setState({
      templateBackground: 'backgroundWhite'
    })
    const { templateBorder } = this.state
    this.setState({
      templateBorder: 'borderWhite'
    })
    console.log(templateBackground, templateBorder)
  }

  handleGreenTemplateColor = () => {
    const { templateBackground } = this.state
    this.setState({
      templateBackground: 'backgroundGreen'
    })
    const { templateBorder } = this.state
    this.setState({
      templateBorder: 'borderGreen'
    })
    console.log(templateBackground, templateBorder)
  }

  handleBlueTemplateColor = () => {
    const { templateBackground } = this.state
    this.setState({
      templateBackground: 'backgroundBlue'
    })
    const { templateBorder } = this.state
    this.setState({
      templateBorder: 'borderBlue'
    })
    console.log(templateBackground, templateBorder)
  }

  handleGreyTemplateColor = () => {
    const { templateBackground } = this.state
    this.setState({
      templateBackground: 'backgroundGrey'
    })
    const { templateBorder } = this.state
    this.setState({
      templateBorder: 'borderGrey'
    })
    console.log(templateBackground, templateBorder)
  }

  render() {
    return (
      <div className="Container">
        <h2>hi! first of all, pick the kind of plate you have</h2>
        <div className="PickerSet">
          <div className="SizePicker">
            <h1>size</h1>
            <div className="SizePickerOptions">
              <div className="SizePickerOption1">
                <div className="Option1PlateSize">
                  <div
                    onClick={this.handleOption1CellsAmount}
                    className="Option1Plate"
                  ></div>
                </div>
                <h4>32x32cm</h4>
              </div>
              <div className="SizePickerOption2">
                <div
                  onClick={this.handleOption2CellsAmount}
                  className="Option2PlateSize"
                ></div>
                <h4>64x64cm</h4>
              </div>
            </div>
          </div>
          <div className="ColorPicker">
            <h1>color</h1>
            <div className="ColorPickerOptions">
              <div
                onClick={this.handleWhiteTemplateColor}
                className="ColorPickerOption1"
              >
                <div className="Option1PlateColor"></div>
                <h4>white</h4>
              </div>
              <div
                onClick={this.handleGreenTemplateColor}
                className="ColorPickerOption2"
              >
                <div className="Option2PlateColor"></div>
                <h4>green</h4>
              </div>

              <div
                onClick={this.handleBlueTemplateColor}
                className="ColorPickerOption3"
              >
                <div className="Option3PlateColor"></div>
                <h4>blue</h4>
              </div>
              <div
                onClick={this.handleGreyTemplateColor}
                className="ColorPickerOption4"
              >
                <div className="Option4PlateColor"></div>
                <h4>grey</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="BottomRows">
          <h3>you don’t have any?</h3>
          <div className="rowWithLink">
            <h3>well, you have to buy one...</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lego.com/en-us/product/white-baseplate-11026"
            >
              <div className="link">
                <h1>link</h1>
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6402 10.4584L15.3794 12.7468C16.2718 12.826 17.0403 13.0043 17.6848 13.2817C18.3293 13.5591 18.8747 13.9256 19.3209 14.3813C20.1637 15.2233 20.7239 16.1496 21.0016 17.16C21.2792 18.1705 21.2792 19.1809 21.0016 20.1914C20.7338 21.2018 20.1835 22.1231 19.3506 22.9552L14.3978 27.8886C13.5649 28.7207 12.6427 29.2755 11.6314 29.5528C10.62 29.8302 9.60859 29.8302 8.5972 29.5528C7.58581 29.2854 6.66366 28.7306 5.83076 27.8886C4.98793 27.0465 4.4277 26.1203 4.15007 25.1099C3.87243 24.0994 3.87243 23.089 4.15007 22.0785C4.4277 21.0681 4.98298 20.1468 5.81588 19.3147L8.35922 16.7737C8.12125 16.2387 7.96756 15.6592 7.89815 15.0351C7.82874 14.4011 7.86345 13.7919 8.00226 13.2074L3.71874 17.4572C2.50904 18.6757 1.69597 20.023 1.27951 21.499C0.872975 22.9651 0.872975 24.4362 1.27951 25.9123C1.69597 27.3883 2.514 28.7356 3.73361 29.9541C4.97306 31.1923 6.33149 32.0146 7.80891 32.4207C9.28633 32.8269 10.7588 32.8219 12.2263 32.4059C13.7037 31.9997 15.0473 31.1923 16.257 29.9838L21.4329 24.8127C22.6426 23.5942 23.4507 22.2519 23.8572 20.7857C24.2737 19.3097 24.2787 17.8337 23.8721 16.3576C23.4656 14.8816 22.6476 13.5343 21.418 12.3158C20.9817 11.8701 20.4562 11.4887 19.8414 11.1717C19.2366 10.8547 18.5028 10.6169 17.6402 10.4584ZM16.3165 22.985L18.5772 20.7115C17.6848 20.6223 16.9164 20.439 16.2718 20.1617C15.6372 19.8843 15.0919 19.5227 14.6358 19.0769C13.783 18.225 13.2179 17.2938 12.9402 16.2833C12.6626 15.2729 12.6626 14.2624 12.9402 13.252C13.2179 12.2415 13.7781 11.3203 14.6209 10.4881L19.544 5.56963C20.3967 4.72759 21.3238 4.16789 22.3253 3.89051C23.3367 3.61313 24.3431 3.61313 25.3446 3.89051C26.356 4.15798 27.288 4.71769 28.1408 5.56963C28.9737 6.40176 29.529 7.32801 29.8066 8.34836C30.0941 9.3588 30.0941 10.3692 29.8066 11.3797C29.529 12.3802 28.9737 13.2966 28.1408 14.1287L25.5974 16.6697C25.8354 17.2145 25.9891 17.8039 26.0585 18.438C26.1279 19.062 26.0982 19.6614 25.9693 20.2359L30.2379 15.9861C31.4476 14.7776 32.2557 13.4353 32.6623 11.9592C33.0787 10.4832 33.0787 9.00713 32.6623 7.53109C32.2557 6.05504 31.4427 4.70778 30.223 3.4893C28.9836 2.25101 27.6252 1.42879 26.1477 1.02263C24.6703 0.61647 23.1929 0.621423 21.7155 1.03749C20.248 1.44365 18.9044 2.25597 17.6848 3.47444L12.5386 8.63069C11.319 9.84917 10.501 11.1964 10.0845 12.6725C9.67799 14.1386 9.67799 15.6097 10.0845 17.0857C10.4911 18.5618 11.3141 19.914 12.5535 21.1424C12.9799 21.5783 13.4955 21.9547 14.1003 22.2717C14.7151 22.5887 15.4538 22.8265 16.3165 22.985Z"
                    fill="#E0DCC5"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>

        <a href="http://localhost:3000/prototypes/41">
          <SC_Button
            text="next page"
            handleClick={this.handleSendToLocalStorage}
          ></SC_Button>
        </a>
      </div>
    )
  }
}
