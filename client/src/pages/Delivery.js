import React from 'react';

import { Container } from "../components/Container";
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
      Type in your address here and we’ll show you who to contact to deliver to you: 
      </P>
      {/* Add Form here */}
  </Container>   
  );
};

export default Delivery;