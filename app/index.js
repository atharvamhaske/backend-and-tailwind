const express = require('express')
const app = express()

// const reqT = function (req, res, next) {
//     req.reqT = Date.now()
//     next()
// }

// app.use(reqT)

// app.get('/', (req, res) => {
//     let responseText = 'Hello World! <br>'
//     responseText += `<small>Req at: ${req.reqT}</small>`
//     res.send(responseText)
// })

// app.listen(3000)


// const logger = (req, res, next2) => {
//     console.log("hello")
//     next2()
// }

// app.use(logger)

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(3000)

// code for protecting admin route 

const proAdmin = (req, res, next) => {

    if (req.query.u === 'admin') {
        next()
    } else {
        res.send("your are not allowed as you are not an admin")
    } 
}

// the "proAdmin" middleware will only run under the "/admin" route

app.use('/admin', proAdmin)

app.get('/', (req, res) => {
    res.send("public page")
});

// this route us now protected by the "proAdmin" middleware

app.get('/admin/dashboard', (req, res) => {
    res.send("welcome to the admin dashboard")
});

app.listen(3000)

