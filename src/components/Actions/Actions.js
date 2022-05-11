import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneContext from "../../contexts/PhoneContext";
import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = () => {
  const { call, hang } = useContext(PhoneContext);
  const dispatch = useDispatch();
  const { calling, number: phoneNumber } = useSelector(
    (state) => state.telephone
  );

  const call = (event) => {};
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
