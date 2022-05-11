import { configureStore } from "@reduxjs/toolkit";
import telephoneReducer from "../features/telephoneSlice";

const store = configureStore({
  reducer: { telephone: telephoneReducer },
});

export default store;
