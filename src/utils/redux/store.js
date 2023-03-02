import { configureStore } from "@reduxjs/toolkit";
import {employeeReducer} from "./reducer";

export default configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
