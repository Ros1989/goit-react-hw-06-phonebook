import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, Input, Button } from './StyledComponents';

export default function ContactsForm({ AddContact }) {
  const [name, setNameValue] = useState('');
  const [number, setNumberValue] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setNameValue(value);
        break;
      case 'number':
        setNumberValue(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (!name || !number) {
      alert('You have not entered all the data');
      return;
    }

    if (Number.isNaN(+number)) {
      alert('Phone number must contain only numbers');
      return;
    }
    AddContact(name, number);
    setNameValue('');
    setNumberValue('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <FormLabel>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          onChange={handleInputChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <Input
          name="number"
          type="tel"
          value={number}
          placeholder="Enter phone number"
          onChange={handleInputChange}
        />
      </FormLabel>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactsForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
