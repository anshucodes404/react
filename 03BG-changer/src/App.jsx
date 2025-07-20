import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("red-500");
  //getting body element and adding class list of color from tailwind
  const colors = [
    "bg-red-500",
    "bg-orange-600",
    "bg-yellow-400",
    "bg-green-500",
    "bg-teal-500",
    "bg-sky-500",
    "bg-blue-700",
    "bg-purple-600",
    "bg-rose-600",
    "bg-gray-600",
    "bg-zinc-400"
  ];
  const body = document.body;
  // body.classList.add(`bg-${color}`);
  // body.style.backgroundColor = "white";
  const changeColor = (newColor) => {
    console.log(newColor)
     body.classList.remove(`${color}`)
     setColor(newColor)
     body.classList.add(`${newColor}`)
  }

  return (
    <>
      <footer className="fixed bottom-15 flex flex-wrap gap-4 justify-center items-center w-[90vw] py-4 rounded-xl left-1/2 -translate-x-1/2 bg-zinc-300">
       {colors.map((color, index) => {
         return (
           <div key={index} onClick={() => changeColor(color)}>
             <Button color={color} onclick={() => changeColor(color)} />
           </div>
         ); 
       })}
          
        
      </footer>
    </>
  );
}

export default App;
