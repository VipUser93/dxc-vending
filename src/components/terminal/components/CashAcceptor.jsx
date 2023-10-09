import React from "react";
import { useDispatch } from "react-redux";
import vendingSlice from "../../../app/vendingSlice";

const CashAcceptor = () => {
    const { addMoney, resetMoney, setError } = vendingSlice.actions;
    const dispatch = useDispatch();

    const [moneyInput, setMoneyInput] = React.useState('');

    const moneyValues = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2];

    const handleSubmit = () => {

        if (isNaN(moneyInput) || moneyInput.length === 0) {
            dispatch(setError("Please enter valid coin!"));
            setMoneyInput("");
            return;
        }

        const value = Number(moneyInput);

        dispatch(moneyValues.includes(value) 
            ? addMoney(value)
            : setError("No such coin exists!"));

        setMoneyInput("");
    }

    const handleChange = (event) => {
        setMoneyInput(event.target.value);
    }

    const handleReset = () => {
        dispatch(resetMoney());
        setMoneyInput("");
    }

    return (
        <div className="cash-acceptor">
            <form className="cash-elem cash-form">
                <input className="money-input" type="text" onChange={handleChange} value={moneyInput} />
                <button className="money-enter" type="button" onClick={handleSubmit}>{">"}</button>
            </form>
            
            <div className="cash-elem cash-return">
                <button className="money-take" type="button" onClick={handleReset}>Take money</button>
            </div>
        </div>
    )
}

export default CashAcceptor;