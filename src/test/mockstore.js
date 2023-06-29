import configureStore from 'redux-mock-store';
const initialState = {
    events: [
      
      {
        "name": "Ottawa REDBLACKS vs. Edmonton Elks",
        "type": "event",
        "id": "G5d7Z9EOz2ME8",
        "test": false,
        "url": "https://www.ticketmaster.ca/ottawa-redblacks-vs-edmonton-elks-ottawa-ontario-06-30-2023/event/31005E78383F79D0",
        "locale": "en-us",
        "images": [
          {
            "ratio": "16_9",
            "url": "https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_RETINA_LANDSCAPE_16_9.jpg",
            "width": 1136,
            "height": 639,
            "fallback": false
          },
        ],
        "dates": {
          "start": {
            "localDate": "2023-06-30",
            "localTime": "19:30:00",
            "dateTime": "2023-06-30T23:30:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
          "timezone": "America/Toronto",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nE",
              "name": "Sports"
            },
            "genre": {
              "id": "KnvZfZ7vAdE",
              "name": "Football"
            },
          } 
        ],
        "pleaseNote": "Net Capacity: 25269",
        "priceRanges": [
          {
            "type": "standard",
            "currency": "CAD",
            "min": 15.0,
            "max": 279.0
          }
        ],
        "accessibility": {
          "info": "To better accommodate your needs, TD Place Stadium has requested that all special seating accommodations be solicited only through their representatives. Please contact a TD Place Stadium representative for further help with your ticket purchase.*   Advance ticket purchase may be required.\r\n\r\n* Box office information is subject to change.",
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an overall 9 ticket limit for this event."
        },
        "doorsTimes": {
          "localDate": "2023-06-30",
          "localTime": "18:30:00",
          "dateTime": "2023-06-30T22:30:00Z"
        },
        "ticketing": {
          "safeTix": {
            "enabled": true
          },
          "allInclusivePricing": {
            "enabled": false
          }
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/G5d7Z9EOz2ME8?locale=en-us"
          },
          "attractions": [
            {
              "href": "/discovery/v2/attractions/K8vZ91732A7?locale=en-us"
            },
            {
              "href": "/discovery/v2/attractions/K8vZ917101f?locale=en-us"
            }
          ],
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpaFOFe?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "TD Place Stadium",
              "type": "venue",
              "id": "KovZpaFOFe",
              "test": false,
              "url": "https://www.ticketmaster.ca/td-place-stadium-tickets-ottawa/venue/402506",
              "locale": "en-us",
              "postalCode": "K1S 3W7",
              "timezone": "America/Toronto",
              "city": {
                "name": "Ottawa"
              },
              "state": {
                "name": "Ontario",
                "stateCode": "ON"
              },
              "country": {
                "name": "Canada",
                "countryCode": "CA"
              },
              "address": {
                "line1": "1015 Bank Street"
              },
              "location": {
                "longitude": "-75.68335822",
                "latitude": "45.39911174"
              },
              "markets": [
                {
                  "name": "Ottawa and Eastern Ontario",
                  "id": "103"
                }
              ],
              "dmas": [
                {
                  "id": 519
                }
              ],
              "boxOfficeInfo": {
                "phoneNumberDetail": "613-232-6767 extension 8221"
              },
              "accessibleSeatingDetail": "To better accommodate your needs, TD Place Stadium has requested that all special seating accommodations be solicited only through their representatives. Please contact a TD Place Stadium representative for further help with your ticket purchase.* Advance ticket purchase may be required. * Box office information is subject to change.",
              "upcomingEvents": {
                "ticketmaster": 22,
                "_total": 22,
                "_filtered": 0
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/venues/KovZpaFOFe?locale=en-us"
                }
              }
            }
          ],
        }
      },
      {
        "name": "Toronto Argonauts vs BC Lions",
        "type": "event",
        "id": "G5vZZ9E91hvgZ",
        "test": false,
        "url": "https://www.ticketmaster.ca/toronto-argonauts-vs-bc-lions-toronto-ontario-07-03-2023/event/10005E75CA6C1D40",
        "locale": "en-us",
        "images": [
          {
            "ratio": "4_3",
            "url": "https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_CUSTOM.jpg",
            "width": 305,
            "height": 225,
            "fallback": false
          },
        ],
        "sales": {
          "public": {
            "startDateTime": "2023-05-05T16:52:00Z",
            "startTBD": false,
            "startTBA": false,
            "endDateTime": "2023-07-04T00:00:00Z"
          },
          "presales": [
            {
              "startDateTime": "2023-05-03T16:00:00Z",
              "endDateTime": "2023-05-06T03:59:00Z",
              "name": "Argos Insider Presale"
            }
          ]
        },
        "dates": {
          "start": {
            "localDate": "2023-07-03",
            "localTime": "19:00:00",
            "dateTime": "2023-07-03T23:00:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
          },
          "timezone": "America/Toronto",
          "status": {
            "code": "onsale"
          },
          "spanMultipleDays": false
        },
        "classifications": [
          {
            "primary": true,
            "segment": {
              "id": "KZFzniwnSyZfZ7v7nE",
              "name": "Sports"
            },
            "genre": {
              "id": "KnvZfZ7vAdE",
              "name": "Football"
            },
          }
        ],
        "info": "For information on Season Tickets, Group Sales and Mini-Packs, please contact the Toronto Argonauts at (416) 341-2746 or visit www.argonauts.ca. Gates open 1 hour prior to kick-off. Children who have reached their second birthday require a ticket to this event.",
        "pleaseNote": "Fans in attendance agree to abide by the health and safety measures in effect at the time of the event. Prior to attending please review and ensure compliance with all policies and protocols at BMO Field's Know Before You Go This page is being updated frequently to provide the most up to date information. Capacity: 19,596 Please take note of the venue's Bag Policy",
        "priceRanges": [
          {
            "type": "standard",
            "currency": "CAD",
            "min": 25.0,
            "max": 284.0
          }
        ],
        "accessibility": {
          "ticketLimit": 4
        },
        "ticketLimit": {
          "info": "There is an overall 8 ticket limit for this event."
        },
        "_links": {
          "self": {
            "href": "/discovery/v2/events/G5vZZ9E91hvgZ?locale=en-us"
          },
          "venues": [
            {
              "href": "/discovery/v2/venues/KovZpZAE77aA?locale=en-us"
            }
          ]
        },
        "_embedded": {
          "venues": [
            {
              "name": "BMO Field",
              "type": "venue",
              "id": "KovZpZAE77aA",
              "test": false,
              "url": "https://www.ticketmaster.ca/bmo-field-tickets-toronto/venue/131713",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dbimages/16593v.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                }
              ],
              "postalCode": "M6K 3C3",
              "timezone": "America/Toronto",
            }
          ],
        }
      }
    ],
    isLoading: false,
  };

  const mockStore = configureStore([]);
  const mstore = mockStore(initialState);

  export default mstore;