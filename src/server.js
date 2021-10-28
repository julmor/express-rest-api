const express = require('express')

const port = process.env.port || 3030
const app = express()

app.listen(port, () =>{
    console.log(`Express started in ${port}`)
})

app.get('/', (req, res) => {
    res.send("Hello")    
})