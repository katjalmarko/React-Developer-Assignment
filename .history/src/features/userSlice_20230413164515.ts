import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({ 
  name: 'user',
  initialState: {
    user: null,
},
reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = (state: any) => state.user.user;
// DOROBIŤ ÚPLNE CELÝ TYPESCRIPT

export default userSlice.reducer;