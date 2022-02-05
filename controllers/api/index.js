const app = require('express')

const PORT = 8080

app.length('/parking', (req, res) => {
    res.status(200).send({
        location:
        radius: 500,
        type: 'parking'
        openNow: true,
        key: "AIzaSyB9hovmDjqkP0Ybn9L35wT3fGwLVf03ieM"
    })
})

app.listen(
    PORT,
    () => console.log()
)