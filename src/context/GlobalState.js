import React, {createContext, useReducer} from 'react'; // curcly brackets are used to place any valid javascript expression(function or variable)
import AppReducer from './AppReducer'; 

// Initial state
const initialState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 }, // expense: negative number, income: positive number
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
// helps to pass the transaction to multiple components
export default function GlobalProvider({ children }){
    const [state, dispatch] = useReducer(AppReducer, initialState); //appReducer allows more complicated manipulation of variables

    //dispatch helps to update the actions
    
    // actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    // actions
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}