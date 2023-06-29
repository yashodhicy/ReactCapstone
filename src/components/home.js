import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue
    .toLowerCase()
    .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
    setSearchQuery(formattedValue);
  };

  const filteredEvents = allEvents.filter((event) =>
    event.name.includes(searchQuery)
  );

  return (
    <>
      <div className="image-container">
        <img src={worldImage} alt="world" className="image" />
        <div className="image-overlay" />
      </div>
      <p className="search">
        <input
          type="text"
          placeholder="Search events"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </p>
      <div className="events">
        {filteredEvents.map((event) => (
          <Link to={`./event/${event.id}`} key={event.name}>
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
