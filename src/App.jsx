import { useState } from "react"


function App() {
 const[ color,setColor]=useState("olive")  

  return (
    <>
    
      <div className ="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
         < div className="relative h-full">
       
     <div className=" absolute top-96 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white rounded-2xl px-4 py-2"> 
     You Clicked {color} !
     </div>

      <div className="fixed flex flex-wrap justify-center 
      bottom-12 inset-x-0 px-6">

    <div className=" flex flex-wrap justify-cehter
        gap-5 shadow- bg-white px-6 py-5 rounded-3xl">
          <button 
          onClick={()=>setColor("red")}
          className="outline-none px-4 py-2 rounded-lg  text-black  border-2 shadow-lg "
          style={{backgroundColor:"red"}}>
            Red</button>
            <button 
            onClick={()=>setColor("green")}
            className="outline-none px-4 py-2 rounded-lg  text-black  border-2 shadow-lg"
            style={{backgroundColor:"green"}}>
         Green</button>
         <button 
          onClick={()=>setColor("black")}
         className="outline-none px-4 py-2 rounded-lg text-white border-2 shadow-lg"
            style={{backgroundColor:"black"}}>
         Black</button>
         <button 
         onClick={()=>setColor("yellow")}
         className="outline-none px-4 py-2 rounded-lg text-black  border-2 shadow-lg"
            style={{backgroundColor:"yellow"}}>
         Yellow</button>
         <button 
         onClick={()=>setColor("pink")}
         className="outline-none px-4 py-2 rounded-lg text-black  border-2 shadow-lg"
            style={{backgroundColor:"pink"}}>
         Pink</button>
         <button 
         onClick={()=>setColor("gray")}
         className="outline-none px-4 py-2 rounded-lg text-black  border-2 shadow-lg"
            style={{backgroundColor:"gray"}}>
         Gray</button>
        </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default App
