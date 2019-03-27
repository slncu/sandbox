import React, { Component } from 'react'
import Confetti from 'react-confetti'
import './App.css'

const month2day = month => month * 30
const year2day = year => year * 365
const int = str => parseInt(str, 10)

class App extends Component {
  state = {
    cost: 30000,
    year: 10,
    month: 1,
    day: 15,
    result: '',
    height: '',
    width: '',
  }

  componentDidMount() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  calculate = () => {
    const { cost, year, month, day } = this.state
    const totalDays = int(year2day(year)) + int(month2day(month)) + int(day)
    this.setState({
      result: cost / totalDays,
    })
  }

  render() {
    const { cost, year, month, day, result, width, height } = this.state

    return (
      <div className='App'>
        <header className='App-header'>
          <div className='content'>
            <div className='content-header'>
              あなたの買いたいものは、￥
              <input
                type='text'
                defaultValue={cost}
                onChange={e => this.setState({ cost: e.target.value })}
              />
              なので、
            </div>
            <div className='content-body'>
              <input
                type='text'
                defaultValue={year}
                onChange={e => this.setState({ year: e.target.value })}
              />
              年
              <input
                type='text'
                defaultValue={month}
                onChange={e => this.setState({ month: e.target.value })}
              />
              ヶ月
              <input
                type='text'
                defaultValue={day}
                onChange={e => this.setState({ day: e.target.value })}
              />
              日使ったら、
            </div>
            <button onClick={this.calculate}>結果を表示</button>
            {result !== '' && <div className='overlay' />}
            <div className={`result ${result !== '' ? '' : 'hidden'}`}>
              1日あたり、￥{result}なので、<h1>実質無料！！</h1>
            </div>
            {result !== '' && <Confetti width={width} height={height} />}
          </div>
        </header>
      </div>
    )
  }
}

export default App
