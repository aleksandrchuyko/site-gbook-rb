import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRemoveVisitorMutation } from 'redux/visitors/visitors-api';

export const Visitor = ({ id, name, surname, password, open, getVisitorById }) => {
  const [removeVisitor, { isLoading: isDeleting }] = useRemoveVisitorMutation();
  return (
    <div>
      <p className="mb-2">
        <b>Name:</b> {name}
        <br />
      </p>
      <Button
        variant="outline-secondary"
        size="sm"
        type="button"
        onClick={() => {
          getVisitorById(id);
          open();
        }}
      >
        Докладно
      </Button>
      <Button
        variant="outline-secondary"
        size="sm"
        type="button"
        disabled={isDeleting}
        onClick={() => {
          removeVisitor(id);
        }}
      >
        Видалити
      </Button>
    </div>
  );
};

Visitor.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
