import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        firstName : "",
        lastName : "",
        dateOfBirth : "",
        startDate : "",
        street : "",
        city : "",
        state : "",
        zipCode : "",
        departement : ""
    },
    reducers: {
    
        addFirstName: (state, action) => {
            console.log("T :"+ state.firstName)
            state.firstName = action.payload
        },

        addLastName: (state, action) => {
            console.log("T :"+ state.lastName)
            state.lastName = action.payload
        },

        addDateOfBirth: (state, action) => {
            console.log("T :"+ state.dateOfBirth)
            state.dateOfBirth = action.payload
        },

        addStartDate: (state, action) => {
            console.log("T :"+ state.startDate)
            state.startDate = action.payload
        },

        addStreet: (state, action) => {
            console.log("T :"+ state.street)
            state.street = action.payload
        },

        addCity: (state, action) => {
            console.log("T :"+ state.city)
            state.city = action.payload
        },

        addState: (state, action) => {
            console.log("T :"+ state.state)
            state.state = action.payload
        },

        addZipCode: (state, action) => {
            console.log("T :"+ state.zipCode)
            state.zipCode = action.payload
        },

        addDepartement: (state, action) => {
            console.log("T :"+ state.departement)
            state.departement = action.payload
        },
    },
});

export const { addFirstName , addLastName, addDateOfBirth, addStartDate, addStreet, addCity, addState, addZipCode, addDepartement} = employeeSlice.actions;
export const employeeReducer = employeeSlice.reducer;