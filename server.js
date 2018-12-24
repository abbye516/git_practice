const express = require('express')
const app = express()

app.use('/', api)


const port = 4500
app.listen(port, function(){
    console.log(`Running on port ${port}`)
})