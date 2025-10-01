import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer(
  {},

  {
    webinarRequest: (state) => {
      state.loading = true;
    },
    webinarSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },

    webinarFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    subscribeNowRequest: (state) => {
      state.loading = true;
    },
    subscribeNowSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },

    subscribeNowFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    partnerRequest: (state) => {
      state.loading = true;
    },
    partnerSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },

    partnerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    contactRequest: (state) => {
      state.loading = true;
    },
    contactSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    contactFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    courseRequestRequest: (state) => {
      state.loading = true;
    },
    courseRequestSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    courseRequestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
