import React, { useContext } from 'react'
import { Data } from '../App';

function Display(props) {
const{name,description,id,price,image,quantity}= props.mydata;
const{removeitem,increment,decrement}=useContext(Data);

  return (
    <>
    <div className="container">
            <div className="item item-image">
              <img src={image} alt="nothing" />
            </div>
            <div className="item-description">
              <div>
                <span>{name}</span>
              </div>
              <span>{description}</span>
            </div>

            <div className="item-add-remove">
              <div className="add-button">
                <i className="bi bi-dash" onClick={()=>{decrement(id)}} ></i>
              </div>
              <div className="display">   
                <span>{quantity}</span>
              </div>
              <div className="remove-button">
                <i className="bi bi-plus-lg" onClick={()=>{increment(id)}} ></i>
              </div>
            </div>
            <div className="item-price-remove">
              <span>{price} &#8377;</span> <span><button onClick={()=>{removeitem(id)}}>Remove</button></span>
            </div>
          </div>
    </>
  )
}

export default Display