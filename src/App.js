import React from 'react';
import './App.css';
import {createStore} from 'redux';
/*Flow
1. Store:- to maintain the state globally
2. Action:- Add, edit, increment, decrement
3. Reducer:- to manupulate the state according to the action
4. dispatch:-  
*/

const increment=()=>{
    return {
      type:"INCREMENT",
    }
}

const decrement=()=>{
  return {
    type:"DECREMENT",
  }
}

const reducer=(state=0, action)=>{
    switch(action.type){
      case "INCREMENT":
        return state+1;
      case "DECREMENT":
          return state-1;
      default:
        return state
    }
}

const store=createStore(reducer);
store.subscribe(()=>{console.log(store.getState())});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());


function App() {
  return (
    <div className="App">
     <h1>Hello World
     </h1>
    </div>
  );
}

export default App;
