require('dotenv').config()

const data = {
    UserEmail:process.env.email,
    Password:process.env.password,
    fname:process.env.fname,
    lname:process.env.lname
} 

module.exports = data