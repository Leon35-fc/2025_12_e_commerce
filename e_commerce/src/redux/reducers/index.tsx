const initialState = {
    cart: {
        content:[],
    }

}

const cartReducer = function(currentState= initialState, action: { type: any }){
    switch(action.type){
        default: {
            return currentState
        }
    }
}

export default cartReducer