const Input = () => {
  return (
    <input
      className="w-md bg-gray-200 rounded-full h-12 text-slate-800 p-7 border-5 border-violet-700 leading-loose font-bold text-md outline-none"
      type="text"
      name="input"
      spellCheck={false}
      placeholder="Enter your todo....."
    />
  );
};
export default Input;
