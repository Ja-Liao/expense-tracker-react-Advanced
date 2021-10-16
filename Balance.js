import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Balance (){
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transactions => transactions.amount); // iterate through transactions (id, amount, text) and get amount
    const total = amounts.reduce((acc, item) => (acc += item), 0); //tofix gives the amount in 2 decimal places
    // sum up the total by adding up each transaction amount
    // start at index 0, 

    return (
        <>
            <h4> Your Balance </h4>
            <h1> ${total} </h1>
        </>
    )
}
