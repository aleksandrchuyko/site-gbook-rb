import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

import { authOperations } from 'redux/auth';

export const RegisterForm = () => {
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'surname':
        setSurname(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ surname, password }));

    setSurname('');
    setPassword('');
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicSurname">
              <Form.Label>Surname address</Form.Label>
              <Form.Control
                type="surname"
                placeholder="Enter surname"
                name="surname"
                value={surname}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
