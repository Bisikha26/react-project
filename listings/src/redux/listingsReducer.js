// connect reducer to the store. action function will fetch data
// from service and pass it to reducer.

import listingsService from '../services/listingsService';

// reducer takes two arg, action obj sent from action function and state[]

const listingsReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_LISTINGS':
            return action.data;
        case 'ADD_LISTING':
            return [...state, action.data];
        default:
            return state;
    }
};

//action initlistings will do async call to listingSERVICE
// returned data is passed to listingsReducer
export const initListings = () => {
    return async dispatch => {
        const listings = await listingsService.getAll();
        dispatch ({
            type: 'INIT_LISTINGS',
            data: listings,
        });
    };
};

// action to pass name and age to service
export const addListing = (name, age) => {
    return async dispatch => {
        const listing = await listingsService.addListing(name, age);
        dispatch({
            type: "ADD_LISTING",
            data: listing,
        });
    };
};

export default listingsReducer;
