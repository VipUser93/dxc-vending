import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk('fetch-all-products', async (apiUrl) => {
    const response = await fetch(apiUrl);
    return response.json();
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        data: [], 
        fetchStatus: ""
    },
    reducers: {
        buyProduct: (state, action) => {
            const index = state.data.findIndex(item => item.id === action.payload);
            state.data[index].quantity = state.data[index].quantity - 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.fetchStatus = "success";
            })
            .addCase(fetchAllProducts.pending, (state) => {
                state.fetchStatus = "loading";
            })
            .addCase(fetchAllProducts.rejected, (state) => {
                state.fetchStatus = "error";
            })
    }
});


export default productSlice;