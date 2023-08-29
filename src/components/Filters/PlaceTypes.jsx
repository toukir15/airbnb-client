export default function PlaceTypes() {
  return (
    <>
      <h2 className="mt-6 text-2xl font-medium mb-2">Type of place</h2>
      <p>
        Search rooms, entire homes and more. Total prices shown for 5 nights
        before taxes.
      </p>
      {/* type of place  */}
      <div className="flex justify-center mt-4">
        <div className="px-16 flex flex-col items-center justify-center border py-2 rounded-s-lg bg-slate-800 text-white">
          <p>Any type</p>
          <p>$936 avg.</p>
        </div>
        <div className="px-16 flex flex-col items-center justify-center border py-2">
          <p>Room</p>
          <p>$3,000 avg.</p>
        </div>
        <div className="px-16 flex flex-col items-center justify-center border py-2 rounded-e-lg">
          <p>Entire home</p>
          <p>$778 avg.</p>
        </div>
      </div>
    </>
  );
}
