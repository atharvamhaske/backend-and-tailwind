const express = require ('express');
const jwt = require ('jsonwebtoken');

const app = express()

app.use(express.json())

const JWT_SEC = 'seedhe_maut'


//1.middleware to check the token 

const verifyToken = (req, res, next) => {

    const authHeader = req.headers['authorization']

    const token = authHeader && authHeader.split(" ")[1]

    if(!token) {
        return res.status(401).json({message: 'Access denied. No token provided.'})
    }

    jwt.verify(token, JWT_SEC, (err, user) => {
        if(err) {
            return res.status(403).json({message: 'Token is invalid.'})
        }
        req.user = user
        next()
    });
};

app.post('/login', (req, res) => {
    const userPaylaod = {id: 123, username: "athx"}

    // sign the token

    const token = jwt.sign(userPaylaod, JWT_SEC, {expiresIn: '1h'})
    res.json({token: token})
});

app.get('/api/data', verifyToken, (req, res) => {
    res.send(`welcome ${req.user.username} here is your secret data`)
}); 

app.listen(3000)
console.log("server running on port 3000")