import { LOCATION_CHANGE } from 'connected-react-router';
import { takeEvery, put, select, call, takeLatest } from 'redux-saga/effects';
import { END_LOADING, SET_DATA, SET_MENU, SET_MENU_SAGA, START_LOADING, SET_CATEGORY_SAGA, SET_CATEGORY } from '../constants';
import { SET_ERROR_IMGS } from './../constants';
import axios from 'axios';
import { delay } from './../../auxiliary';
import { API_URL } from '../../config'

export function* categoryFn({ payload }) {
  yield put({ type: SET_CATEGORY, payload })
}

async function getImgs() {
  await delay(500)
  return axios({
    method: 'get',
    url: API_URL
  }).then(resp => resp.data);
}

function* fetchImgs() {
  try {
    yield put({ type: START_LOADING })
    const result = yield call(getImgs);
    yield put({ type: SET_DATA, payload: result })
  }
  catch (error) {
    yield put({ type: SET_ERROR_IMGS, payload: "Error loading imgs " })
  }
  finally {
    yield put({ type: END_LOADING })
  }
}

export function* menuFn({ payload }) {
  yield put({ type: SET_MENU, payload })
}

export function* watchSaga() {
  const path = yield select(({ router }) => router.location.pathname);
  if (path === '/') {
    yield call(fetchImgs);
  }
}

export default function* rootSaga() {
  yield takeLatest(LOCATION_CHANGE, watchSaga);
  yield takeEvery(SET_MENU_SAGA, menuFn)
  yield takeEvery(SET_CATEGORY_SAGA, categoryFn)
}