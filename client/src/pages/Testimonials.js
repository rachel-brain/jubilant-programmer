import React from 'react';

import { Container } from "../components/Container";
import { Footer } from '../components/Footer';
import { H1 } from '../components/Text';
import { H2 } from '../components/Text';
import { P } from '../components/Text';

const Testimonials = () => {
  return (
    <Container alignContent="center">
      <H1>Don't just take our word for it!</H1>
        {/* Add logo */}
        <H2>J and M Catering, Ballarat</H2>
        <P className='testimonial-blurb'>
        "Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet efficitur.
        In felis nisl, luctus non ante euismod, tincidunt bibendum mi." - Mark</P>
      <br />
        {/* Add logo */}
        <H2>Sweet by Nature, Heidelberg West</H2>
        <P className='testimonial-blurb'>
        "Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet efficitur. 
        Efficitur!" - Anna</P>
      <br />
        {/* Add logo */}
        <H2>Food for Fingers, Campbellfield</H2>
        <P className='testimonial-blurb'>
        "Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet efficitur.
        In felis nisl, luctus non ante euismod, tincidunt bibendum mi." - Markus</P>
        <Footer alignContent='center' />
    </Container>
  );
};

export default Testimonials;