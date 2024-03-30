import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "WATCH_LIST" actions

function* fetchWatchList(action) {
  console.log('In the FETCH Watchlist!');
  try {
    // Get the WATCH_LIST:
    const watchListResponse = yield axios.get(
      `/api/watchlist/${action.payload}`
    );
    console.log('Fetch Response:', watchListResponse);
    // Set the value of the WATCH_LIST reducer:
    yield put({
      type: 'SET_WATCH_LIST',
      payload: watchListResponse.data,
    });
  } catch (error) {
    console.log('fetchAllWATCH_LIST error:', error);
  }
}

function* watchListSaga() {
  yield takeEvery('FETCH_WATCH_LIST', fetchWatchList);
}

export default watchListSaga;