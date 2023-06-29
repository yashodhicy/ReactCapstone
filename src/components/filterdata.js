const Filterdata = (data) => data.map((event) => ({
  id: event.id,
  name: event.name,
  genre: `${event.classifications[0].segment.name}/${event.classifications[0].genre.name}`,
  image: event.images[0].url,
  date: event.dates.start.localDate,
  time: event.dates.start.localTime,
  timeZone: event.dates.timezone,
  price: `${event.priceRanges[0].min} ${event.priceRanges[0].currency}`,
  info1: event.info,
  info2: event.accessibility.info,
  visit: event.url,
  ticketLimit: event.accessibility.ticketLimit,
  // eslint-disable-next-line no-underscore-dangle
  venue: event._embedded.venues[0].name,

}));

export default Filterdata;
