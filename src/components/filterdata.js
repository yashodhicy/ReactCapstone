import React from "react";
import { useSelector } from "react-redux";

const Filterdata = () => {
    const data = useSelector((state) => state.events.events);
    return data.map((event) => ({
      id: event.id,
      name: event.name,
      genre: event.classifications[0].segment.name,
      image: event.images[0].url,
      date: event.dates.start.dateTime,
      price: event.priceRanges[0].min + ' ' + event.priceRanges[0].currency + '-' + event.priceRanges[0].max + ' ' + event.priceRanges[0].currency,
      info: event.info,
      visit: event.url,
      ticketLimit: event.accessibility.ticketLimit,
    }));
};


export default Filterdata;