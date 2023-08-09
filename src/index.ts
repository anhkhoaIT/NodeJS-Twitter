import express from 'express'
import databaseService from './services/database.services'
// import routes
import usersRouter from '~/routes/users.routes'
const app = express()
const port = 3000
// middleware to parse json
app.use(express.json())
// middleware to include routes
app.use('/users', usersRouter)

databaseService.connect().catch(console.dir)
// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
