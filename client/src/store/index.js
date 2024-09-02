import {configureStore, createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:"user",
    initialState:{isLogedIn : false},

    reducers:{
        login(state){
            state.isLogedIn = true;
        },
        logout(state){
            localStorage.removeItem("userId")
            state.isLogedIn = false;
        }
    }

})

const adminSlice = createSlice({
    name:"auth",
    initialState:{isLogedIn : false},

    reducers:{
        login(state){
            state.isLogedIn = true;
        },
        logout(state){
            localStorage.removeItem("adminId")
            localStorage.removeItem("token")
            state.isLogedIn = false;
        }
    }

})

export const  userActions = userSlice.actions;
export const adminActions = adminSlice.actions;
export const store = configureStore({
    reducer:
    {
        user: userSlice.reducer,
        admin: adminSlice.reducer,
    },
    
})