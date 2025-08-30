interface prop {
  onClick: any; //what should i pass here
}
const Button = (props: prop) => {
  return (
    <>
      <button
        className="rounded-full ml-9 bg-violet-700 border-4  border-violet-800 border-violet-700 cursor-pointer px-7 py-[17px] font-bold text-white hover:bg-violet-600 duration-300"
        onClick={props.onClick}
      >
        Add Todo
      </button>
    </>
  );
};
export default Button;
