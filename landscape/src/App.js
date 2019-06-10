import React from 'react'
import logo from './logo.svg'
import './App.css'

function landscape() {
  document.getElementById('root').webkitRequestFullscreen()
  window.screen.orientation.lock('landscape').then(
    () => {
      console.log('ロックされました')
    },
    () => {
      console.log('ロックできませんでした')
    }
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSp: false
    }
  }
  componentDidMount() {
    landscape()
    if (window.screen.width < 400) {
      console.log('400以下です')
      this.setState({ isSp: true })
    }
  }

  render() {
    return (
      <div className={`App ${this.state.isSp ? 'sp' : 'pc'}`}>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
