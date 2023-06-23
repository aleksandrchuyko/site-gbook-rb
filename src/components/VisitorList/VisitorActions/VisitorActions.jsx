import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRemoveVisitorMutation } from 'redux/visitors/visitors-api';

export const VisitorActions = ({ id, open, getVisitorById }) => {
  const [removeVisitor, { isLoading: isDeleting }] = useRemoveVisitorMutation();
  return (
    <div>
      <Button
        variant="outline-secondary"
        size="sm"
        type="button"
        onClick={() => {
          getVisitorById(id);
          open();
        }}
      >
        Edit
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
        Delete
      </Button>
    </div>
  );
};

VisitorActions.propTypes = {
  id: PropTypes.string.isRequired,
};
