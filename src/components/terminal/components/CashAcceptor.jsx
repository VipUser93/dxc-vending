import React from "react";
import { useDispatch, useSelector } from "react-redux";
import vendingSlice from "../../../app/vendingSlice";

const CashAcceptor = () => {
    const { money } = useSelector((state) => state.vending);
    const { addMoney, resetMoney, setError } = vendingSlice.actions;

    const dispatch = useDispatch();

    const [moneyInput, setMoneyInput] = React.useState("");
    const [moneyChange, setMoneyChange] = React.useState("");

    const moneyValues = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2];

    const handleSubmit = () => {
        setMoneyChange("");
        
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
        const change = calculateChange();
        const userChange = change.map((c, i) => 
            c !== 0
                ? c + " x " + moneyValues[i] + " lv"
                : ""
        ).filter(Boolean).join("\r\n")

        setMoneyChange(userChange);

        dispatch(resetMoney());
        setMoneyInput("");
    }

    const calculateChange = () => {
        let amount = money * 100;
        const currency = [1, 2, 5, 10, 20, 50, 100, 200];

        const res = currency.reverse().map(coin => {
            let amountCoin = Math.floor(amount/coin);
            amount -= amountCoin * coin;
            return amountCoin;
        }).reverse();

        return res;
    }

    return (
        <div className="cash-acceptor">
            <form className="cash-elem cash-form">
                <input className="money-input" type="text" onChange={handleChange} value={moneyInput} />
                <button className="money-enter" type="button" onClick={handleSubmit}>{">"}</button>
            </form>
            
            <div className="cash-elem cash-return">
                <button className="money-take" type="button" onClick={handleReset}>Take money</button>
                {moneyChange !== "" && (
                    <div className="change-popup">
                        <p>Your change:</p> 
                        <p className="change-text">{moneyChange}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CashAcceptor;