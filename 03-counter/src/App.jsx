import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [counter , setCounter] = useState(0);

  const increase = () =>{
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      console.log("Counter cannot go above 20");
    }
  }

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("Counter cannot go below 0");
    }

  };




  // let [counter, setCounter] = useState(15)
  // const addValue = () => {
  //   //counter = counter + 1
  //   setCounter(counter + 1)
  //   console.log("clicked", counter);
  // }


  // //let counter = 15


  // const removeValue = () => {
  //   setCounter(counter - 1)
  // }
  
  return (
    // <>
    //   <h1>Chai aur react</h1>
    //   <h2>Counter value: {counter}</h2>

    //   <button
    //   onClick={addValue}
    //   >Add value {counter}</button> 
    //   <br />
    //   <button
    //   onClick={removeValue}
    //   >remove value {counter}</button>
    //   <p>footer: {counter}</p>
    // </>


    <>
    <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increase}>Increase value {counter}</button>
      <br />
      <br/>
      <button onClick={decrease}>Decrease value {counter}</button>

      <p>footer: {counter}</p>
    </>
  )

}
export default App