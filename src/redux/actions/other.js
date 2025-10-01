import { server } from "../store";
import axios from "axios";

export const contactUs = (name, email, message, phone) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };

    dispatch({ type: "contactRequest" });

    const { data } = await axios.post(
      `${server}/contact`,
      { name, email, message, phone },
      config
    );

    dispatch({ type: "contactSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "contactFail",
      payload: error.response.data.message,
    });
  }
};
export const webinar = (name, email, phone, message) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };

    dispatch({ type: "webinarRequest" });

    const { data } = await axios.post(
      `${server}/webinar`,
      { name, email, message, phone },
      config
    );

    dispatch({ type: "webinarSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "webinarFail",
      payload: error.response.data.message,
    });
  }
};
export const subscribeNow = (phone) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };

    dispatch({ type: "subscribeNowRequest" });

    const { data } = await axios.post(
      `${server}/subscribenow`,
      { phone },
      config
    );

    dispatch({ type: "subscribeNowSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "subscribeNowFail",
      payload: error.response.data.message,
    });
  }
};
export const partner =
  (firstName, lastname, phone, email, referralId, password) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      };

      dispatch({ type: "partnerRequest" });

      const { data } = await axios.post(
        `${server}/partnersregister`,
        { firstName, lastname, phone, email, referralId, password },
        config
      );

      dispatch({ type: "partnerSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "partnerFail",
        payload: error.response.data.message,
      });
    }
  };

export const courseRequest = (name, email, course) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };

    dispatch({ type: "courseRequestRequest" });

    const { data } = await axios.post(
      `${server}/courserequest`,
      { name, email, course },
      config
    );

    dispatch({ type: "courseRequestSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "courseRequestFail",
      payload: error.response.data.message,
    });
  }
};
