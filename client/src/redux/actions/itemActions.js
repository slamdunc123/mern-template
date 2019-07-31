import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  ITEMS_LOADING
} from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/items').then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const addItem = item => dispatch => {
  console.log(item);
  axios.post('/api/items', item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const deleteItem = id => dispatch => {
  console.log(id);
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const updateItem = (id, updatedItem) => dispatch => {
  console.log(id);
  console.log(updatedItem);
  axios
    .put(`/api/items/${id}`, updatedItem, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res =>
      dispatch({
        type: UPDATE_ITEM,
        payload: res.data
      })
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
