import React from "react";
import pies from '../images/pies-hero-photo.jpg';
import xmas from '../images/mince-pies-photo.JPG';

import { Container } from "../components/Container";
import { Footer } from '../components/Footer';
import { H2 } from '../components/Text';
import { P } from '../components/Text';

const Home = () => {
  return (
    <Container alignContent="center">
      <H2>Welcome, Hospitality world!</H2>
      <P className='home-blurb'>We are 'Pastry Master'</P>
      <P> and our aim is to make it easy for you to create your gourmet masterpieces.</P>
      <br />
      <div className='photo'>
        <img src={ pies } height={300} width={400} alt='wooden trays of pies' />
      </div>
      <br />
      <P className='home-blurb'>Try our all-natural Sweet Crust pastry </P>
      <P> for your mince pies this Christmas!</P>
      <div className='photo'>
        <img src={ xmas } height={300} width={400} alt='plate of christmas mince pies' />
      </div>
      <br />
      <Footer alignContent='center' />
    </Container>
  );
};

export default Home;