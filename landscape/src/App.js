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
  componentDidMount() {
    landscape()
  }

  render() {
    return (
      <div className='App'>
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
