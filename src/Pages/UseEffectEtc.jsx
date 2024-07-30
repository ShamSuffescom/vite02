import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';

const UseEffectEtc = () => {
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    // const length = 6; // Define the length of the password
    const [length, setLength] = useState(6);

    // useRef 
    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()_+{}";

        for (let i = 0; i < length; i++) {
            let char = str.charAt(Math.floor(Math.random() * str.length));
            pass += char;
        }

        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charAllowed, passwordGenerator]);


    const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select() // for text selection
      passwordRef.current?.setSelectionRange(0,5)
      window.navigator.clipboard.writeText(password) // for copy
    },[password])

    return (
        <div>
            <h1>useEffectEtc Page</h1>
            <p>Password: {password}</p>

            <div>
                <label>
                  Password:
                  <input
                    type='text'
                    value={password}
                    placeholder='Password'
                    readOnly
                    ref={passwordRef}
                  />
                </label>
                <button 
                onClick={copyPasswordToClipboard}
                className='copy-password'>
                  Copy
                </button>

                <input
                  type='range'
                  min={6}
                  max={100}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e)=>(
                    setLength(e.target.value)
                  )}
                />
                <label>Lable:{length}</label>

                <label>
                    <input 
                        type="checkbox" 
                        checked={numberAllowed}
                        // onChange={() => setNumberAllowed(!numberAllowed)}
                        onChange={() => setNumberAllowed((Prev) => !Prev)}
                    />
                    Allow Numbers
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        checked={charAllowed}
                        // onChange={() => setCharAllowed(!charAllowed)}
                        onChange={() => setCharAllowed((Prev) => !Prev)}
                    />
                    Allow Special Characters
                </label>
            </div>
        </div>
    );
};

export default UseEffectEtc;

// import {React, useState, useCallback, useEffect, useRef} from 'react';
// import { Prev } from 'react-bootstrap/esm/PageItem';

// const UseEffectEtc = () => {
//     const [numberAllowed, setNumberAllowed] = useState(false);
//     const [charAllowed, setCharAllowed] = useState(false);
//     const [password, setPassword] = useState("");

//     const passwordGenerator = useCallback(() => {
//             let pass = "";
//             let str = "ABCABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//             if(numberAllowed) str += "0123456789";
//             if(charAllowed) str += "!@#$%^&*()_+{}";

//             for (let i = 1; i < length; i++) {
//                 let char= Math.floor(Math.random() * str.length + 1);
//                 pass += char; 
//             }
            
//             setPassword(pass);
//         }, [length, numberAllowed, charAllowed, setPassword]
        
//     ); 

//     useEffect(()=>{
//         passwordGenerator(),[length, numberAllowed, charAllowed,passwordGenerator]
//     });
  
//     return () => {
//     <div>
//       <h1>useEffectEtc Page</h1>
      

//     </div>
//   }
// };


// export default UseEffectEtc;
