import axios from 'axios';
import {
  GET_BUCKETS_FAILURE,
  GET_BUCKETS_SUCCESS,
  GET_BUCKETS_REQUEST
} from './types';

const GET_BUCKETS = 'http://roadmapservice.azurewebsites.net/api/buckets';

export const getBuckets = () => async dispatch => {
  dispatch({ type: GET_BUCKETS_REQUEST });

  try {
    const response = await axios.get(GET_BUCKETS);

    dispatch({ type: GET_BUCKETS_SUCCESS, payload: { data: response.data } });
  } catch (e) {
    dispatch({ type: GET_BUCKETS_FAILURE, payload: { errorMessage: e } });
  }
};

const ACTION_HANDLERS = {
  [GET_BUCKETS_SUCCESS]: (state, action) =>
    Object.assign({}, state, { bucketsList: action.payload.data }),
  [GET_BUCKETS_FAILURE]: (state, action) =>
    Object.assign({}, state, { bucketsListError: action.payload.errorMessage })
};

const initialState = {
  buckets: []
};

const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export { initialState, reducer };
