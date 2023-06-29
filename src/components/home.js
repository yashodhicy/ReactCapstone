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
                backgroundImage: `url(${event.image})`,
              }}
            >
              <div
                className="overlay"
              />
              <article
                className="event-details"
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
