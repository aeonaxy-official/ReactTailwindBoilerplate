import { createSlice } from "@reduxjs/toolkit";

const userDataInitialState = {
  profilePhoto: null,
  location : ''
};

const userDataSlice = createSlice({
  name: "UserData",
  initialState: userDataInitialState,
  reducers: {
     setProfilePhoto(state, action){
        state.profilePhoto = action.payload;
     },
     setLocation(state, action){
        state.location = action.payload;
     }
  },
});


export const userDataAction = userDataSlice.actions;
export default userDataSlice.reducer;