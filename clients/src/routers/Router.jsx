import React, { useEffect, useState } from "react";
import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";
import { useDispatch, useSelector } from "react-redux";
import { addAuth, authSelector } from "../reduxs/reducers/authReducer";
import { localDataNames } from "../constants/appinfor";
import { Spin } from "antd";

const Router = () => {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = localStorage.getItem(localDataNames.authData);
    res && dispatch(addAuth(JSON.parse(res)));
  };
  return isLoading ? (
    <Spin></Spin>
  ) : !auth.token ? (
    <AuthRouter></AuthRouter>
  ) : (
    <MainRouter></MainRouter>
  );
};

export default Router;
