import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchEvents } from '../redux/events/eventsSlice';
import { useParams } from 'react-router';


const Country = () => {
    const {id} = useParams();
    const allEvents = useSelector((state) => state.events.events);
    const selectedEvent = allEvents.find((event) => event.id === id);

  return (
    <p>{selectedEvent?.name}</p>
  )
    
};

export default Country;