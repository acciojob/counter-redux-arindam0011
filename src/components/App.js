
  import React from "react";
  import './../styles/App.css';
  import { useSelector, useDispatch } from "react-redux";
  import { increment, decrement } from "../Utill/Counter";

  const App = () => {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
          <p>Your count is: <span>{count}</span></p>
          <button onClick={() => dispatch(increment(1))}>Increment</button>
          <button onClick={() => dispatch(decrement(1))}>Decrement</button>
        </div>
    )
  }

  export default App
