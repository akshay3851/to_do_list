import { SET_FILTER } from "../actions/actionTypes";
import { VISIBILITY_FILTERS } from "../utils/constants";

const defaultState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
