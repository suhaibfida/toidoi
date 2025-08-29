import { DeleteIcon } from "../icons/DeleteIcon";
import { EditIcon } from "../icons/EditIcon";
interface prop {
  width: string;
  height: string;
  value: string;
}
const Card = (props: prop) => {
  return (
    <>
      <div
        className={`flex justify-center ${props.value.length === 0 ? "" : ""}`}
      >
        <div
          className={`${props.width} ${props.height} bg-gray-200 flex justify-center text-center rounded-2xl my-6 `}
        >
          <ul>
            <li>
              <div className="bg-violet-500 rounded-md w-xl h-16 mt-10 flex justify-between items-center duration-500">
                <div className="pl-2 text-white text-lg">
                  <div className="flex">
                    <div className="pr-1">🌑 </div>
                    <div>
                      I will try to learn something about websockets today.
                    </div>
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
            </li>
          </ul>
          {props.value}
        </div>
      </div>
    </>
  );
};
export default Card;
