import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart ,fetchProductByUserId} from './cartAPI';

const initialState = {
  statius: 'idle',
  items: [],
};

export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (item) => {
    const response = await addToCart (item);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchProductByUserIdAsync = createAsyncThunk(
  'cart/fetchProductByUserId',
  async (userId) => {
    const response = await fetchProductByUserId (userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    increment: (state) => {
    
      state.value += 1;
    },
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(fetchProductByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items=action.payload;
      });
  },
});

export const { increment } = cartSlice.actions;


export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
