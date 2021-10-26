import React from "react";
import hero from '../images/pies-hero-photo.jpg';

import { Container } from "../components/Container";
import { Footer } from '../components/Footer';
import { H2 } from '../components/Text';
import { P } from '../components/Text';

const Home = () => {
  return (
    <Container alignContent="center">
      <H2>Hello Hospitality world!</H2>
      <P className='home-blurb'>We are 'Pastry Master'.</P>
      <div className='photo'>
        <img src={ hero } height={300} width={400} alt='wooden trays of pies' />
      </div>
      <Footer alignContent='center' />
    </Container>
  );
};

export default Home;