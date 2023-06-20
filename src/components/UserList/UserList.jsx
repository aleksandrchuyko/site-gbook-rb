
import { useState } from 'react';
import { User } from 'components/UserList/User/User';
import PropTypes from 'prop-types';
import { Container, ListGroup } from 'react-bootstrap';




function getFamilyName(name) {
  return name;
}

const FamilyNameSorter = {
  desc: (data, key) => {
    var result = data.sort(function (_a, _b) {
      const a = getFamilyName(_a[key]);
      const b = getFamilyName(_b[key]);
      if (a <= b) {
        return 1;
      } else if (a > b) {
        return -1;
      }
    });
    return result;
  },

  asc: (data, key) => {
    return data.sort(function (_a, _b) {
      const a = getFamilyName(_a[key]);
      const b = getFamilyName(_b[key]);
      if (a >= b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
    });
  },
};

export const UserList = ({ users, open, getUserById }) => {
  const data = [
    { id: 3, name: 'Satoshi Yamamoto', class: 'B' },
    { id: 1, name: 'Taro Tanak', class: 'A' },
    { id: 2, name: 'Ken Asada', class: 'A' },
    { id: 4, name: 'Masaru Tokunaga', class: 'C' },
  ];
  const columns = [
    {
      header: 'ID',
      key: 'id',
      defaultSorting: 'ASC',
      headerStyle: {
        fontSize: '15px',
        backgroundColor: '#FFDAB9',
        width: '100px',
      },
      dataStyle: { fontSize: '15px', backgroundColor: '#FFDAB9' },
      dataProps: { className: 'align-right' },
      render: id => {
        return <a href={'user/' + id}>{id}</a>;
      },
    },
    {
      header: 'NAME',
      key: 'name',
      headerStyle: { fontSize: '15px' },
      headerProps: { className: 'align-left' },
      descSortFunction: FamilyNameSorter.desc,
      ascSortFunction: FamilyNameSorter.asc,
    },
    {
      header: 'CLASS',
      key: 'class',
      headerStyle: { fontSize: '15px' },
      sortable: false,
    },
  ];

  const style = {
    backgroundColor: '#eee',
  };

  const iconStyle = {
    color: '#aaa',
    paddingLeft: '5px',
    paddingRight: '5px',
  };

  return (
    <Container>
      
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
    </Container>
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
