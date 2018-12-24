const express = require('express')
const app = express()

app.use('/', api)


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const port = 4500
app.listen(port, function(){
    console.log(`Running on port ${port}`)
})