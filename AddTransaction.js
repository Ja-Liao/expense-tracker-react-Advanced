import React, {useState, useContext} from 'react' 
import { GlobalContext } from '../context/GlobalState';

//hook let us use state(variables) and other React features without writing a class
// to use a hook, have useState on top and do const[var, fcn] = useState();

export default function AddTransaction (){
    const [text, setText] = useState(''); // state is kinda like variables for a function. When state changes, the component responds by re-rendering.
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault(); // prevents the page from refreshing

        const newTransaction ={ // creates the new variable
            id: Math.floor(Math.random() * 100000000), // creates an random id
            text,
            amount: +amount // turn amount into an number
        }

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}> {/*onsubmit goes to onsubmit function */}
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
            <div className="form-control">
            <label htmlFor="amount">Amount <br /> {/*<br> creates a new line*/}
                (negative - expense, positive - income)
            </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
    )
}
