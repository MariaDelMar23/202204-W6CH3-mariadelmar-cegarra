import { useDispatch, useSelector } from "react-redux";
import {
  addDigitActionCreator,
  removeLastDigitActionCreator,
} from "../../redux/features/telephoneSlice";
import Key from "../Key/Key";

const Keyboard = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const dispatch = useDispatch();
  const { calling, number: phoneNumber } = useSelector(
    (state) => state.telephone
  );

  const addDigit = (number) => {
    if (phoneNumber.length === 9) {
      return;
    }
    dispatch(addDigitActionCreator(number));
  };

  const removeLastDigit = () => {
    dispatch(removeLastDigitActionCreator());
  };

  return (
    <ol className="keyboard">
      {numbers.map((number) => (
        <Key
          key={number}
          text={number}
          disabled={calling}
          actionOnClick={() => addDigit(number)}
        />
      ))}
      <Key
        text="delete"
        big={true}
        actionOnClick={removeLastDigit}
        disabled={calling}
      />
    </ol>
  );
};

export default Keyboard;
