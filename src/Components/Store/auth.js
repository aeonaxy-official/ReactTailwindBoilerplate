import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
    isAuthenticated : false,
    token : "",
    isDataTaken : false
}

console.log(authInitialState);

const authSlice = createSlice({
    name: 'Auth',
    initialState : authInitialState,
    reducers : {
        setAuthentication(state, action){
            console.log('Reducer function')
            state.isAuthenticated = true;
            state.token  = action.payload.token;
        },
        setDataisTaken(state, action){
            state.isDataTaken = action.payload;
        }
        
    }
})


export const authAction = authSlice.actions;
export default authSlice.reducer;