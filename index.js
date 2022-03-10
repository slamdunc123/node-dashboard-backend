const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

// test api 
app.get('/', (req, res) => {
    res.send('Express Backend Up And Running')
})

let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})