import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../components/auth/Main";
const AuthRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AuthRouter;
