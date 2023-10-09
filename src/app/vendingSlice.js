import { createSlice } from '@reduxjs/toolkit';

const vendingSlice = createSlice({
    name: 'vending',
    initialState: {
        money: 0,
        error: ""
    },
    reducers: {
        addMoney: (state, action) => {
            state.money = state.money + action.payload;
            state.error = "";
        },
        removeMoney: (state, action) => {
            state.money = state.money - action.payload;
        },
        resetMoney: (state, action) => {
            state.money = 0;
            state.error = "";
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export default vendingSlice;