import { useSelector } from "react-redux";

const Display = () => {
  const { number: phoneNumber } = useSelector((state) => state.telephone);

  return <span className="number">{phoneNumber}</span>;
};

export default Display;
