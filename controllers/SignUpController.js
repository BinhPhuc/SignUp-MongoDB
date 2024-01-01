const mongoose = require('mongoose');
class SignUpController {
    index(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const data = {
            name,
            email,
            password
        };
        mongoose.connection.collection('users').insertOne(data, (err, collection) => {
            if (err) {
                throw err;
            }
            console.log("Record inserted successfully");
        });
        res.send("Sign Up Successfully!")
    }
}

module.exports = new SignUpController();