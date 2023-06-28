import { Link } from "react-router-dom";
import worldImage from "../images/world.png";
import { useDispatch} from "react-redux";
import { FetchEvents } from "../redux/events/eventsSlice";
import { useEffect } from "react";
import Filterdata from "./filterdata";
import "./home.css";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((key) => {
    const imageName = key.replace("./", "");
    images[imageName] = r(key);
  });
  return images;
};

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchEvents());
  }, []);

  const allEvents = Filterdata();
  console.log(allEvents);

  return (
    <>
      <div className="image-container">
        <img src={worldImage} alt="world" className="image" />
        <div className="image-overlay" />
      </div>
      <p className="divider">Details by event</p>
      <div className="events">
        {allEvents.map((event) => {
          return (
            <Link to={`./country/${event.id}`} key={event.id}>
              <div
                className="event"
                key={event.name}
                style={{
                  position: "relative",
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="overlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgb(223, 71, 130, 0.9)",
                    zIndex: 1,
                  }}
                ></div>
                <article
                  className="event-details"
                  style={{
                    position: "relative",
                    bottom: "0px",
                    right: "0px",
                    color: "white",
                    zIndex: 2,
                    width: "70%",
                  }}
                >
                  <h4 style={{ textTransform: "uppercase"}}>{event.name}</h4>
                  <p>{event.price}</p>
                  <p>Tickets limit: {event.ticketLimit}</p>
                </article>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
