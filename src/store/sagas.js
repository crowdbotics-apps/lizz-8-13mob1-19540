import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* dogapi_get_breeds_image_random_readWorker(action) {
  try {
    const result = yield call(
      apiService.dogapi_get_breeds_image_random_read,
      action
    )
    yield put(actions.dogapi_get_breeds_image_random_readSucceeded(result))
  } catch (err) {
    yield put(actions.dogapi_get_breeds_image_random_readFailed(err))
  }
}
function* dogapi_get_breeds_image_random_readWatcher() {
  yield takeEvery(
    types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ,
    dogapi_get_breeds_image_random_readWorker
  )
}
function* freedogapi_get_breeds_image_random_readWorker(action) {
  try {
    const result = yield call(
      apiService.freedogapi_get_breeds_image_random_read,
      action
    )
    yield put(actions.freedogapi_get_breeds_image_random_readSucceeded(result))
  } catch (err) {
    yield put(actions.freedogapi_get_breeds_image_random_readFailed(err))
  }
}
function* freedogapi_get_breeds_image_random_readWatcher() {
  yield takeEvery(
    types.FREEDOGAPI_GET_BREEDS_IMAGE_RANDOM_READ,
    freedogapi_get_breeds_image_random_readWorker
  )
}
function* freedogapi_get_breeds_image_random_readWorker(action) {
  try {
    const result = yield call(
      apiService.freedogapi_get_breeds_image_random_read,
      action
    )
    yield put(actions.freedogapi_get_breeds_image_random_readSucceeded(result))
  } catch (err) {
    yield put(actions.freedogapi_get_breeds_image_random_readFailed(err))
  }
}
function* freedogapi_get_breeds_image_random_readWatcher() {
  yield takeEvery(
    types.FREEDOGAPI_GET_BREEDS_IMAGE_RANDOM_READ,
    freedogapi_get_breeds_image_random_readWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    dogapi_get_breeds_image_random_readWatcher,
    freedogapi_get_breeds_image_random_readWatcher,
    freedogapi_get_breeds_image_random_readWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
