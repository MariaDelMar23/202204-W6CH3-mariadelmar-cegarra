import { createContext } from "react";
import telephoneReducer from "../redux/features/telephoneSlice";

const PhoneContext = createContext(telephoneReducer);

export default PhoneContext;
