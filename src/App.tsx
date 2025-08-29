import { Navbar } from "./components/ui/Navbar";
import Card from "./components/ui/Card";
import InputCard from "./components/ui/InputCard";
import Input from "./components/ui/Input";

import { useState } from "react";
function App() {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <>
      <div //here check hidden
        className={`bg-[url('./components/images/background.png')] bg-cover h-screen bg-center p-1 bg-slate-900`}
      >
        <Navbar />
        <Card value={item} width={"w-2xl"} height={"min-h-[60vh]"} />
        <InputCard
          width={"w-4xl"}
          height={"min-h-[15vh]"}
          input={<Input />}
          setItem={setItem}
        />
      </div>
    </>
  );
}

export default App;
