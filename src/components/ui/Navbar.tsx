export function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-gray-200 mb-12 py-5 rounded-full">
        <div className="flex">
          <div className="font-bold text-violet-800 text-3xl text-slate-600 pl-5">
            toidoi
          </div>
          <div className="text-slate-600">.com</div>
        </div>
        <div className="items-center flex mx-10">
          <div className="text-slate-700 text-lg mx-10 font-bold">Home</div>
          <div className="text-slate-600 text-lg">
            Nothing here just chilling around😎
          </div>
        </div>
      </div>
    </>
  );
}
