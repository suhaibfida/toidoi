import Button from "./Button";
interface prop {
  width: string;
  height: string;
  setItem: (val: any) => void; // should i use any or string here and also what is name of the value here.
  input?: any;
  button?: any;
}
const InputCard = (props: prop) => {
  function onClick(e: any) {
    //here also
  }
  return (
    <>
      <div className="flex justify-center ">
        <div
          className={`${props.width} ${props.height} text-center rounded-2xl py-6 flex items-center justify-center`}
        >
          {props.input}
          <Button onClick={onClick} />
        </div>
      </div>
    </>
  );
};
export default InputCard;
