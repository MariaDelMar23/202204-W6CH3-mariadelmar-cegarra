import { useSelector } from "react-redux";

const Info = () => {
  const { calling } = useSelector((state) => state.telephone);

  return (
    <>
      <span className={`message${calling ? "" : " off"}`}>Calling...</span>
    </>
  );
};

export default Info;
