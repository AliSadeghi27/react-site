import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { login: false };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state) {
      state.login = true;
    },
    logout(state) {
      state.login = false;
    },
  },
});
const smallMenuSlice = createSlice({
  name: "smallMenu",
  initialState: { showSmallMenu: false },
  reducers: {
    show(state) {
      state.showSmallMenu = true;
    },
    hide(state) {
      state.showSmallMenu = false;
    },
  },
});

const store = configureStore({
  reducer: { login: loginSlice.reducer, smallMenu: smallMenuSlice.reducer },
});

export const loginActions = loginSlice.actions;
export const smallMenuActions = smallMenuSlice.actions;
export default store;
