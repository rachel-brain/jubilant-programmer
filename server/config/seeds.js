const db = require('./connection');

const {
  User
} = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  await User.create({
    email: 'pamela@testmail.com',
    password: 'password12345'
  });

  await User.create({
    email: 'darcy@gmail.com',
    password: 'darcyiscool'
  });

  await User.create({
    email: 'eholt@testmail.com',
    password: 'password246'
  });

  await User.create({
    businessName: 'Victorian Food Distributors',
    firstName: 'Amy',
    email: 'admin@vicfooddist.com.au',
    password: 'password99',
    channel: 'Distributor',
  });

  await User.create({
    businessName: 'Surrey Food Store',
    firstName: 'Abby',
    email: 'info@surreyfoodstore.com.au',
    password: 'pword1978',
    channel: 'Direct',
  });

  await User.create({
    businessName: 'Artisan Gourmet Foods',
    firstName: 'Josh',
    email: 'josh@artisangourmetfoods.com.au',
    password: 'password987',
    channel: 'Direct',
  });

  await User.create({
    businessName: 'Super Pies Company',
    firstName: 'Harry',
    email: 'info@superpiesco.com.au',
    password: 'hello2000',
    channel: 'Special',
  });

  console.log('Users seeded');

  process.exit();
});

const {
  Channel
} = require('../models');

db.once('open', async () => {
  await Channel.deleteMany();

  const channels = await Channel.insertMany([{
      name: 'Distributor'
    },
    {
      name: 'Direct'
    },
    {
      name: 'Special'
    }
  ]);

  console.log('Channels seeded');

  process.exit();
});

  const {
    Product
  } = require('../models');
  
  db.once('open', async () => {
  await Product.deleteMany();

  const products = await Product.insertMany([{
      name: 'Commercial Puff Pastry 5kg',
      description: 'Commercial Puff Pastry 5kg - Vegan',
      price: 50.00
    },
    {
      name: 'Commercial Puff Pastry 10kg',
      description: 'Commercial Puff Pastry 10kg - Vegan',
      price: 50.00
    },
    {
      name: 'Premium Puff Pastry 5kg',
      description: 'Premium Puff Pastry 5kg',
      price: 50.00
    },
    {
      name: 'Premium Puff Pastry 10kg',
      description: 'Premium Puff Pastry 10kg',
      price: 50.00
    },
    {
      name: 'French Puff Pastry 10kg',
      description: 'French Puff Pastry 10kg',
      price: 50.00
    },
    {
      name: 'Butter Puff Pastry 5kg',
      description: 'Butter Puff Pastry 5kg',
      price: 50.00
    },
    {
      name: 'Short Crust Pastry 5kg',
      description: 'Short Crust Pastry 5kg',
      price: 50.00
    },
    {
      name: 'Short Crust Pastry 10kg',
      description: 'Short Crust Pastry 10kg',
      price: 50.00
    },
    {
      name: 'Savoury Short Crust Pastry 10kg',
      description: 'Savoury Short Crust Pastry 10kg',
      price: 50.00
    },
    {
      name: 'Butter Short Crust Pastry 5kg',
      description: 'Butter Short Crust Pastry 5kg',
      price: 50.00
    },
    {
      name: 'Pie Base Short Crust Pastry 10kg',
      description: 'Pie Base Short Crust Pastry 10kg - Vegan',
      price: 50.00
    },
    {
      name: 'Sweet Crust Pastry 4kg',
      description: 'Sweet Crust Pastry 4kg',
      price: 50.000
    }
  ]);

  console.log('Products seeded');

  process.exit();
});