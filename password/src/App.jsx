import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setlength] = useState(8);
  const [numallowed, setnum] = useState(false);
  const [charallowed, setchar] = useState(true);
  const [pass, setpass] = useState('');

  const passwordRef = useRef(null);

  const passwordgenerator = useCallback(() => {
    let Password = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numallowed) str += '0123456789';
    if (charallowed) str += '!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      Password += str.charAt(index);
    }
    setpass(Password);
  }, [length, numallowed, charallowed]);

  //very important-> useRef, kisi cheez se reference lena rehta hai tab use krte hai ye

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      //agar ek range k andar select krna hai!!
      passwordRef.current.setSelectionRange(0, 101);
      window.navigator.clipboard.writeText(pass);
    }
  }, [pass]);
//run krne ki cheez yha useEffect se hogi
  useEffect(() => {
    passwordgenerator();
  }, [length, numallowed, charallowed, passwordgenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setlength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numallowed}
              id="numberInput"
              onChange={() => setnum((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charallowed}
              id="characterInput"
              onChange={() => setchar((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

