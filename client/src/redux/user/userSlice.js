import {createSlice} from '@reduxjs/toolkit';

const initialState={
    currentUser:null
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        signIn:(state,action)=>{
            console.log(state);
            state.currentUser=action.payload;
        },
        signUp:(state,action)=>{
            console.log(state);
            state.currentUser=action.payload;
        },
        signOut:(state)=>{
            state.currentUser=null;
        }
    }
})

export const {signIn,signOut,signUp}=userSlice.actions

export default userSlice.reducer;

