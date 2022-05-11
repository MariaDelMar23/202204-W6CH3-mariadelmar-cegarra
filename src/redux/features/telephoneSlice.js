import { createSlice } from "@reduxjs/toolkit";

const telephoneSlice = createSlice({
  name: "telephone",
  initialState: {
    calling: false,
    number: [],
  },
  reducers: {
    setCallingTrue: (telephone) => ({
      ...telephone,
      calling: true,
    }),
    setCallingFalse: (telephone) => ({
      ...telephone,
      calling: false,
    }),
    addDigit: (telephone, action) => ({
      ...telephone,
      number: telephone.number + action.payload,
    }),
    removeLastDigit: (telephone) => ({
      ...telephone,
      number: telephone.number.slice(0, telephone.number.length - 1),
    }),
    resetNumber: (telephone) => ({
      ...telephone,
      number: [],
    }),
  },
});

export default telephoneSlice.reducer;

export const {
  setCallingTrue: setCallingTrueActionCreator,
  setCallingFalse: setCallingFalseActionCreator,
  addDigit: addDigitActionCreator,
  removeLastDigit: removeLastDigitActionCreator,
  resetNumber: resetNumberActionCreator,
} = telephoneSlice.actions;
