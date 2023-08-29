export default function FiltersQuantity({ valueArray }) {
  const [value, setValue] = valueArray || [];
  return (
    <div className="flex justify-between">
      <div
        onClick={() => setValue(0)}
        className={`border px-7 py-2 rounded-full cursor-pointer ${
          value == 0 ? "bg-black text-white" : ""
        }`}
      >
        Any
      </div>
      <div
        onClick={() => setValue(1)}
        className={`border px-7 py-2 rounded-full cursor-pointer ${
          value == 1 ? "bg-black text-white" : ""
        }`}
      >
        1
      </div>
      <div
        onClick={() => setValue(2)}
        className={`border px-7 py-2 rounded-full cursor-pointer ${
          value == 2 ? "bg-black text-white" : ""
        }`}
      >
        2
      </div>
      <div
        onClick={() => setValue(3)}
        className={`border px-7 py-2 rounded-full cursor-pointer ${
          value == 3 ? "bg-black text-white" : ""
        }`}
      >
        3
      </div>
      <div
        onClick={() => setValue(4)}
        className={`border px-7 py-2 rounded-full cursor-pointer ${
          value == 4 ? "bg-black text-white" : ""
        }`}
      >
        4
      </div>
      <div
        onClick={() => setValue(5)}
        className={`border px-7 py-2 rounded-full cursor-pointer ${
          value == 5 ? "bg-black text-white" : ""
        }`}
      >
        5
      </div>
      <div
        onClick={() => setValue(6)}
        className={`border px-7 py-2 rounded-full cursor-pointer ${
          value == 6 ? "bg-black text-white" : ""
        }`}
      >
        6
      </div>
      <div
        onClick={() => setValue(7)}
        className={`border px-7 py-2 rounded-full cursor-pointer ${
          value == 7 ? "bg-black text-white" : ""
        }`}
      >
        7
      </div>
      <div
        onClick={() => setValue(8)}
        className={`border px-7 py-2 rounded-full cursor-pointer ${
          value == 8 ? "bg-black text-white" : ""
        }`}
      >
        8+
      </div>
    </div>
  );
}
