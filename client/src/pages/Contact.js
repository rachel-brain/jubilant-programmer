import React from 'react';

import { Container } from "../components/Container";
import { H2 } from '../components/Text';
import { H3 } from '../components/Text';
import { P } from '../components/Text';

const Contact = () => {
  return (
    <Container alignContent="center">
      <H2>Make Contact with us</H2>
      <H3>Existing customer? Sign up or Log in here:</H3>
      {/* Add 1st Form here  */}
      <P className='form-blurb' >
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet efficitur. 
      </P>
      <br />
      <H3>Not a customer yet?  Get in touch here to request a free sample roll of pastry and try it for yourself.</H3>
      {/* Add 2nd Form here  */}
      <P className='form-blurb' >
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet efficitur. 
      </P>
  </Container>   
  );
};

export default Contact;