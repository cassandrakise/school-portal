const postData = require('./postData');
const userData = require('./userData');

const sequelize = require('../config/connection'); 

const seedDatabase = async () => { 
  await sequelize.sync({ force: true }); 
    console.log('\n----- DATABASE SYNCED -----\n');

  await userData();
    console.log('\n----- USER SEEDED -----\n');

  await postData();
    console.log('\n----- POST SEEDED -----\n');
  

  process.exit(0); 
};

seedDatabase(); 

