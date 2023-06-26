import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRemoveVisitorMutation } from 'redux/visitors/visitors-api';

export const VisitorActions = ({ id, openEditor, getVisitorById, handleDelete }) => {
  const [{ isLoading: isDeleting }] = useRemoveVisitorMutation();
  return (
    <div>
      <Button
        variant="outline-secondary"
        size="sm"
        type="button"
        onClick={() => {
          getVisitorById(id);
          openEditor();
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
          getVisitorById(id);
          handleDelete();
          //removeVisitor(id);
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
