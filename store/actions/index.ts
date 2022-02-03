import {ActionTypes} from "./action_types";

interface SaveRegisteredEmail {
  type: ActionTypes.SAVE_REGISTERED_EMAIL;
  payload: string;
}

export type action = SaveRegisteredEmail;