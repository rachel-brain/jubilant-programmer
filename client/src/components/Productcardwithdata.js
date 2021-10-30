import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Products from '../pages/Products';
import { H2 } from './Text';
import { H3 } from './Text';
import { H4 } from './Text';


const Productcard = (name, description, price, ingredientList) => {
  let productData = [
    {
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
    },
    ]
  return (
    <div>
    {productData.map((product) => (
    <Products>
    <Card key={product._id} sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', minWidth: 225, variant: 'outlined' }}>
      <CardContent>
        <Typography component = "div" sx={{ fontSize: 24 }} gutterBottom>
            <H2>{product.name}</H2>
        </Typography>
        <Typography component = "div" sx={{ fontSize: 20 }} color="text.secondary" gutterBottom >
            <H3>{product.description}</H3>
        </Typography>
        <Typography component = "div" sx={{ mb: 1.5 }} >
          <H4>{product.price}</H4>
        </Typography>
        <Typography component = "div" variant="body2">
            <H4>{product.ingredientList}</H4>
          <br />
        </Typography>
      </CardContent>
    </Card>
    </Products>
    ))}
    </div>
  );
};

export default Productcard;