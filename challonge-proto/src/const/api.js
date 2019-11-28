import { config } from 'dotenv'
config()

console.log(process.env)

export default {
  API_ROOT: 'https://@api.challonge.com/v1'
}
