
export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_TOTAL":
      let {totalQuantity,totalAmount}=state.item.reduce((accu,curreValue)=>{
                                              let {quantity,price}=curreValue;
                                              accu.totalQuantity +=quantity;
                                              accu.totalAmount +=price*quantity
                                              return accu;
                                            },{totalQuantity:0,totalAmount:0})
    return{...state,totalQuantity,totalAmount}
     
    case "REMOVE":
      let id = action.payload;

      return {
        ...state,
        item: state.item.filter((currentEle) => {
          return currentEle.id !== id;
        }),
      };
    case "CLEAR":
      return {
        ...state,
        item: [],
        toggle: false,totalQuantity:0
      };
    case "INCREMENT":
      let update = state.item.map((currEle) => {
        if (currEle.id === action.payload) {
          // console.log(currEle)
          return { ...currEle, quantity: currEle.quantity + 1
           };
        }
        //    console.log(currEle)
        return currEle;
      });
      // console.log(update)
      return {
        ...state,
        item: update,
      
        
      };
    case "DECREMENT":
      let dec = state.item
        .map((currEle) => {
          if (currEle.id === action.payload) {
            // console.log(currEle)
            return { ...currEle, quantity: currEle.quantity - 1 };
          }
          //    console.log(currEle)
          return currEle;
        })
        .filter((currEle) => {
          return currEle.quantity !== 0;
        });
      // console.log(update)
      return {
        ...state,
        item: dec,
        
      };
      default:
        return state
  }

  
};
