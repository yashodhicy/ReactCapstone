import Filterdata from "../components/filterdata"
import mockApiResponse from "./mockapiresponse"



describe('test filter data', ()=> {

  it('should filters data',()=> {
    const data = mockApiResponse._embedded.events;
    const expectedoutput = [
        {
          date: "2023-06-30",
          genre: "Sports/Football",
          id: "G5d7Z9EOz2ME8",
          image: "https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_RETINA_LANDSCAPE_16_9.jpg",
          info1: undefined,
          info2: "To better accommodate your needs, TD Place Stadium has requested that all special seating accommodations be solicited only through their representatives. Please contact a TD Place Stadium representative for further help with your ticket purchase.*   Advance ticket purchase may be required.\r\n\r\n* Box office information is subject to change.",
          name: "Ottawa REDBLACKS vs. Edmonton Elks",
          price: "15 CAD",
          ticketLimit: 4,
          time: "19:30:00",
          timeZone: "America/Toronto",
          venue: "TD Place Stadium",
          visit: "https://www.ticketmaster.ca/ottawa-redblacks-vs-edmonton-elks-ottawa-ontario-06-30-2023/event/31005E78383F79D0"
        },
        {
          date: "2023-07-03",
          genre: "Sports/Football",
          id: "G5vZZ9E91hvgZ",
          image: "https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_CUSTOM.jpg",
          info1: "For information on Season Tickets, Group Sales and Mini-Packs, please contact the Toronto Argonauts at (416) 341-2746 or visit www.argonauts.ca. Gates open 1 hour prior to kick-off. Children who have reached their second birthday require a ticket to this event.",
          info2: undefined,
          name: "Toronto Argonauts vs BC Lions",
          price: "25 CAD",
          ticketLimit: 4,
          time: "19:00:00",
          timeZone: "America/Toronto",
          venue: "BMO Field",
          visit: "https://www.ticketmaster.ca/toronto-argonauts-vs-bc-lions-toronto-ontario-07-03-2023/event/10005E75CA6C1D40"
        }
      ];

      expect(Filterdata(data)).toEqual(expectedoutput);

      
  })
})