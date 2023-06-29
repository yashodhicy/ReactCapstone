import React from 'react';
import { useParams } from 'react-router';
import Filterdata from './filterdata';
import './event.css';
import { useSelector } from 'react-redux';
const Eventdetails = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.events.events);
  const allEvents = Filterdata(data);
  const selectedEvent = allEvents.find((event) => event.id === id);

  return (
    <>
      <div>
        <img src={selectedEvent?.image} alt="event" height={200} width="100%" />
        <div className="image-overlay1" />
      </div>
      <div>
        <ul className="list">
          <li>{selectedEvent?.name}</li>
          <li>
            genre:
            {' '}
            {selectedEvent?.genre}
          </li>
          <li>
            date:
            {selectedEvent?.date}
          </li>
          <li>
            time:
            {selectedEvent?.time}
          </li>
          <li>
            timezone:
            {selectedEvent?.timeZone}
          </li>
          <li>
            ticket Price:
            {selectedEvent?.price}
          </li>
          <li>
            venue :
            {selectedEvent?.venue}
          </li>
          <li>
            {selectedEvent
              ? selectedEvent.info1
                || selectedEvent.info2
              : 'No event information available'}
          </li>

          <li>
            more-info visit :
            {selectedEvent?.visit}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Eventdetails;
