import { useState } from "react";




function App() {

  const [count,setCount] = useState(()=>{})


 function decrementCount() {

  setCount(prevCount => prevCount - 1);
 }

 function increaseCount(){

  setCount(prevCount => prevCount + 1);
 }











  return (
  <>
  <button onClick={decrementCount}>-</button>
  <span>{count}</span>
  <button onClick={increaseCount}>+</button>
  <br></br>

  
  </>
  );
}

export default App;
