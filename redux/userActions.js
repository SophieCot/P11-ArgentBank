import axios from "axios";
import { userLoginFailed, userLoginRequest, userLoginSuccess, userUpdateFailed, userUpdateRequest, userUpdateSuccess } from "./userSlice";

export const userLogin = async (body, dispatch) => {
  dispatch(userLoginRequest());
  axios
    .post("http://localhost:3001/api/v1/user/login", body)
    .then((res) => {
      const token = res.data.body.token;
      console.log(token);
      getProfile(token, dispatch);
    })
    .catch((error) => {
      const message= (error.response.data.message);
      dispatch(userLoginFailed({message:message}))
    });
};

export const getProfile = async (token, dispatch) => {
  dispatch(userLoginRequest());
  axios
    .get("http://localhost:3001/api/v1/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      const payload = {
        token: token,
        user: res.data.body,
      };
      dispatch(userLoginSuccess(payload));
    })

    .catch((error) => {
        console.log(error.response.data);
        dispatch(userLoginFailed())
      });
};

export const updateProfile = async (token,body, dispatch) => {
    dispatch(userUpdateRequest());
    axios
      .put("http://localhost:3001/api/v1/user/profile",body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        getProfile(token,dispatch)
        dispatch(userUpdateSuccess());
      })
  
      .catch((error) => {
        const message= (error.response.data.message);
          dispatch(userUpdateFailed({message:message}))
        });
  };
  
