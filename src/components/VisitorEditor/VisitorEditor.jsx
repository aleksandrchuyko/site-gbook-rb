// import { Box } from 'components/Box';
import { useState } from 'react';
import { Card, CardGroup, Button, Form } from 'react-bootstrap';

export const VisitorEditor = ({ visitor, onSubmit, close }) => {
  const [name, setName] = useState(visitor.name);
  const [surname, setSurname] = useState(visitor.surname);

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

    onSubmit({ id: visitor._id, name, surname });

    setName('');
    setSurname('');
    close();
  };
  return (
    <CardGroup
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        backgroundColor: '#fff',
      }}
    >
      <Card style={{ padding: '20px' }}>
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
            Save
          </Button>
          <Button
            variant="primary"
            style={{ marginLeft: '30px' }}
            type="button"
            onClick={() => {
              close();
            }}
          >
            Cancel
          </Button>
        </Form>
      </Card>
    </CardGroup>
  );
};
