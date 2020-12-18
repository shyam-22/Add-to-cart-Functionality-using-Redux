
//........My all Action...............


export const addToCart = (data) => {
    return{
        type:"ADD_TO_CART",
        payload : data
    }
}


export const removeToCart = () => {
    return{
        type:"REMOVE_TO_CART",
        payload : ""
    }
}