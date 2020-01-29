import { A } from "../../constants/actionTypes";

export default function navigationReducer(
  state = { isFetching: true },
  action
) {
  switch (action.type) {
    case A.LOAD_NAVIGATION_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case A.LOAD_NAVIGATION_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.response.data
      });
    case A.LOAD_NAVIGATION_FAILURE:
      return [...state, { isFetching: true }];
    default:
      return state;
  }
}
