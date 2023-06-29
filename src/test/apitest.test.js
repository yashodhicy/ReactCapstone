import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FetchEvents } from '../redux/events/eventsSlice';

// Create a mock store
const mockStore = configureMockStore([thunk]);

describe('FetchEvents async action', () => {
  let store;

  beforeEach(() => {
    // Create a new store before each test
    store = mockStore({});
  });

  it('dispatches the correct actions when API call is successful', async () => {
    // Mock the fetch function to return a successful response
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({
        _embedded: {
          events: [
            {
              id: '1',
              name: 'Event 1',
            },
            {
              id: '2',
              name: 'Event 2',
            },
          ],
        },
      }),
    });

    // Define the expected actions that should be dispatched
    const expectedActions = [
      FetchEvents.pending().type,
      FetchEvents.fulfilled({
        _embedded: {
          events: [
            {
              id: '1',
              name: 'Event 1',
            },
            {
              id: '2',
              name: 'Event 2',
            },
          ],
        },
      }).type,
    ];

    // Dispatch the async action
    await store.dispatch(FetchEvents());

    // Get the dispatched actions from the store
    const dispatchedActions = store.getActions();

    // Verify that the dispatched actions match the expected actions
    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });

  it('dispatches the correct actions when API call fails', async () => {
    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue('API error');

    // Define the expected actions that should be dispatched
    const expectedActions = [
      FetchEvents.pending().type,
      FetchEvents.rejected().type,
    ];

    // Dispatch the async action
    await store.dispatch(FetchEvents());

    // Get the dispatched actions from the store
    const dispatchedActions = store.getActions();

    // Verify that the dispatched actions match the expected actions
    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });
});
