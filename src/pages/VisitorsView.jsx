import { useState } from 'react';

import { VisitorForm } from 'components/VisitorForm/VisitorForm';
import { VisitorList } from 'components/VisitorList/VisitorList';
import { Filter } from 'components/Filter/Filter';
import { VisitorEditor } from 'components/VisitorEditor/VisitorEditor';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setFilter } from 'redux/visitorlistSlice';

import {
  useAddVisitorMutation,
  useGetAllVisitorsQuery,
  useUpdateVisitorMutation,
} from 'redux/visitors/visitors-api';
import { Card, CardGroup, Container } from 'react-bootstrap';

import { useToggle } from 'hooks/useToggle';

const VisitorsView = () => {
  const dispatch = useDispatch();
  const [visitor, setVisitor] = useState({});
  const { isOpen, open, close } = useToggle();

  const filter = useSelector(getFilter);
  const {
    data: visitors,
    isLoading,
    isSuccess,
  } = useGetAllVisitorsQuery('', {
    refetchOnMountOrArgChange: true,
  });

  const [addVisitor] = useAddVisitorMutation();

  const [updateVisitor] = useUpdateVisitorMutation();

  //get visitors list by filter
  const getFilteredVisitors = () => {
    if (filter.trim()) {
      return visitors.filter(visitor => {
        return visitor.name.toLowerCase().includes(filter.toLowerCase());
      });
    } else return visitors;
  };

  const getVisitorById = id => {
    setVisitor(visitors.find(visitor => visitor._id === id));
  };

  //redux actions
  const handleAddVisitor = ({ name, surname, password }) => {
    addVisitor({ name, surname, password });
  };

  const handleUpdateVisitor = ({ id, name, surname, password }) => {
    updateVisitor({ visitorId: id, name, surname, password });
  };

  const updateFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  //------------------

  const filteredVisitors = getFilteredVisitors();
  //console.log(filteredVisitors);

  return (
    <Container
      className="mt-2"
      style={{
        position: 'relative',
      }}
    >
      {isOpen && (
        <VisitorEditor
          visitors={visitors}
          visitor={visitor}
          close={close}
          onSubmit={handleUpdateVisitor}
        />
      )}

      {!isLoading && isSuccess && (
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>New visitor</Card.Title>
              <VisitorForm visitors={visitors} onSubmit={handleAddVisitor}></VisitorForm>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Visitor list</Card.Title>
              <Filter name={filter} onChange={updateFilter}></Filter>
              <VisitorList
                visitors={filteredVisitors}
                open={open}
                getVisitorById={getVisitorById}
              />
            </Card.Body>
          </Card>
        </CardGroup>
      )}
    </Container>
  );
};

export default VisitorsView;
