const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users')

app.get('/', (req, res) => res.send('default route'))
app.use(bodyParser.json())
app.use(userRoutes)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log('app is listening on:', port)
})