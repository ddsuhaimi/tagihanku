import { DELETE_BARANG, GET_BARANGS, ADD_BARANG, UPDATE_BARANG, UPDATE_DETAIL, CALCULATE_TOTAL } from "./types";

export const getBarangs = () => {
  return {
    type: GET_BARANGS,
  };
};
export const deleteBarang = (id) => {
  return {
    type: DELETE_BARANG,
    payload: id,
  };
};
export const addBarang = (barang) => {
  return {
    type: ADD_BARANG,
    payload: barang
  }
}
export const updateBarang = (barang) => {
  return {
    type: UPDATE_BARANG,
    payload: barang
  }
}
export const updateDetail = (fields) => {
  return {
    type: UPDATE_DETAIL,
    payload: fields
  }
}
export const calculateTotal = () => {
  return {
    type: CALCULATE_TOTAL
  }
}
