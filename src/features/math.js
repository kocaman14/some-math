import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 1,
  total: 1,
};

export const mathSlice = createSlice({
  name: "mathDay",
  initialState,
  reducers: {
    changeNumber: (state, action) => {
      const num = action.payload; 
      state.number = num; 

      state.total = 1; 
      let newNumber = num;

      while (newNumber > 0) {
        state.total *= newNumber;
        newNumber -= 1;  
      }
      console.log(state.total)
    },
  },
});

export const { changeNumber } = mathSlice.actions;
export default mathSlice.reducer;
