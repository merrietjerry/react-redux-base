import axios from 'axios'
import i18next from 'i18next'
//import LocalStorage from '../helpers/LocalStorage'
import { API_BASE_URL } from '../constants/api'
import { A } from '../constants/actionTypes'
//import { authContext, adalConfig } from '../adalConfig'

function callApi(endpoint, method, data) {

  let config = {}
  config = {
    method,
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return axios(API_BASE_URL + endpoint, config).then(res => {
    let response = res

    return response
  })
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'Call API'

export default store => next => action => {
  // NOSONAR need store
  const callAPI = action[CALL_API]

  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint, method, data, types } = callAPI

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  /* types from an action function -- thunk */
  const [requestType, successType, errorType, alertErrorType] = types

  next(actionWith({ type: requestType }))
  return callApi(endpoint, method, data).then(
    response => {
      next(
        actionWith({
          response,
          type: successType
        })
      )
    },
    error => {
      //respond to network or timeout errors
      if (!error.response || error.message === 'timeout of 0ms exceeded') {
        next(
          actionWith({
            error: i18next.t('NetworkError'),
            type: A.ALERT_ERROR
          })
        )
      } else {
        //else if the error has a response...
        switch (error.response.status) {
          case 401:
           // authContext.logOut()
            break
          case 500:
            /* show a high level alert or if alertErrorType is undefined
            show error message specific to the action error type  */
            if (alertErrorType === 'ALERT_ERROR' || !alertErrorType) {
              next(
                actionWith({
                  type: alertErrorType || errorType,
                  error: i18next.t([errorType, 'ServerError']),
                  message: error.response.data.message
                })
              )
            } else if (alertErrorType === 'SHOW_ERROR_500_PAGE') {
              //for errors that deem site unusable
              next(
                actionWith({
                  type: alertErrorType
                })
              )
            }
            break
          default:
            next(
              actionWith({
                type: errorType,
                error: i18next.t(errorType),
                code: error.response.data.internal_code,
                message: error.response.data.message
              })
            )
            break
        }
      }
    }
  )
}
