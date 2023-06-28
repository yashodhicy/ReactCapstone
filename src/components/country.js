import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchEvents } from '../redux/events/eventsSlice';
import { useParams } from 'react-router';
import Filterdata from './filterdata';


const Country = () => {
    const {id} = useParams();
    const allEvents = Filterdata();
    const selectedEvent = allEvents.find((event) => event.id === id);

  return (
    <><img src={selectedEvent?.image} alt="event" height={200} width='100%' />
    <p>{selectedEvent?.name}</p>
    <p>{selectedEvent?.date}</p>
    <p>{selectedEvent?.price}</p>
    <p>{selectedEvent?.info}</p>
    <p>{selectedEvent?.visit}</p>
    </>

  )
    
};

export default Country;