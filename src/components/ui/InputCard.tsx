import Button from "./Button";
import Input from "./Input";
interface prop {
  width: string;
  height: string;
  setItem: (val: any) => void;
  item: string;
  setTodo: (val: any) => void;
  todo: string[];
  input?: string;
  button?: string;
}
const InputCard = (props: prop) => {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    props.setItem(value);
  }

  function onClick(e: React.MouseEvent<HTMLInputElement>) {
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
