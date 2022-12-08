import logo from "./logo.svg";
import "./App.css";
import Cart from "./Components/Cart";
import Search from "./Components/Search";
import React, { useReducer, createContext, useEffect } from "react";
import { reducer } from "./Components/reducer";
import API from "./Components/API";
import Total from "./Components/Total";


//initial value for reducer hook

const initialvalue = {
  item: API,
  isloadingd: false,
  toggle:true,
  totalQuantity:0,
  totalAmount:0
};
//create contex for data pass in components
export const Data = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialvalue);


  //for remove item in card
  const removeitem = (id) => {
    console.log(id);
   return dispatch({ type: "REMOVE", payload: id });
  };


  //Claar Card
  const clearall = () => {
   return dispatch({ type: "CLEAR" });
  };

  //increment 
  const increment=(id)=>{
   return dispatch({type:"INCREMENT",payload:id})

  }
  //decrement 
  const decrement =(id)=>{
   return dispatch({type:"DECREMENT",payload:id
    })
  }


  // for total data
  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
  }, [state.item]);

  return (
    <div className="App">
      <Data.Provider value={{ ...state, removeitem, clearall,increment,decrement }}>
        <Search />
        <br></br>
        <h1>{`Total card Itme is ${state.totalQuantity}`} </h1>
        <Cart />
      { state.toggle? <Total />:<h4>No Itme in Card !</h4>}
      </Data.Provider>
    </div>
  );
}

export default App;
