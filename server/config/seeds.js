const db = require('./connection');

const {
  User
} = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  const users = await User.insertMany([{
      firstName: '',
      businessName: '',
      email: 'pamela@testmail.com',
      password: 'password12345',
      suburb: '',
      phoneNumber: '',
      channel: ''
    },
    {
      firstName: '',
      businessName: '',
      email: 'darcy@gmail.com',
      password: 'darcyiscool',
      suburb: '',
      phoneNumber: '',
      channel: ''
    },
    {
      firstName: '',
      businessName: '',
      email: 'eholt@testmail.com',
      password: 'password246',
      suburb: '',
      phoneNumber: '',
      channel: ''
    },
    {
      firstName: 'Amy',
      businessName: 'Victorian Food Distributors',
      email: 'admin@vicfooddist.com.au',
      password: 'password99',
      suburb: 'Sunshine West',
      phoneNumber: '+61421121214',
      channel: 'Distributor'
    },
    {
      firstName: 'Abby',
      businessName: 'Surrey Food Store',
      email: 'info@surreyfoodstore.com.au',
      password: 'pword1978',
      suburb: 'Surrey Hills',
      phoneNumber: '',
      channel: 'Direct'
    },
    {
      firstName: 'Josh',
      businessName: 'Artisan Gourmet Foods',
      email: 'josh@artisangourmetfoods.com.au',
      password: 'password987',
      suburb: '',
      phoneNumber: '',
      channel: 'Direct'
    },
    {
      firstName: 'Harry',
      businessName: 'Super Pies Company',
      email: 'info@superpiesco.com.au',
      password: 'hello2000',
      suburb: 'Heidelberg West',
      phoneNumber: '0433221221',
      channel: 'Special'
    }
  ]);

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
      price: 'price on application'
    },
    {
      name: 'Commercial Puff Pastry 10kg',
      description: 'Commercial Puff Pastry 10kg - Vegan',
      price: 'price on application'
    },
    {
      name: 'Premium Puff Pastry 5kg',
      description: 'Premium Puff Pastry 5kg',
      price: 'price on application'
    },
    {
      name: 'Premium Puff Pastry 10kg',
      description: 'Premium Puff Pastry 10kg',
      price: 'price on application'
    },
    {
      name: 'French Puff Pastry 10kg',
      description: 'French Puff Pastry 10kg',
      price: 'price on application'
    },
    {
      name: 'Butter Puff Pastry 5kg',
      description: 'Butter Puff Pastry 5kg',
      price: 'price on application'
    },
    {
      name: 'Short Crust Pastry 5kg',
      description: 'Short Crust Pastry 5kg',
      price: 'price on application'
    },
    {
      name: 'Short Crust Pastry 10kg',
      description: 'Short Crust Pastry 10kg',
      price: 'price on application'
    },
    {
      name: 'Savoury Short Crust Pastry 10kg',
      description: 'Savoury Short Crust Pastry 10kg',
      price: 'price on application'
    },
    {
      name: 'Butter Short Crust Pastry 5kg',
      description: 'Butter Short Crust Pastry 5kg',
      price: 'price on application'
    },
    {
      name: 'Pie Base Short Crust Pastry 10kg',
      description: 'Pie Base Short Crust Pastry 10kg - Vegan',
      price: 'price on application'
    },
    {
      name: 'Sweet Crust Pastry 4kg',
      description: 'Sweet Crust Pastry 4kg',
      price: 'price on application'
    }
  ]);

  console.log('Products seeded');

  process.exit();
});

const {
  Enquiry
} = require('../models');

db.once('open', async () => {
  await Enquiry.deleteMany();

  const enquiries = await Enquiry.insertMany([{
      businessName: 'Cakes R Us',
      firstName: 'Pam',
      email: 'pamela@testmail.com',
      // password: 'password12345',
      phoneNumber: '',
      suburb: 'Northcote',
      queries: 'I would like a sample of your Commercial Puff Pastry, please.  & a cost per kg price.',
    },
    {
      businessName: 'Eastern Food Distributors',
      firstName: 'Carolyn',
      email: 'admin@easternfooddist.com.au',
      // password: 'password79',
      phoneNumber: '+61421132114',
      suburb: 'Altona',
      queries: 'I would like to purchase some award-winning Puff Pastry from you.',
    },
    {
      businessName: 'Surrey Food Store',
      firstName: 'Abby',
      email: 'info@surreyfoodstore.com.au',
      // password: 'pword1978',
      phoneNumber: '',
      suburb: 'Surrey Hills',
      queries: 'Please send me a copy of our latest statement.',
    },
    {
      businessName: 'Artisan Gourmet Foods',
      firstName: 'Jamie',
      email: 'jamie@artisangourmetfoods.com.au',
      // password: 'password987',
      phoneNumber: '',
      suburb: 'Ormond',
      queries: 'Would you deliver our order on Monday next week, instead of Tuesday. Thank you!',
    }
  ]);

  console.log('Enquiries seeded');

  process.exit();
});