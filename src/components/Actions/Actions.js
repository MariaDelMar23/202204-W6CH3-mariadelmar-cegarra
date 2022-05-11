import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetNumberActionCreator,
  setCallingFalseActionCreator,
  setCallingTrueActionCreator,
} from "../../redux/features/telephoneSlice";
import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = () => {
  const timer = useRef(null);

  const dispatch = useDispatch();
  const { calling, number: phoneNumber } = useSelector(
    (state) => state.telephone
  );

  const call = (event) => {
    if (phoneNumber.length < 9) {
      return;
    }
    dispatch(setCallingTrueActionCreator());
    timer.current = setTimeout(() => {
      hang();
    }, 5000);
  };

  const hang = (event) => {
    dispatch(resetNumberActionCreator());
    dispatch(setCallingFalseActionCreator());
    dispatch(setCallingFalseActionCreator());
  };

  return (
    <>
      <Display />
      {!calling && (
        <Action
          action="call"
          isActive={phoneNumber.length === 9}
          actionOnClick={call}
        />
      )}
      {calling && <Action action="hang" isActive={true} actionOnClick={hang} />}
    </>
  );
};

export default Actions;
