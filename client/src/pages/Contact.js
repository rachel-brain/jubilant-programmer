import { useState } from 'react';
import ReactDOM from 'react-dom';

import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { H2 } from '../components/Text';
import { H3 } from '../components/Text';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

function Contact () {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Thank you, " + inputs.name + ".  We will be in contact with you within 24 hours.");

  };

  return (
    <Container alignContent='center'>
      <div>
      <H2>Make Contact with us</H2>
      <H3>Note that we currently only deliver within the state of Victoria, Australia.</H3>
      <H3>Whether you are an existing customer or not, please get in touch using the form below.</H3>
      <br />
      <form onSubmit={handleFormSubmit}>
      <div className='flex-row space-between my-2'>
        <label htmlFor="name">Your name: </label>
        <Input
          placeholder="Required*"
          name="name"
          type="text"
          id="name"
          value={inputs.name || ""} 
          onChange={handleChange}
        />
      </div>
      <div className='flex-row space-between my-2'>
        <label htmlFor="business">Your Business name: </label>
        <Input
          placeholder="Required*"
          name="business"
          type="text"
          id="business"
          value={inputs.business || ""} 
          onChange={handleChange}
        />
      </div>
      <div className='flex-row space-between my-2'>
        <label htmlFor="suburb">Your delivery Suburb: </label>
        <Input
          placeholder="Required*"
          name="suburb"
          type="text"
          id="suburb"
          value={inputs.suburb || ""} 
          onChange={handleChange}
        />
      </div>
      <div className='flex-row space-between my-2'>
        <label htmlFor="email">Your Email address: </label>
        <Input
          placeholder="Required*"
          name="email"
          type="text"
          id="email"
          value={inputs.email || ""} 
          onChange={handleChange}
        />
      </div>
      <div className='flex-row space-between my-2'>
        <label htmlFor="phone">Your Phone number: </label>
        <Input
          placeholder="Optional"
          name="phone"
          type="number"
          id="phone"
          value={inputs.phone || ""} 
          onChange={handleChange}
        />
      </div>
      <div className='flex-row space-between my-2'>
        <label htmlFor="queries">Your queries here: </label>
        <Input
          placeholder="Required*"
          name="queries"
          type="text"
          id="queries"
          value={inputs.queries || ""} 
          onChange={handleChange}
        />
      </div>
      <div className='flex-row flex-end'>
        <Button type="submit">Submit enquiry</Button>
      </div>
      </form>
    </div>
    <Footer alignContent='center' />
    </Container>
  );
}

ReactDOM.render(<Contact />, document.getElementById('root'));

export default Contact;