import { Navbar } from "./components/ui/Navbar";
import Card from "./components/ui/Card";
import InputCard from "./components/ui/InputCard";

import { useState } from "react";
function App() {
  const [item, setItem] = useState<string>("");
  const [todo, setTodo] = useState<string[]>([]);
  return (
    <>
      <div
        className={`bg-[url('./components/images/background.png')] bg-cover h-screen bg-center p-1 bg-slate-900`}
      >
        <Navbar />
        <Card width={"w-2xl"} height={"min-h-[60vh]"} todo={todo} />
        <InputCard
          width={"w-4xl"}
          height={"h-10"}
          item={item}
          setItem={setItem}
          setTodo={setTodo}
          todo={todo}
        />
      </div>
    </>
  );
}

export default App;
