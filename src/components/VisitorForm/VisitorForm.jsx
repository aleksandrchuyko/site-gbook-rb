import { useState } from 'react';

import { Form, Button } from 'react-bootstrap';
import { Box } from 'components/Box';

export const VisitorForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleChange = e => {
    const currentInputName = e.currentTarget.name;
    switch (currentInputName) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'surname':
        setSurname(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, surname });

    setName('');
    setSurname('');
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Яа-їґЄ-ЯҐ]+(?:-[a-zA-Zа-яА-Яа-їґЄ-ЯҐ]+)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            autoComplete="off"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            name="surname"
            value={surname}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Яа-їґЄ-ЯҐ]+(?:-[a-zA-Zа-яА-Яа-їґЄ-ЯҐ]+)*$"
            autoComplete="off"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Box>
  );
};
