const {User} = require('../models');

const userData = [
    {
      name: "Cassie", 
      email: "cassandrakise@gmail.com",
      password: "jpcmwca5school"
    },
    {
      name: "HelenFeng",
      email: "helenfeng@gmail.com",
      password: "fsgsa3e666"
    },
    {
      name: "Anjali Fortani",
      email: "afortani20@earthlink.net",
      password: "armon85school"
    }
]
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;