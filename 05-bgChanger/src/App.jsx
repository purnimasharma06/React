import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive") // .. as we want to pass variable 
  // usestate -  If you want to remember something and change it, you use useState
  return (
    <div className="w-full h-screen duration-200"
    // as we want to hold the color in a variable
    // style must be written in double curly braces - this is the syntax
    // we can give the color directly by style={{backgroundColor : "yellow"}}
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 

          <button
          onClick={() => setColor("red")} 
          /* onclick expects that we should passs a function in that so we cannot write onClick={setColor} 
           here we are passing the reference of the function , also if we are writing like this we cannot pass 
           any parameter in that , and if we write like setColor("blue"), then we are directly executing it*/
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>


          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>


          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>


        </div>
      </div>
    </div> 
  )
}
export default App
/* why olive is coming after refreshing the page -  as olive is the default value for variable color and on 
clicking button we are updating values & UI as well */


