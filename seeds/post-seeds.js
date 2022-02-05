const { Post } = require('../models');

const postData = [{
    name: 'Disneyland',
    type: 'Theme Park',
},
{
    name: 'SOFI Stadium',
    type: 'Sport and/or Concert Venue',
},
{
    name: 'The Colliseum',
    type: 'Sport and/or Concert Venue'
},

];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;