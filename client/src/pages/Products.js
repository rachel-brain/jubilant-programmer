import React from 'react';

import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { H2 } from '../components/Text';
import { P } from '../components/Text';
import Productcard from '../components/Productcard';

const Products = () => {
  return (
    <Container alignContent='center'>
      <H2>Our Product Range</H2>
      <br />
          <Productcard alignContent='center'>
          </Productcard>

          <Productcard alignContent='center'>
          </Productcard>

          <Productcard alignContent='center'>
          </Productcard>

          <Productcard alignContent='center'>
          </Productcard>

          <Productcard alignContent='center'>
          </Productcard>

          <Productcard alignContent='center'>
          </Productcard>

          <Productcard alignContent='center'>
          </Productcard>

          <Productcard alignContent='center'>
          </Productcard>

          <Productcard alignContent='center'>
          </Productcard>

          <Productcard alignContent='center'>
          </Productcard>

          <Productcard alignContent='center'>
          </Productcard>

          <Productcard alignContent='center'>
          </Productcard>

      <br />
      <P className='range-blurb'>
        If you have specific requirements regarding roll width or pastry 
        thickness, speak to us about what Pastry Master can do for you.</P>
      <Footer alignContent='center' />
    </Container>
  );
};

export default Products;