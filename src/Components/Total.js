import React, { useContext } from 'react'
import { Data } from '../App';

function Total() {

    const {clearall,totalAmount}=useContext(Data)
  return (
    <>
    <h3>{`Total Value:${totalAmount} `}:</h3>
    <button>Checkout</button>
    <button onClick={()=>{clearall()}}>ClearAll</button>
    </>
  )
}

export default Total;