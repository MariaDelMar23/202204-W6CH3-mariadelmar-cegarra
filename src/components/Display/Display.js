import { useSelector } from "react-redux";

const Display = () => {
  const phoneNumber = useSelector((state) => state.telephone.number);
  return <span className="number">{phoneNumber}</span>;
};

export default Display;
