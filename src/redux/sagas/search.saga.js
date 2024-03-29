import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "PROFILE" actions
function* searchAnime(action) {
  console.log('SEARCH', action.payload);
  try {
    //passes the favorite_genres and avatar from the payload to the server
    const searchResponse = yield axios.get(
      `/api/anime/search`
      // `/api/anime/search/${action.payload}`
    );
    yield put({
      type: 'SET_SEARCH',
      payload: searchResponse.data,
    });
    alert('Anime Found!');
  } catch (error) {
    console.log('Error with SEARCH!!:', error);
  }
}

function* searchSaga() {
  yield takeEvery('SEARCH_ANIME', searchAnime);
}

export default searchSaga;
