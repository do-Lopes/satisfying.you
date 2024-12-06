import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
    email: null,
    uid: -1,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialValues,
    reducers: {
        reducerLogin: (state, action) => {
            state.email = action.payload.email;
            state.uid = action.payload.uid;
        },
        reducerLogout: (state) => {
            state.email = null;
            state.uid = -1;
        }
    }
})

export const { reducerLogin, reducerLogout } = loginSlice.actions;

export default loginSlice.reducer;
