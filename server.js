const app = require('express')()


app.get('/', (req,res) => {
    res.send('Olá mundo!')
})

const port = 5000
app.listen(port, () => {
    console.log(`Up and running on port: ${port}`)
})
