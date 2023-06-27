import { Link, useSearchParams } from "react-router-dom";
import worldImage from "./world.png"
import { useDispatch, useSelector } from "react-redux";
import { FetchEvents } from "../redux/events/eventsSlice";
import { useEffect } from "react";


const importAll = (r) => {
    let images = {};
    r.keys().forEach((key) => {
      const imageName = key.replace('./', '');
      images[imageName] = r(key);
    });
    return images;
  };

//   const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));


const Home = () => {
    const allEvents = useSelector((state) => state.events.events);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(FetchEvents());
    },[]);
    return (
        <>
        <div>
            <img src={ worldImage } alt="world" width='100%' height={200}/>
        </div>
        <div>
        {/* {Object.keys(images).map((imageName) => { */}
        { allEvents.map((event) =>{
            // const imageNameNew = imageName.replace(/\.[^.]+$/, '');
            return (
            <Link to= {`./country/${event.id}`} key={event.id}><img key={event.name} src={event.image} alt={event.name} width={60} height={60} /></Link>
            
            )}
        )}
        </div>
        </>
    )
}

export default Home;