import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
  {},
  {
    getAdminStatsRequest: (state) => {
      state.loading = true;
    },
    getAdminStatsSuccess: (state, action) => {
      state.loading = false;
      state.stats = action.payload.stats;
      state.viewsCount = action.payload.viewsCount;
      state.subscriptionCount = action.payload.subscriptionCount;
      state.usersCount = action.payload.usersCount;
      state.subscriptionPercentage = action.payload.subscriptionPercentage;
      state.viewsPercentage = action.payload.viewsPercentage;
      state.usersPercentage = action.payload.usersPercentage;
      state.subscriptionProfit = action.payload.subscriptionProfit;
      state.viewsProfit = action.payload.viewsProfit;
      state.usersProfit = action.payload.usersProfit;
    },
    getAdminStatsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAllUsersRequest: (state) => {
      state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAllUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAllNotificationRequest: (state) => {
      state.loading = true;
    },
    getAllNotificationsSuccess: (state, action) => {
      state.loading = false;
      state.notification = action.payload;
    },
    getAllNotificationsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAllUserNotificationRequest: (state) => {
      state.loading = true;
    },
    getAllUserNotificationsSuccess: (state, action) => {
      state.loading = false;
      state.notification = action.payload;
    },
    getAllUserNotificationsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAllWebinarsRequest: (state) => {
      state.loading = true;
    },
    getAllWebinarSuccess: (state, action) => {
      state.loading = false;
      state.webinars = action.payload;
    },
    getAllWebinarFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAllContactsRequest: (state) => {
      state.loading = true;
    },
    getAllContactsSuccess: (state, action) => {
      state.loading = false;
      state.contacts = action.payload;
    },
    getAllContactFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserRoleRequest: (state) => {
      state.loading = true;
    },
    updateUserRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateUserRoleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserRequest: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createCourseRequest: (state) => {
      state.loading = true;
    },
    createCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createNotificationRequest: (state) => {
      state.loading = true;
    },
    createNotifiactionSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createNotificationFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteNotificationRequest: (state) => {
      state.loading = true;
    },
    deleteNotificationSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteNotificationFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteCourseRequest: (state) => {
      state.loading = true;
    },
    deleteCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addLectureRequest: (state) => {
      state.loading = true;
    },
    addLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteLectureRequest: (state) => {
      state.loading = true;
    },
    deleteLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteLectureFail: (state, action) => {
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
