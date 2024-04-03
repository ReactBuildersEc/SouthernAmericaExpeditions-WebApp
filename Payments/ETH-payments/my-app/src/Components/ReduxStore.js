import { legacy_createStore as createStore } from 'redux';

const initialState = {
  selectedTour: '',
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_TOUR':
      return {
        ...state,
        selectedTour: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(Reducer, initialState);
export default store;