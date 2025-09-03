import { server } from "../store";
import axios from "axios";

export const createCourse = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    };
    dispatch({ type: "createCourseRequest" });

    const { data } = await axios.post(
      `${server}/createcourse`,
      formData,
      config
    );

    dispatch({ type: "createCourseSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "createCourseFail",
      payload: error.response.data.message,
    });
  }
};
export const createNotification = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    };
    dispatch({ type: "createNotificationRequest" });

    const { data } = await axios.post(
      `${server}createnotification`,
      formData,
      config
    );

    dispatch({ type: "createNotifiactionSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "createNotificationFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteNotification = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deleteNotificationRequest" });

    const { data } = await axios.delete(`${server}/notification/${id}`, config);

    dispatch({ type: "deleteNotificationSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteNotificationFail",
      payload: error.response.data.message,
    });
  }
};
export const deleteCourse = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deleteCourseRequest" });

    const { data } = await axios.delete(`${server}/course/${id}`, config);

    dispatch({ type: "deleteCourseSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const addLecture = (id, formdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    };
    dispatch({ type: "addLectureRequest" });

    const { data } = await axios.post(
      `${server}/course/${id}`,
      formdata,
      config
    );

    dispatch({ type: "addLectureSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "addLectureFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteLecture = (courseId, lectureId) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deleteLectureRequest" });

    const { data } = await axios.delete(
      `${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,
      config
    );

    dispatch({ type: "deleteLectureSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteLectureFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAllUsersRequest" });

    const { data } = await axios.get(`${server}/admin/users`, config);

    dispatch({ type: "getAllUsersSuccess", payload: data.users });
  } catch (error) {
    dispatch({
      type: "getAllUsersFail",
      payload: error.response.data.message,
    });
  }
};
export const getAllWebinar = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAllWebinarRequest" });

    const { data } = await axios.get(`${server}/admin/webinars`, config);

    dispatch({ type: "getAllWebinarSuccess", payload: data.webinars });
  } catch (error) {
    dispatch({
      type: "getAllWebinarFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllNotifacation = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAllNotificationRequest" });

    const { data } = await axios.get(`${server}/admin/notification`, config);

    dispatch({
      type: "getAllNotificationsSuccess",
      payload: data.notification,
    });
  } catch (error) {
    dispatch({
      type: "getAllNotificationsFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllUserNotification = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAllUserNotificationRequest" });

    const { data } = await axios.get(
      `${server}/admin/usernotification`,
      config
    );

    dispatch({
      type: "getAllUserNotificationsSuccess",
      payload: data.notification,
    });
  } catch (error) {
    dispatch({
      type: "getAllUserNotificationsFail",
      payload: error.response.data.message,
    });
  }
};
export const getAllContacts = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAllContactsRequest" });

    const { data } = await axios.get(`${server}/admin/contacts`, config);

    dispatch({ type: "getAllContactsSuccess", payload: data.contacts });
  } catch (error) {
    dispatch({
      type: "getAllContactFail",
      payload: error.response.data.message,
    });
  }
};

export const updateUserRole = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "updateUserRoleRequest" });

    const { data } = await axios.put(`${server}/admin/user/${id}`, {}, config);

    dispatch({ type: "updateUserRoleSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateUserRoleFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "deleteUserRequest" });

    const { data } = await axios.delete(`${server}/admin/user/${id}`, config);

    dispatch({ type: "deleteUserSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteUserFail",
      payload: error.response.data.message,
    });
  }
};

export const getDashboardStats = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: "getAdminStatsRequest" });

    const { data } = await axios.get(`${server}/admin/stats`, config);

    dispatch({ type: "getAdminStatsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAdminStatsFail",
      payload: error.response.data.message,
    });
  }
};
