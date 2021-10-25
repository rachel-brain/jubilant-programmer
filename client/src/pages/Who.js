import React from 'react';
import victor from '../images/don-photo.jpeg';
import rachel from '../images/joan-photo.jpeg';

import { Container } from "../components/Container";
import { H2 } from '../components/Text';
import { H3 } from '../components/Text';
import { P } from '../components/Text';

const Who = () => {
  return (
    <Container alignContent="center">
      <H2>How to contact us</H2>
        <P className='who-blurb'><b>Address:</b></P>
        <P className='who-blurb'>1/56 Mologa Road</P>
        <P className='who-blurb'>Heidelberg West</P>
        <P className='who-blurb'>Victoria   3081</P>
        <P className='who-blurb'>Australia</P>
        <br />
        <P className='who-blurb'><b>Landline:</b> +613 9458 2220</P>
        <P className='who-blurb'><b>Email:</b> pastrymaster@optusnet.com.au</P>
        <P className='who-blurb'><b>Website:</b> www.pastrymaster.com.au</P>
        <br />
      <H2>Who we are</H2>
        <div className='photo'>
        <img src={ victor } height={200} width={190} alt='victors alter-ego' />
        </div>
        <H2>Victor Hartig</H2>
        <H3>Managing Director</H3>
        <P className='who-blurb'>35 years of management in Food Manufacture and Renewable Energy</P>
        <P className='who-blurb'><b>Mobile:</b> 0403 525 118</P>
        <br />
        <div className='photo'>
        <img src={ rachel } height={200} width={190} alt='victors alter-ego' />
        </div>
        <H2>Rachel Brain</H2>
        <H3>Head of Sales and Marketing</H3>
        <P className='who-blurb'>30 years of experience in the Food Industry</P>
        <P className='who-blurb'><b>Mobile:</b> 0432 297 755</P>
    </Container>
  );
};

export default Who;