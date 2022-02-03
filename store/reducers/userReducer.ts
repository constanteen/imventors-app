import { action } from "../actions";
import { ActionTypes } from "../actions/action_types";

const initialState = {
  registeredEmail: "",
};

export const userReducer = (state = initialState, {type, payload}: action) => {
  switch(type) {
    case ActionTypes.SAVE_REGISTERED_EMAIL: 
      return {
        ...initialState,
        registeredEmail: payload,
      }
    default:
      return state;
  }
}