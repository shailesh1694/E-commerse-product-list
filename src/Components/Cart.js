import React,{useState,useContext} from "react";
import "./Cart.css"
import {Data} from '../App';
import Display from "./Display";
import Total from "./Total";




function Cart() {

const {item}=useContext(Data)
// console.log(data[0].name)
  return (
    <>
      <main>
        <section>

          {
            item.map((currentEle,index)=>{
              return<Display mydata={currentEle} key={index} />
                    
              
            })
          }
          
        </section>
        
      </main>
    </>
  );
}

export default Cart;
