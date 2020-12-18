

export const cartItems = (data= [], action) => {
    switch(action.type){
        case "ADD_TO_CART" :
            data.push(action.payload)
            return [...data]

        case "REMOVE_TO_CART" :
            data.pop()
            return [...data]
        
         default : 
            return data   
    }
}

// case "ADD_TO_CART" : 
// let temp = [...state.cardData]
// temp.push(action.data)
// console.log(temp)
// return { ...state, cardData:temp }

// case "REMOVE_TO_CART" :
// state.pop()
// return [...state]

// default : 
// return state 