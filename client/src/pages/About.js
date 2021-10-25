import React from 'react';

import { Container } from "../components/Container";
import { H2 } from '../components/Text';
import { P } from '../components/Text';
import { LI } from '../components/Text';

const About = () => {
  return (
    <Container alignContent="center">
      <H2>About Us</H2>
      <P className='about-blurb' >Since 1997, Pastry Master has been perfecting 
        a range of sweet, savoury and puff pastry recipes for all budgets.  
        Located in Melbourne, we make the pastry so you can focus on creating 
        your masterpieces.  
      </P>
      <br />
      <P className='about-blurb' >When you are ready, all you need to do is thaw, 
        unroll and create.
      </P>
      <br />
      <br />
      <H2>Our Secret</H2>
      <ul className='about-list'>
        <LI>Simple ingredients</LI>
        <LI>Sourced locally</LI>
        <LI>Consistent quality</LI>
        <LI>Manufactured 4 days per week</LI>
        <LI>Fast turn-around on order</LI>
        <LI>Once thawed, our pastry has a 7-day shelf-life</LI>
      </ul>
  </Container>   
  );
};

export default About;