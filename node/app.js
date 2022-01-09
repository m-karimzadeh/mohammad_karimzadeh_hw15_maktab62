const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
(async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/maktab62');

    } catch (err) {
        console.log('error: ' + err)
        process.exit(1);
    }
})()

const userRouter = require('./routes/user');

const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/file', express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);


app.use(function (req, res) {
    return res.send('not found :(');
})

app.listen(3000);