const bcrypt = require('bcrypt');
const password = "12345"
const hash = bcrypt.hashSync(password, 10);

const { User } = require('../models');

const userData = [{
    username: 'alex',
    email: 'alex@gmail.com',
    password: hash,
},
{
    username: 'stephanie',
    email: 'steph@gmail.com',
    password: hash,
},
{
    username: 'connor',
    email: 'connor@gmail.com',
    password: hash,
},
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;