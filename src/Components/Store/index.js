import { configureStore }  from '@reduxjs/toolkit';
import authReducer from './auth';
import userDataReducer from './userData'

const store = configureStore({
    reducer : {
        auth : authReducer,
        userData : userDataReducer
    }
})

export default store;