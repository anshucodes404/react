import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [incNumbers, setIncNumbers] = useState(false);
  const [incCharacters, setIncCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const passref = useRef();

  //using useCallback for optimization
  const generatePassword = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (incNumbers) str += "0123456789";
      if (incCharacters) str += "!@#$%^&*()_-+{}[]|";

      for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * str.length);
        pass += str.charAt(index);
      }
      setPassword(pass);
    },
    [length, incNumbers, incCharacters, setPassword] //this is the array which includes what all values to keep in cache
    //useCallback remebers the values of incNumbers and all variables in dependency array and not runs the lines in which variable value has not been changed
  );

  useEffect(() => {
    generatePassword();
  }, [incNumbers, length, incCharacters]);

  const copy = () => {
    passref.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("Password copied")
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold mt-4 text-black">
        Password Generator
      </h1>
      <div className="max-w-1/2 mx-auto bg-slate-600 py-5 rounded-xl mt-4">
        <div className="flex items-center justify-center gap-5 h-8">
          <input
            className="bg-white text-black rounded-md focus:outline-none focus:border-none px-1.5 h-full overflow-hidden w-80"
            type="text"
            value={password}
            ref={passref}
            readOnly
          />
          <button
            onClick={copy}
            className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 h-full px-5 rounded-md font-semibold"
          >
            Copy
          </button>
        </div>

        <div className="flex items-center justify-center mt-4 gap-5">
          <div className="flex items-center justify-center gap-2">
            <input
              id="lengthPass"
              type="range"
              min={8}
              max={50}
              defaultValue={8}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="lengthPass">length({length})</label>
          </div>
          <div className="flex items-center justify-center gap-2">
            <input
              id="numbers"
              type="checkbox"
              onChange={() => setIncNumbers((prev) => !prev)}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="flex items-center justify-center gap-2">
            <input
              id="characters"
              type="checkbox"
              onChange={() => setIncCharacters((prev) => !prev)}
            />
            <label htmlFor="characters">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
