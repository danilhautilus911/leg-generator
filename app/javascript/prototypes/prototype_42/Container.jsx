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
