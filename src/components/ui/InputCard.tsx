import Button from "./Button";
import Input from "./Input";
interface prop {
  width: string;
  height: string;
  setItem: (val: any) => void;
  item: any; // dow we always use function in state setter and check why any is here
  setTodo: (val: any) => void;
  todo: any;
  input?: any;
  button?: any;
}
const InputCard = (props: prop) => {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    //what if there are two input boxes there how it will differentiate onchange
    const value = e.target.value;
    props.setItem(value);
  }

  function onClick(e: any) {
    //what will be the type here
    props.setTodo((prev: []) => [...prev, props.item]); // is this correct
  }
  return (
    <>
      <div className="flex justify-center ">
        <div
          className={`${props.width} ${props.height} text-center rounded-2xl py-6 flex items-center justify-center`}
        >
          <Input onChange={onChange} />
          <Button onClick={onClick} />
        </div>
      </div>
    </>
  );
};
export default InputCard;
