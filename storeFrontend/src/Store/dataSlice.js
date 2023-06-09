import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: { items: [], totalPrice: 0, totalQuantity: 0 },
  reducers: {
    loadData: (state, action) => {
      return action.payload;
    },
    addItemToCart(state, action) {
        console.log("PAYLOAD")
        console.log(action.payload)
        let x=undefined
       
      const newItem = action.payload;
      if (newItem.itemId){
        x=newItem.itemId
      }else{
        x=newItem.id
      }
      const existingItem = state.items.find(
        (item) => item.id === x
      );
      state.totalQuantity++;
      state.totalPrice += newItem.price;

      if (!existingItem) {
        state.items.push({
          id: x,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const dataSlices = dataSlice.actions;
export default dataSlice.reducer;
