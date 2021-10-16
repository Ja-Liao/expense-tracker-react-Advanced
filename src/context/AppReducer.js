//When the new variable is based upon the previous one
//specify the application state changes in response to certain actions to our context

// for deleting and adding purposes

//reducer as an event listener which handles events based on the received action (event) type
// Reducer follows 
    //They should only calculate the new state value based on the state and action arguments
    //They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
    //They must not do any asynchronous logic, calculate random values, or cause other "side effects"

export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                //...state, // send all children of state 
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload) // want all of the transactions except the one that was deleted
            }
        case 'ADD_TRANSACTION':
            return{
                //...state, 
                transactions: [action.payload, ...state.transactions] //The Spread operator lets you expand an iterable like an object, string, or array into its elements
            }
        default:
            return state;
    }
}