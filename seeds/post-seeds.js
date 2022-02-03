const { MP } = require('../models');

const mpData = [{
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

const seedMP = () => MP.bulkCreate(mpData)