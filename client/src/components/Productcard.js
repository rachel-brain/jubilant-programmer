import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import styled from 'styled-components';
import { color, shape } from '../styles';
import { H2 } from '../components/Text';
import { H3 } from '../components/Text';
import { H4 } from '../components/Text';

function Productcard() {
  return (
    <Card sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', minWidth: 225, variant: 'outlined' }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} gutterBottom>
            <H2>Commercial Puff Pastry</H2>
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom >
            <H3>5kg and 10kg rolls</H3>
            <H3>VEGAN</H3>
        </Typography>
        <Typography sx={{ mb: 1.5 }} >
          <H4>Ingredients:</H4>
        </Typography>
        <Typography variant="body2">
            <H4>Wheat Flour, Margarine [Vegetable Oils & Fats, Water, Salt, Emulsifiers (471, 322 [Soy-derived]), 
            Preservative (202), Acidity Regulator (330), Antioxidant (307b)], Water, Salt, Preservative (202), 
            Dough Conditioner (920)</H4>
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Productcard;