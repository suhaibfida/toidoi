import { DeleteIcon } from "../icons/DeleteIcon";
import { EditIcon } from "../icons/EditIcon";
interface prop {
  width: string;
  height: string;
  todo: string[];
}
const Card = (props: prop) => {
  return (
    <>
      <div
        className={`${props.todo.length === 0 ? "hidden" : ""}
          flex justify-center duration-5000`}
      >
        <div
          className={`${props.width} ${props.height} bg-gray-200 justify-center text-center rounded-2xl my-6 `}
        >
          {" "}
          <div className="text-2xl font-bold text-slate-600">TODOS</div>
          {props.todo.map((todo) => (
            <div>
              <div className="bg-violet-500 rounded-md w-xl ml-10 h-16 mt-5 flex justify-between items-center duration-500">
                <div className="pl-2 text-white text-lg">
                  <div className="flex">
                    <div className="pr-1">🌑 </div>
                    <div>{todo}</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="pr-7 text-gray-700 hover:text-gray-600 cursor-pointer">
                    {<EditIcon />}
                  </div>
                  <div className="pr-7 text-gray-700 hover:text-gray-600 cursor-pointer">
                    {<DeleteIcon />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Card;
