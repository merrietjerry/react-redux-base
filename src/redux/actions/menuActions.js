import { A } from "../../constants/actionTypes";
import { CALL_API } from "../../middleware/api";

export const menuActions = {
    getTopMenu
  };

function getTopMenu(){
  return {
    [CALL_API]: {
        endpoint: "top-menu",
        method: "GET",
        types: [
          A.LOAD_NAVIGATION_REQUEST,
          A.LOAD_NAVIGATION_SUCCESS,
          A.LOAD_NAVIGATION_FAILURE,
          A.ALERT_ERROR
        ]
      }
  }
}


