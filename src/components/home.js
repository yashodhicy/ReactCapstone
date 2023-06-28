import { Link, useSearchParams } from "react-router-dom";
import worldImage from "../images/world.png";
import { useDispatch, useSelector } from "react-redux";
import { FetchEvents } from "../redux/events/eventsSlice";
import { useEffect } from "react";
import Filterdata from "./filterdata";

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
      <div>
        <img src={worldImage} alt="world" width="100%" height={200} />
      </div>
      <div>
        {allEvents.map((event) => {
          // const imageNameNew = imageName.replace(/\.[^.]+$/, '');
          return (
            <Link to={`./country/${event.id}`} key={event.id}>
              <div
                key={event.name}
                style={{
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: '50%',
                  height: 100,
                }}
              >
                <h2>{event.name}</h2>
                <p>{event.ticketLimit}</p>
                <p>{event.date}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
