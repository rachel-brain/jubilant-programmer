import React from 'react';

import { Container } from "../components/Container";
import { Footer } from '../components/Footer';
import { H2 } from '../components/Text';
import { P } from '../components/Text';

const Delivery = () => {
  return (
    <Container alignContent="center">
      <H2>Melbourne Metro Delivery</H2>
      <P className='delivery-blurb'>
        We deliver to Melbourne Metro areas from Monday to Friday.
        Contact us to determine which day of the week we deliver to your area. 
      </P>
      <br />
      <H2>Not based in Melbourne Metro?</H2>
      <P className='delivery-blurb'>
        We have a number of distributor partners who may deliver to your area within Victoria.
        Send us a query on the Contact page and we’ll let you know who delivers to your area and 
        we'll even pass your details on to the relevant distributor for you. 
      </P>
      <Footer alignContent='center' />
    </Container>   
  );
};

export default Delivery;