import "./loading.css";

const CardLoading = () => {
  return (
    <div className="w-full border-2 rounded-md p-2">
      <div className="w-full h-[205px] skeleton rounded-md" />
      <div className="w-[50%] skeleton rounded h-3 mt-2" />
      <div className="w-[90%] h-3 mt-2 rounded skeleton" />
      <div className="w-[35%] h-3 mt-2 rounded skeleton" />
    </div>
  );
};

export default CardLoading;
