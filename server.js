const app = require('express')()


app.get('/', (req,res) => {
    res.send('Hello!')
})

app.listen(process.env.PORT, () => {
    console.log(`Up and running on port: ${process.env.PORT}`)
})