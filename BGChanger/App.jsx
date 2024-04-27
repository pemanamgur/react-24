import { useState } from 'react'

import './App.css'

function App() {
  
    const [color , setColor] = useState("olive");

  return (
    <>
        <div className='w-full h-screen   '
         style={{backgroundColor : color}}
        >
          <div className='fixed bottom-1 w-full flex flex-wrap justify-center px-2 rounded-md'>
             <div className='flex flex-wrap bg-white p-1 gap-2 rounded-md justify-center m-auto shadow-lg  '>

             <button 
                  className='  px-2 rounded-md text-white '
                  onClick={()=> setColor("red")}
                  style={{backgroundColor : "red"}}
                 >red</button>
             <button 
                  className='  px-2 rounded-md text-white '
                  onClick={()=>setColor("blue")}
                  style={{backgroundColor : "blue"}}
                 >blue</button>
             <button 
                  className='  px-2 rounded-md text-white '
                  onClick={()=>setColor("green")}
                  style={{backgroundColor : "green"}}
                 >green</button>
             <button 
                  className='  px-2 rounded-md text-white '
                  onClick={()=>setColor("yellow")}
                  style={{backgroundColor : "yellow"}}
                 >yellow</button>

            
              

             </div>
          </div>
        </div>
    </>
  )
}

export default App
