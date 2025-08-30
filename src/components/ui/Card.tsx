import { DeleteIcon } from "../icons/DeleteIcon";
import { EditIcon } from "../icons/EditIcon";
interface prop {
  width: string;
  height: string;
  todo: any; /// here mn check
}
const Card = (props: prop) => {
  {
    props.todo.map((todo: any) => {
      // error here because of todo.ma

      return (
        <>
          <div
            className={`${0 === 0 ? "" : ""}
          flex justify-center`}
          >
            <div
              className={`${props.width} ${props.height} bg-gray-200 flex justify-center text-center rounded-2xl my-6 `}
            >
              <div>
                <div className="bg-violet-500 rounded-md w-xl h-16 mt-10 flex justify-between items-center duration-500">
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
            </div>
          </div>
        </>
      );
    });
  }
};
export default Card;
