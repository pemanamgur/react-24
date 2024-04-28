import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  let [length , setLength] = useState(12);
  let [numberAllowed , setNumberAllowed] = useState(false);
  let [charAllowed , setCharAllowed] = useState(false);
  let [password , setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
         
     let pass = "";
     let strings  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
     let num = '0123456789';
     let specChar = '!@#$%^&*(){}[]?><~';
     
     if(numberAllowed) strings += num ;
     if(charAllowed) strings += specChar ;

     for(let i = 1 ; i < length ; i++){
        
      let position = Math.floor(Math.random() * strings.length + 1) ;
      pass += strings.charAt(position)
     }
     setPassword(pass);

  },[length , numberAllowed , charAllowed ]);
        
  //UseRef hooks
  let passwordRef = useRef(null);

  let copyToClipboard = useCallback(()=>{
     passwordRef.current?.select();
     passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password);
  },[password])
  
  useEffect(()=>{
    passwordGenerator();
  },[length , numberAllowed , charAllowed ]);

  return (
    <>
            <div className='w-full p-4 my-8 rounded-md max-w-screen-md mx-auto text-orange-400 bg-gray-500 '> 
            
            <div className='flex overflow-hidden  gap-10 px-2'>
              <input
               type="text"
               value={password}
               className='  text-black outline-none rounded-md w-2/3 bg-slate-300'
               placeholder='password'
               ref={passwordRef}
               readOnly
               />
               <button className=' bg-blue-700 px-2 text-white rounded-md'
                       onClick={copyToClipboard}
               >copy</button>
            </div>
            <div className='flex gap-20 items-center  '>
               <div className='flex'>
                <input type="range" min={0} max={100}
                 className='m-2 '
                 value={length}
                 onChange={(e)=> setLength(e.target.value) }
                />
                <label >length: {length}</label>
               </div>
               <div className='flex gap-3'>
                   <input type="checkbox" 
                   defaultChecked={numberAllowed}
                   onChange={()=>{
                    setNumberAllowed((prev)=> !prev)
                   }}
                     />
                   <label>number</label>
                   <input type="checkbox" 
                   defaultChecked={charAllowed}
                   onChange={()=>{
                    setCharAllowed((prev)=> !prev)
                   }}
                   />
                   <label >character</label>
               </div>
            </div>
            </div>

    </>
  )
}

export default App
