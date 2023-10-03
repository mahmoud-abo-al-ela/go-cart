import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  loading: false,
  user: null,
  error: null,
};

const userReducer = createReducer(initialState, {
  LoadUserBegin: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.isAuth = true;
    state.loading = false;
    state.user = action.payload;
    state.error = null;
  },
  LoadUserError: (state, action) => {
    state.isAuth = false;
    state.loading = false;
    state.user = null;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export { userReducer };
