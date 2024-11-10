import { configureStore } from "@reduxjs/toolkit";
import  mathReducer  from "./features/math";
export default configureStore({
    reducer: {
      math: mathReducer,
    },
  })
  