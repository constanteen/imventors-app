import { Dispatch } from "@reduxjs/toolkit";
import { ActionTypes } from "./action_types";

export const saveRegisteredEmail = (email: string) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.SAVE_REGISTERED_EMAIL,
    payload: email,
  })
}