const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const port = 3000;

//Connect db
mongoose.connect("mongodb://127.0.0.1:27017/user_manager", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
)
.then(() => console.log("Connected to DB!"))
.catch(() => console.log("Failed to connect to DB!"));

// static file
app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const SignUp = require('./routes/SignUp');
app.use('/', SignUp);

app.get('/', (req, res) => {
    res.redirect('./public/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});