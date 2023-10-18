import express from 'express'
import cors from 'cors'

import { client } from './src/connectDb.js'
import { addMenuItem, getAllMenuItems } from './src/menu.js'

const app = express()
app.use(cors())
app.use(express.json())

// Add some routes
app.get("/", (req, res) => {
    res.send('hello')
})
app.post("/menu", addMenuItem)
app.get("/menu", getAllMenuItems)

const port = 3000;
app.listen(port, () => console.log(`listneing on port ${port}`))