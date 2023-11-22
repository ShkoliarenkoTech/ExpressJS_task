// const http = require('http');
const mongoose = require('mongoose')
const express = require('express')
const routes = require('./api/routes/studentRoutes')
// const users = [{"name": "Mykola", "age": 28}];
const hostname = '127.0.0.1';
const port = 3000;
const app = express()

mongoose.connect('mongodb://localhost:27017/studentsdb')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

routes(app)

app.listen(port, hostname, () => {
    console.log(`Server running ${hostname} on ${port}`)
})

// app.get('/users', (req, res) => {
//     res.status(200).send(JSON.stringify(users))
// })

// const server = http.createServer((req, res) => {
//     if (req.url == 'users') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/json');
//         res.end(JSON.stringify(users));
//     }
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running ${hostname} on ${port}`)
// })