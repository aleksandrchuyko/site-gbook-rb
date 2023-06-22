import { Visitor } from 'components/VisitorList/Visitor/Visitor';
import PropTypes from 'prop-types';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { VisitorContainer } from './VisitorList.styled';

export const VisitorList = ({ visitors, open, getVisitorById }) => {
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
      dataField: 'surname',
      text: 'Surname',
      sort: true,
    },
    {
      dataField: 'createdAt',
      text: 'Date of visit',
      sort: true,
    },
  ];

  const data = visitors.map(visitor => {
    return {
      id: visitor._id,
      name: visitor.name,
      surname: visitor.surname,
      createdAt: visitor.createdAt,
    };
  });

  return (
    <VisitorContainer>
      <BootstrapTable keyField="id" data={data} columns={columns} />
      {/* <ListGroup variant="flush">
        {visitors.map(visitor => (
          <ListGroup.Item key={visitor._id}>
            <Visitor
              id={visitor._id}
              name={visitor.name}
              surname={visitor.surname}
              password={visitor.password}
              open={open}
              getVisitorById={getVisitorById}
            ></Visitor>
          </ListGroup.Item>
        ))}
      </ListGroup> */}
    </VisitorContainer>
  );
};

VisitorList.propTypes = {
  visitors: PropTypes.arrayOf(
    PropTypes.exact({
      _id: PropTypes.string,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      owner: PropTypes.exact({
        _id: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};