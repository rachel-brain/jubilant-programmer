import React from 'react';

import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { H2 } from '../components/Text';
import { P } from '../components/Text';
import Productcard from '../components/Productcard';
import { grid } from '@mui/system';
import { Box } from '@mui/system';

const Products = () => {
  return (
    <Container alignContent='center'>
      <H2>Our Product Range</H2>
      <br />
      <Box display={{ grid }} grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Productcard alignContent='center'>
          </Productcard>
      </Box>
      <br />
      <br />
      <P className='range-blurb'>
        If you have specific requirements regarding roll width or pastry 
        thickness, speak to us about what Pastry Master can do for you.</P>
      <Footer alignContent='center' />
    </Container>
  );
};

export default Products;