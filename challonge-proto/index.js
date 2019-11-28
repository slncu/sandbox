const axios = require('axios')

async function hoge() {
  const result = await axios.get(
    'https://sinc712:qHUZS0E8KB0cjKBK4SeNgxuG3zGFtyzM68LxI0s1@api.challonge.com/v1/tournaments.json'
  )
  console.log(result)
}

hoge()
