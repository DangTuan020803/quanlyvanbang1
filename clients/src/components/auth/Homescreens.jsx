import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { removeAuth } from "../../reduxs/reducers/authReducer";

const Homescreens = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(removeAuth({}));
  };
  return (
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Homescreens;
