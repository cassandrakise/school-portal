const {User} = require('../models');

const userData = [{
        username: 'Scott',
        password: 'scott22'

    },
    {
        username: 'Vanesa',
        password: 'vanesa22'
    },
    {
        username: 'Walker',
        password: 'walker22'
    },
    {
        username: 'Jose',
        password: 'jose22'
    },
    {
        username: 'Bryn',
        password: 'bryn22'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;