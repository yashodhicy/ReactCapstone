import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import worldImage from '../images/world.png';
import { FetchEvents } from '../redux/events/eventsSlice';

import Filterdata from './filterdata';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const eventsLoaded = useSelector((state) => state.events.events.length > 0);
  useEffect(() => {
    if (!eventsLoaded) {
      dispatch(FetchEvents());
    }
  }, [dispatch, eventsLoaded]);
  const data = useSelector((state) => state.events.events);
  const allEvents = Filterdata(data);

  return (
    <>
      <div className="image-container">
        <img src={worldImage} alt="world" className="image" />
        <div className="image-overlay" />
      </div>
      <p className="divider">Details by event</p>
      <div className="events">
        {allEvents.map((event) => (
          <Link to={`./event/${event.id}`} key={event.id}>
            <div
              className="event"
              key={event.name}
              style={{
                position: 'relative',
                backgroundImage: `url(${event.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div
                className="overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgb(223, 71, 130, 0.9)',
                  zIndex: 1,
                }}
              />
              <article
                className="event-details"
                style={{
                  position: 'relative',
                  bottom: '0px',
                  right: '10px',
                  color: 'white',
                  zIndex: 2,
                  width: '75%',
                }}
              >
                <h4 style={{ textTransform: 'uppercase' }}>{event.name}</h4>
                <p>{event.price}</p>
                <p>
                  Tickets limit:
                  {event.ticketLimit}
                </p>
              </article>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
