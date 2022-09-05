require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDataBase = require('./databases/mongo/connection/database')
const linkRoute = require('./routes/link.route')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./docs/swagger.json')

const port = process.env.PORT || 3000
const app = express()

connectDataBase()

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(express.json())
app.use(cors())
app.use('/links', linkRoute)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
