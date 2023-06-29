const mockApiResponse = {
  _embedded: {
    events: [

      {
        name: 'Ottawa REDBLACKS vs. Edmonton Elks',
        type: 'event',
        id: 'G5d7Z9EOz2ME8',
        test: false,
        url: 'https://www.ticketmaster.ca/ottawa-redblacks-vs-edmonton-elks-ottawa-ontario-06-30-2023/event/31005E78383F79D0',
        locale: 'en-us',
        images: [
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-05-05T14:00:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2023-07-01T01:30:00Z',
          },
          presales: [
            {
              startDateTime: '2023-05-03T14:00:00Z',
              endDateTime: '2023-05-05T13:59:00Z',
              name: 'TD Place Insider Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2023-06-30',
            localTime: '19:30:00',
            dateTime: '2023-06-30T23:30:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Toronto',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAdE',
              name: 'Football',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFEJ',
              name: 'Professional',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '5694',
          name: 'MISCELLANEOUS PROMOTER',
          description: 'MISCELLANEOUS PROMOTER / NTL / USA',
        },
        promoters: [
          {
            id: '5694',
            name: 'MISCELLANEOUS PROMOTER',
            description: 'MISCELLANEOUS PROMOTER / NTL / USA',
          },
        ],
        pleaseNote: 'Net Capacity: 25269',
        priceRanges: [
          {
            type: 'standard',
            currency: 'CAD',
            min: 15.0,
            max: 279.0,
          },
        ],
        seatmap: {
          staticUrl: 'https://maps.ticketmaster.com/maps/geometry/3/event/31005E78383F79D0/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          info: 'To better accommodate your needs, TD Place Stadium has requested that all special seating accommodations be solicited only through their representatives. Please contact a TD Place Stadium representative for further help with your ticket purchase.*   Advance ticket purchase may be required.\r\n\r\n* Box office information is subject to change.',
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall 9 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        doorsTimes: {
          localDate: '2023-06-30',
          localTime: '18:30:00',
          dateTime: '2023-06-30T22:30:00Z',
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5d7Z9EOz2ME8?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ91732A7?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ917101f?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpaFOFe?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'TD Place Stadium',
              type: 'venue',
              id: 'KovZpaFOFe',
              test: false,
              url: 'https://www.ticketmaster.ca/td-place-stadium-tickets-ottawa/venue/402506',
              locale: 'en-us',
              postalCode: 'K1S 3W7',
              timezone: 'America/Toronto',
              city: {
                name: 'Ottawa',
              },
              state: {
                name: 'Ontario',
                stateCode: 'ON',
              },
              country: {
                name: 'Canada',
                countryCode: 'CA',
              },
              address: {
                line1: '1015 Bank Street',
              },
              location: {
                longitude: '-75.68335822',
                latitude: '45.39911174',
              },
              markets: [
                {
                  name: 'Ottawa and Eastern Ontario',
                  id: '103',
                },
              ],
              dmas: [
                {
                  id: 519,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail: '613-232-6767 extension 8221',
              },
              accessibleSeatingDetail: 'To better accommodate your needs, TD Place Stadium has requested that all special seating accommodations be solicited only through their representatives. Please contact a TD Place Stadium representative for further help with your ticket purchase.* Advance ticket purchase may be required. * Box office information is subject to change.',
              upcomingEvents: {
                ticketmaster: 22,
                _total: 22,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpaFOFe?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Ottawa REDBLACKS',
              type: 'attraction',
              id: 'K8vZ91732A7',
              test: false,
              url: 'https://www.ticketmaster.ca/ottawa-redblacks-tickets/artist/1970294',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/1ae/9a583d8c-6fb8-42bc-bdcd-3bb9bcc471ae_1659441_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFEJ',
                    name: 'Professional',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                ticketmaster: 15,
                _total: 15,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ91732A7?locale=en-us',
                },
              },
            },
            {
              name: 'Edmonton Elks',
              type: 'attraction',
              id: 'K8vZ917101f',
              test: false,
              url: 'https://www.ticketmaster.ca/edmonton-elks-tickets/artist/891207',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/2f8/8a0244f8-e239-41de-9d85-da7a111c52f8_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/2f8/8a0244f8-e239-41de-9d85-da7a111c52f8_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/2f8/8a0244f8-e239-41de-9d85-da7a111c52f8_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/2f8/8a0244f8-e239-41de-9d85-da7a111c52f8_SOURCE',
                  width: 2426,
                  height: 1365,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/2f8/8a0244f8-e239-41de-9d85-da7a111c52f8_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/2f8/8a0244f8-e239-41de-9d85-da7a111c52f8_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/2f8/8a0244f8-e239-41de-9d85-da7a111c52f8_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/2f8/8a0244f8-e239-41de-9d85-da7a111c52f8_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/2f8/8a0244f8-e239-41de-9d85-da7a111c52f8_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/2f8/8a0244f8-e239-41de-9d85-da7a111c52f8_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/2f8/8a0244f8-e239-41de-9d85-da7a111c52f8_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFEJ',
                    name: 'Professional',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                ticketmaster: 15,
                _total: 15,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ917101f?locale=en-us',
                },
              },
            },
          ],
        },
      },
      {
        name: 'Toronto Argonauts vs BC Lions',
        type: 'event',
        id: 'G5vZZ9E91hvgZ',
        test: false,
        url: 'https://www.ticketmaster.ca/toronto-argonauts-vs-bc-lions-toronto-ontario-07-03-2023/event/10005E75CA6C1D40',
        locale: 'en-us',
        images: [
          {
            ratio: '4_3',
            url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_CUSTOM.jpg',
            width: 305,
            height: 225,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_RETINA_PORTRAIT_16_9.jpg',
            width: 640,
            height: 360,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_TABLET_LANDSCAPE_LARGE_16_9.jpg',
            width: 2048,
            height: 1152,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_EVENT_DETAIL_PAGE_16_9.jpg',
            width: 205,
            height: 115,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_RECOMENDATION_16_9.jpg',
            width: 100,
            height: 56,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_RETINA_LANDSCAPE_16_9.jpg',
            width: 1136,
            height: 639,
            fallback: false,
          },
          {
            ratio: '16_9',
            url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_TABLET_LANDSCAPE_16_9.jpg',
            width: 1024,
            height: 576,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_ARTIST_PAGE_3_2.jpg',
            width: 305,
            height: 203,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_RETINA_PORTRAIT_3_2.jpg',
            width: 640,
            height: 427,
            fallback: false,
          },
          {
            ratio: '3_2',
            url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_TABLET_LANDSCAPE_3_2.jpg',
            width: 1024,
            height: 683,
            fallback: false,
          },
        ],
        sales: {
          public: {
            startDateTime: '2023-05-05T16:52:00Z',
            startTBD: false,
            startTBA: false,
            endDateTime: '2023-07-04T00:00:00Z',
          },
          presales: [
            {
              startDateTime: '2023-05-03T16:00:00Z',
              endDateTime: '2023-05-06T03:59:00Z',
              name: 'Argos Insider Presale',
            },
          ],
        },
        dates: {
          start: {
            localDate: '2023-07-03',
            localTime: '19:00:00',
            dateTime: '2023-07-03T23:00:00Z',
            dateTBD: false,
            dateTBA: false,
            timeTBA: false,
            noSpecificTime: false,
          },
          timezone: 'America/Toronto',
          status: {
            code: 'onsale',
          },
          spanMultipleDays: false,
        },
        classifications: [
          {
            primary: true,
            segment: {
              id: 'KZFzniwnSyZfZ7v7nE',
              name: 'Sports',
            },
            genre: {
              id: 'KnvZfZ7vAdE',
              name: 'Football',
            },
            subGenre: {
              id: 'KZazBEonSMnZfZ7vFEJ',
              name: 'Professional',
            },
            type: {
              id: 'KZAyXgnZfZ7v7l1',
              name: 'Group',
            },
            subType: {
              id: 'KZFzBErXgnZfZ7vA7d',
              name: 'Team',
            },
            family: false,
          },
        ],
        promoter: {
          id: '494',
          name: 'PROMOTED BY VENUE',
          description: 'PROMOTED BY VENUE / NTL / USA',
        },
        promoters: [
          {
            id: '494',
            name: 'PROMOTED BY VENUE',
            description: 'PROMOTED BY VENUE / NTL / USA',
          },
        ],
        info: 'For information on Season Tickets, Group Sales and Mini-Packs, please contact the Toronto Argonauts at (416) 341-2746 or visit www.argonauts.ca. Gates open 1 hour prior to kick-off. Children who have reached their second birthday require a ticket to this event.',
        pleaseNote: "Fans in attendance agree to abide by the health and safety measures in effect at the time of the event. Prior to attending please review and ensure compliance with all policies and protocols at BMO Field's Know Before You Go This page is being updated frequently to provide the most up to date information. Capacity: 19,596 Please take note of the venue's Bag Policy",
        priceRanges: [
          {
            type: 'standard',
            currency: 'CAD',
            min: 25.0,
            max: 284.0,
          },
        ],
        seatmap: {
          staticUrl: 'https://maps.ticketmaster.com/maps/geometry/3/event/10005E75CA6C1D40/staticImage?type=png&systemId=HOST',
        },
        accessibility: {
          ticketLimit: 4,
        },
        ticketLimit: {
          info: 'There is an overall 8 ticket limit for this event.',
        },
        ageRestrictions: {
          legalAgeEnforced: false,
        },
        ticketing: {
          safeTix: {
            enabled: true,
          },
          allInclusivePricing: {
            enabled: false,
          },
        },
        _links: {
          self: {
            href: '/discovery/v2/events/G5vZZ9E91hvgZ?locale=en-us',
          },
          attractions: [
            {
              href: '/discovery/v2/attractions/K8vZ91710c7?locale=en-us',
            },
            {
              href: '/discovery/v2/attractions/K8vZ91710cV?locale=en-us',
            },
          ],
          venues: [
            {
              href: '/discovery/v2/venues/KovZpZAE77aA?locale=en-us',
            },
          ],
        },
        _embedded: {
          venues: [
            {
              name: 'BMO Field',
              type: 'venue',
              id: 'KovZpZAE77aA',
              test: false,
              url: 'https://www.ticketmaster.ca/bmo-field-tickets-toronto/venue/131713',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dbimages/16593v.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
              ],
              postalCode: 'M6K 3C3',
              timezone: 'America/Toronto',
              city: {
                name: 'Toronto',
              },
              state: {
                name: 'Ontario',
                stateCode: 'ON',
              },
              country: {
                name: 'Canada',
                countryCode: 'CA',
              },
              address: {
                line1: "170 Princes' Blvd",
              },
              location: {
                longitude: '-79.4202924',
                latitude: '43.6326489',
              },
              markets: [
                {
                  name: ' Hamilton & Area"',
                  id: '102',
                },
              ],
              dmas: [
                {
                  id: 501,
                },
                {
                  id: 502,
                },
                {
                  id: 511,
                },
                {
                  id: 527,
                },
              ],
              boxOfficeInfo: {
                phoneNumberDetail: 'BMO FIELD INFO: (416) 815-5982',
                openHoursDetail: 'The BMO Field Ticket Office is located on the Northwest corner of the building by Gate 1. It is open on event days only, beginning three (3) hours prior to event time. For ticket inquiries on non-event days or when the Ticket Office is closed, you can purchase tickets on Ticketmaster at www.ticketmaster.ca',
                acceptedPaymentDetail: 'Debit, American Express, MasterCard, Visa',
                willCallDetail: 'BMO Field does not accept will-call, it is a fully mobile venue. When purchasing tickets, there will be a mobile delivery method, which allows for convenient and efficient management of your tickets, instantly! For more information on mobile ticketing at BMO Field, please visit https://mobile.mlse.com/venue/bmo-field',
              },
              parkingDetail: 'We strongly recommend fans to take advantage of public transit, with both GO Transit and TTC providing convenient options. On-site vehicular parking is available for purchase, but is limited when there are other events on the Exhibition Place grounds. For accessible parking information, please contact Exhibition place parking at 416-263-3646 or online at www.explace.on.ca. For more info on getting to BMO Field by car, bike or public transit, please visit https://www.explace.on.ca/visiting-us/getting-here/',
              accessibleSeatingDetail: '﻿BMO Field is committed to providing an exceptional experience for all fans and is pleased to offer accessible seating from various vantage points. Accessible seating sections are barrier-free and feature removable seating that can accommodate wheelchairs if needed. An accessible section is indicated by an "A" following the section number. When available, accessible seats may be purchased through Ticketmaster online. Up to four (4) seats may be purchased at one time in an accessible section. Two weeks prior to each game date, any accessible seats that have not been sold will be released for purchase by the general public. It is recommended that fans that require an accessible seat purchase this type of ticket in advance.',
              generalInfo: {
                generalRule: 'As a security measure, no re-entry is permitted after you have exited BMO Field gates. Only small purses and bags are permitted inside BMO Field (30.5cm x 16cm x 30.5cm or smaller). All backpacks and any bags larger than this are not permitted. No outside food or beverages. No smoking in the venue. Please visit https://www.bmofield.com/plan-your-visit/knowbeforeyougo for more information.',
                childRule: 'Children under 24 months of age do not require a ticket if seated on a lap, unless otherwise noted. Children 24 months and older do require a ticket.',
              },
              upcomingEvents: {
                ticketmaster: 15,
                _total: 15,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/venues/KovZpZAE77aA?locale=en-us',
                },
              },
            },
          ],
          attractions: [
            {
              name: 'Toronto Argonauts',
              type: 'attraction',
              id: 'K8vZ91710c7',
              test: false,
              url: 'https://www.ticketmaster.ca/toronto-argonauts-tickets/artist/891711',
              locale: 'en-us',
              aliases: [
                'argos',
                'toronto argonauts',
              ],
              images: [
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/98b/95aad903-cac0-47d0-b56f-3c56d429498b_1486451_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFEJ',
                    name: 'Professional',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                ticketmaster: 14,
                _total: 14,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ91710c7?locale=en-us',
                },
              },
            },
            {
              name: 'BC Lions',
              type: 'attraction',
              id: 'K8vZ91710cV',
              test: false,
              url: 'https://www.ticketmaster.ca/bc-lions-tickets/artist/890988',
              locale: 'en-us',
              images: [
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/26c/2dcedc88-07b7-4eaf-a6ad-e5844f19226c_TABLET_LANDSCAPE_LARGE_16_9.jpg',
                  width: 2048,
                  height: 1152,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/26c/2dcedc88-07b7-4eaf-a6ad-e5844f19226c_TABLET_LANDSCAPE_16_9.jpg',
                  width: 1024,
                  height: 576,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/26c/2dcedc88-07b7-4eaf-a6ad-e5844f19226c_RETINA_PORTRAIT_3_2.jpg',
                  width: 640,
                  height: 427,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/26c/2dcedc88-07b7-4eaf-a6ad-e5844f19226c_RECOMENDATION_16_9.jpg',
                  width: 100,
                  height: 56,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/26c/2dcedc88-07b7-4eaf-a6ad-e5844f19226c_RETINA_LANDSCAPE_16_9.jpg',
                  width: 1136,
                  height: 639,
                  fallback: false,
                },
                {
                  ratio: '4_3',
                  url: 'https://s1.ticketm.net/dam/a/26c/2dcedc88-07b7-4eaf-a6ad-e5844f19226c_CUSTOM.jpg',
                  width: 305,
                  height: 225,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/26c/2dcedc88-07b7-4eaf-a6ad-e5844f19226c_EVENT_DETAIL_PAGE_16_9.jpg',
                  width: 205,
                  height: 115,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/26c/2dcedc88-07b7-4eaf-a6ad-e5844f19226c_RETINA_PORTRAIT_16_9.jpg',
                  width: 640,
                  height: 360,
                  fallback: false,
                },
                {
                  ratio: '16_9',
                  url: 'https://s1.ticketm.net/dam/a/26c/2dcedc88-07b7-4eaf-a6ad-e5844f19226c_SOURCE',
                  width: 2426,
                  height: 1365,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/26c/2dcedc88-07b7-4eaf-a6ad-e5844f19226c_TABLET_LANDSCAPE_3_2.jpg',
                  width: 1024,
                  height: 683,
                  fallback: false,
                },
                {
                  ratio: '3_2',
                  url: 'https://s1.ticketm.net/dam/a/26c/2dcedc88-07b7-4eaf-a6ad-e5844f19226c_ARTIST_PAGE_3_2.jpg',
                  width: 305,
                  height: 203,
                  fallback: false,
                },
              ],
              classifications: [
                {
                  primary: true,
                  segment: {
                    id: 'KZFzniwnSyZfZ7v7nE',
                    name: 'Sports',
                  },
                  genre: {
                    id: 'KnvZfZ7vAdE',
                    name: 'Football',
                  },
                  subGenre: {
                    id: 'KZazBEonSMnZfZ7vFEJ',
                    name: 'Professional',
                  },
                  type: {
                    id: 'KZAyXgnZfZ7v7l1',
                    name: 'Group',
                  },
                  subType: {
                    id: 'KZFzBErXgnZfZ7vA7d',
                    name: 'Team',
                  },
                  family: false,
                },
              ],
              upcomingEvents: {
                ticketmaster: 14,
                _total: 14,
                _filtered: 0,
              },
              _links: {
                self: {
                  href: '/discovery/v2/attractions/K8vZ91710cV?locale=en-us',
                },
              },
            },
          ],
        },
      },

    ],
  },
};

export default mockApiResponse;
