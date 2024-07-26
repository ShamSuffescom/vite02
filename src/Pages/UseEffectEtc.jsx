import {React, useState, useCallback, useEffect, useRef} from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';

const UseEffectEtc = () => {
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
            let pass = "";
            let str = "ABCABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            if(numberAllowed) str += "0123456789";
            if(charAllowed) str += "!@#$%^&*()_+{}";

            for (let i = 1; i < length; i++) {
                let char= Math.floor(Math.random() * str.length + 1);
                pass += char; 
            }
            
            setPassword(pass);
        }, [length, numberAllowed, charAllowed, setPassword]
        
    ); 

    useEffect(()=>{
        passwordGenerator(),[length, numberAllowed, charAllowed,passwordGenerator]
    })
  
    return () => {
    <div>
      <h1>useEffectEtc Page</h1>
      <input type='text' value={password} name='password'/>
      <button >Copy</button>

      <input 
      type='checkbox'
      defaultChecked={charAllowed}
      onClick={()=>{
        setCharAllowed((Prev) => !Prev)
      }}
      />

    </div>
  }
};


export default UseEffectEtc;
