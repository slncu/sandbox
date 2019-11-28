import React, { Component } from 'react'
import axios from 'axios'
import API from '../const/api'

class Tournament extends Component {
  async componentDidMount() {
    console.log(API)
    const result = await axios.get(
      `https://sinc712:qHUZS0E8KB0cjKBK4SeNgxuG3zGFtyzM68LxI0s1@api.challonge.com/v1/tournaments.json`,
      {
        auth: {
          username: 'sinc712',
          'api-key': 'qHUZS0E8KB0cjKBK4SeNgxuG3zGFtyzM68LxI0s1'
        }
      }
    )
    console.log(result)
  }

  render() {
    return <div>test</div>
  }
}

export default Tournament
