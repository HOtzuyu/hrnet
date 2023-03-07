import { createSlice } from "@reduxjs/toolkit";

// const employeeSlice = createSlice({
//     name: 'employee',
//     initialState: {
//         data : [],
//         firstName : "",
//         lastName : "",
//         dateOfBirth : "",
//         startDate : "",
//         street : "",
//         city : "",
//         state : "",
//         zipCode : "",
//         departement : ""
//     },
//     reducers: {
    
//         addData: (state, action) => {
//             console.log("Data : " + action)
//             state.data = action
//         },

//         addFirstName: (state, action) => {
//             console.log("T :"+ state.firstName)
//             state.firstName = action.payload
//         },

//         addLastName: (state, action) => {
//             console.log("T :"+ state.lastName)
//             state.lastName = action.payload
//         },

//         addDateOfBirth: (state, action) => {
//             console.log("T :"+ state.dateOfBirth)
//             state.dateOfBirth = action.payload
//         },

//         addStartDate: (state, action) => {
//             console.log("T :"+ state.startDate)
//             state.startDate = action.payload
//         },

//         addStreet: (state, action) => {
//             console.log("T :"+ state.street)
//             state.street = action.payload
//         },

//         addCity: (state, action) => {
//             console.log("T :"+ state.city)
//             state.city = action.payload
//         },

//         addState: (state, action) => {
//             console.log("T :"+ state.state)
//             state.state = action.payload
//         },

//         addZipCode: (state, action) => {
//             console.log("T :"+ state.zipCode)
//             state.zipCode = action.payload
//         },

//         addDepartement: (state, action) => {
//             console.log("T :"+ state.departement)
//             state.departement = action.payload
//         },
//     },
// });

// export const { addData, addFirstName , addLastName, addDateOfBirth, addStartDate, addStreet, addCity, addState, addZipCode, addDepartement} = employeeSlice.actions;
// export const employeeReducer = employeeSlice.reducer;

const initialState = {
    dataEmployee : [],
    isValidForm : false 
}
const { actions, reducer } = createSlice({
    name: 'form',
    initialState,
    reducers : {
        submit: (draft, action) => {
            draft.dataEmployee = action.payload
            return         
        },
        unvalidForm: (draft, action) => {
            draft.isValidForm = false
            return
        },
        validForm: (draft, action) => {
            draft.isValidForm = true
            return
        },
        addEmployee: {
            prepare: (data, newEmployee) => ({ payload: { data, newEmployee } }),
            reducer: (draft, action) => {
                draft.dataEmployee = [ ...action.payload.data, action.payload.newEmployee]
            }        
        },
    }
});

export { actions }
export default reducer