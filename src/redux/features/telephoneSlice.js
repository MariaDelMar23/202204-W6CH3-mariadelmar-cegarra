import { createSlice } from "@reduxjs/toolkit";

const telephoneSlice = createSlice({
  name: "telephone",
  initialState: {
    calling: false,
    number: 0,
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
  },
});

export default telephoneSlice.reducer;

export const {
  setCallingTrue: setCallingTrueActionCreator,
  setCallingFalse: setCallingFalseActionCreator,
} = telephoneSlice.actions;
