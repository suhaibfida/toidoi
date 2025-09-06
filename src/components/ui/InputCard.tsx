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
    props.setTodo((prev: []) => [...prev, props.item]);
  }
  return (
    <>
      <div className="flex justify-center items-end">
        <div
          className={`${props.width} ${props.height} text-center rounded-2xl fixed translate-y-70`}
        >
          {/* <Input onChange={onChange} value={setItem} /> */} how to pass prop
          here i want to pass value and setitem so that i can set input value to
          ""
          <Button onClick={onClick} />
        </div>
      </div>
    </>
  );
};
export default InputCard;
