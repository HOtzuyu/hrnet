import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: 'employee',
    initialState: [],
    reducers: {
    addEmployee: (state, action) => {
        state.push(action.payload)
    }
    },
});

export const { addEmployee } = employeeSlice.actions;
export const employeeReducer = employeeSlice.reducer;