import dotenv from 'dotenv'
dotenv.config()
import http from 'http';
import App from './app.js';

const PORT = process.env.PORT || 8080
const server = http.createServer(App)

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})