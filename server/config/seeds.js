const db = require('./connection');
const { Channel } = require('../models');
const { Enquiry } = require('../models');
const { Order } = require('../models');
const { Product } = require('../models');
const { User } = require('../models');

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
      name: 'Commercial Puff Pastry',
      description: '5kg - Vegan',
      price: 'price on application',
      ingredientList: 'Wheat Flour, Margarine [Vegetable Oils & Fats, Water, Salt, Emulsifiers (471, 322 [Soy-derived]), Preservative (202), Acidity Regulator (330), Antioxidant (307b)], Water, Salt, Preservative (202), Dough Conditioner (920)'
    },
    {
      name: 'Commercial Puff Pastry',
      description: '10kg - Vegan',
      price: 'price on application',
      ingredientList: 'Wheat Flour, Margarine [Vegetable Oils & Fats, Water, Salt, Emulsifiers (471, 322 [Soy-derived]), Preservative (202), Acidity Regulator (330), Antioxidant (307b)], Water, Salt, Preservative (202), Dough Conditioner (920)'
    },
    {
      name: 'Premium Puff Pastry',
      description: '5kg',
      price: 'price on application',
      ingredientList: 'Wheat Flour, Margarine [Vegetable Oils & Fats, Water, Salt, Emulsifiers (471, 322 [Soy-derived]), Preservative (202), Acidity Regulator (330), Antioxidant (307b)], Water, Butter, Salt, Preservative (202), Dough Conditioner (920), Food Colours (102, 122)'
    },
    {
      name: 'Premium Puff Pastry',
      description: '10kg',
      price: 'price on application',
      ingredientList: 'Wheat Flour, Margarine [Vegetable Oils & Fats, Water, Salt, Emulsifiers (471, 322 [Soy-derived]), Preservative (202), Acidity Regulator (330), Antioxidant (307b)], Water, Butter, Salt, Preservative (202), Dough Conditioner (920), Food Colours (102, 122)'
    },
    {
      name: 'French Puff Pastry',
      description: '10kg',
      price: 'price on application',
      ingredientList: 'Wheat Flour, Margarine [Vegetable Oils & Fats, Water, Salt, Emulsifiers (471, 322 [Soy-derived]), Preservative (202), Acidity Regulator (330), Antioxidant (307b), Natural Flavour, Natural Colour (160a)], Water, Butter, Salt, Preservative (202), Food Colours (102, 122), Dough Conditioner (920)'
    },
    {
      name: 'Butter Puff Pastry',
      description: '5kg',
      price: 'price on application',
      ingredientList: 'Wheat Flour, Margarine [Vegetable Oils & Fats, Water, Salt, Emulsifiers (471, 322 [Soy-derived]),       Preservative (202), Acidity Regulator (330), Antioxidant (307b)], Water, Salt, Preservative (202), Dough Conditioner (920)'
    },
    {
      name: 'Short Crust Pastry',
      description: '5kg',
      price: 'price on application',
      ingredientList: 'Wheat Flour, Margarine [Vegetable Oils & Fats, Water, Salt, Emulsifiers (471, 322 [Soy-derived]), Preservative (202), Acidity Regulator (330), Antioxidant (307b)], Water, Salt, Preservative (202), Dough Conditioner (920)'
    },
    {
      name: 'Short Crust Pastry',
      description: '10kg',
      price: 'price on application',
      ingredientList: 'Wheat Flour, Margarine [Vegetable Oils & Fats, Water, Salt, Emulsifiers (471, 322 [Soy-derived]), Preservative (202), Acidity Regulator (330), Antioxidant (307b)], Water, Salt, Preservative (202), Dough Conditioner (920)'
    },
    {
      name: 'Savoury Short Crust Pastry',
      description: '10kg',
      price: 'price on application',
      ingredientList: 'Wheat Flour, Margarine [Vegetable Oils & Fats, Water, Salt, Emulsifiers (471, 322 [Soy-derived]), Preservative (202), Acidity Regulator (330), Antioxidant (307b), Natural Flavour, Natural Colour (160a)], Water, Butter, Salt, Preservative (202), Dough Conditioner (920), Food Colours (102, 122)'
    },
    {
      name: 'Butter Short Crust Pastry',
      description: '5kg',
      price: 'price on application',
      ingredientList: 'Wheat Flour, Water, Unsalted Butter, Salt, Preservative (202), Dough Conditioner (920)'
    },
    {
      name: 'Pie Base Short Crust Pastry',
      description: '10kg - Vegan',
      price: 'price on application',
      ingredientList: 'Wheat Flour, Water, Margarine [Vegetable Fats & Oils, Emulsifiers (Soy bean lecithin, 471), Antioxidant (307b [Soy bean-derived]), Colour (160a), Water, Salt, Acidity Regulators (331, 330), Flavours], Salt, Preservative (202), Dough Conditioner (920)'
    },
    {
      name: 'Sweet Crust Pastry',
      description: '4kg',
      price: 'price on application',
      ingredientList: 'Wheat Flour, Butter, Sugar, Eggs, Vanilla Flavour'
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