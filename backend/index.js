const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const router = require('./routes/routes')


//middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// routes
app.use(router)

app.listen(4000, () => {
  console.log(`Escuchando en http://localhost:4000`)
})