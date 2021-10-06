require("dotenv").config();

const data = {
  UserEmail: process.env.email,
  userWithProfile:process.env.email_w_profile,
  Password: process.env.password,
  fname: process.env.fname,
  lname: process.env.lname,
};

module.exports = data;
