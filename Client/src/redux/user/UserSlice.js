import { createSlice } from "@reduxjs/toolkit";
import User from "../../../../server/models/userModel";

const intialState={
    currentUser:null,
    error:null,
    loading:false,
};

const userSlice = createSlice({
    name:'user',
    intialState,
    reducers:{
        signInStart:(state)=>{
            state.loading=true;
        },
        signInSuccess:(state,action)=>{
            state.currentUser= action.payload;
            state.loading=false;
            state.error=null;
        },
        signInFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        updateUserStart:(state)=>{
            state.loading=true;
        },
        updateUserSuccess:(state,action)=>{
            state.loading=false;
            state.error=null;
            state.currentUser=action.payload 
        },
        updateUserFailure:(state,action)=>{
            state.error=action.payload,
            state.loading=false;
        },
        deleteUserStart:(state)=>{
            state.loading=true;
        },

        deleteUserSuccess:(state)=>{
            state.currentUser=null;
            state.error=null;
            state.loading=false;
        },
        deleteUserFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        
        SignOutUserStart:(state)=>{
            state.loading=true;
        },

        SignOutUserSuccess:(state)=>{
            state.currentUser=null;
            state.error=null;
            state.loading=false;
        },
        SignOutUserFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        }
    }
})

export const {signInStart,signInSuccess,signInFailure,updateUserFailure,updateUserStart,updateUserSuccess,deleteUserFailure,deleteUserStart,deleteUserSuccess,SignOutUserFailure,SignOutUserStart,SignOutUserSuccess}=userSlice.actions;
export default userSlice.reducer;   