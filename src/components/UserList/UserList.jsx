import { User } from 'components/UserList/User/User';
import PropTypes from 'prop-types';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { VisitorContainer } from './UserList.styled';

export const UserList = ({ users, open, getUserById }) => {
  const columns = [
    {
      dataField: 'id',
      text: 'Visitor ID',
      hidden: true,
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'email',
      text: 'Email',
      sort: true,
    },
  ];

  const visitors = users.map(user => {
    return {
      id: user._id,
      name: (
        <User
          id={user._id}
          name={user.name}
          email={user.email}
          password={user.password}
          open={open}
          getUserById={getUserById}
        ></User>
      ),
      email: user.email,
    };
  });

  return (
    <VisitorContainer>
      <BootstrapTable keyField="id" data={visitors} columns={columns} />
      {/* <ListGroup variant="flush">
        {users.map(user => (
          <ListGroup.Item key={user._id}>
            <User
              id={user._id}
              name={user.name}
              email={user.email}
              password={user.password}
              open={open}
              getUserById={getUserById}
            ></User>
          </ListGroup.Item>
        ))}
      </ListGroup> */}
    </VisitorContainer>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.exact({
      _id: PropTypes.string,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      owner: PropTypes.exact({
        _id: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};
