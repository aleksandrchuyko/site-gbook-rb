import { Card, CardGroup, Button } from 'react-bootstrap';

export const Confirm = ({ onSubmit, closeConfirm }) => {
  return (
    <CardGroup
      style={{
        height: '200px',
        width: '300px',
        position: 'absolute',
        zIndex: 1,
        top: '20vh',
        left: '35%',
        backgroundColor: '#fff',
      }}
    >
      <Card style={{ padding: '50px', border: '1px solid blue' }}>
        <p style={{ margin: 'auto' }}>Are you sure?</p>
        <div
          style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}
        >
          <Button
            variant="secondary"
            type="button"
            onClick={() => {
              onSubmit();
              closeConfirm();
            }}
          >
            Confirm
          </Button>
          <Button
            variant="secondary"
            style={{ marginLeft: '30px' }}
            type="button"
            onClick={() => {
              closeConfirm();
            }}
          >
            Cancel
          </Button>
        </div>
      </Card>
    </CardGroup>
  );
};
