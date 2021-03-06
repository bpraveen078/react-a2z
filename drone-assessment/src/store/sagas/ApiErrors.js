import { takeEvery, call } from "redux-saga/effects";
import * as actions from "../actions";
import { toast } from "react-toastify";

function* apiErrorReceived(action) {
  debugger
  yield call(toast.error, `Error Received: ${action.code}`);
}

function* watchApiError() {
  yield takeEvery(actions.API_ERROR, apiErrorReceived);
}

export default [watchApiError];
