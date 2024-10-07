import React from "react";
import Homescreens from "../components/auth/Homescreens";
import { Layout } from "antd";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HeaderComponent,
  Inventory,
  ManagerStore,
  Order,
  ReportComponent,
  SiderComponent,
  Suppliers,
} from "../components";
const { Header, Footer, Content } = Layout;
const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <SiderComponent></SiderComponent>
          <Layout>
            <HeaderComponent>Header</HeaderComponent>
            <Content>
              <Routes>
                <Route path={"/"} element={<Homescreens></Homescreens>}></Route>
                <Route
                  path={"/inventory"}
                  element={<Inventory></Inventory>}
                ></Route>
                <Route
                  path={"/report"}
                  element={<ReportComponent></ReportComponent>}
                ></Route>
                <Route
                  path={"/suppliers"}
                  element={<Suppliers></Suppliers>}
                ></Route>
                <Route path={"/order"} element={<Order></Order>}></Route>
                <Route
                  path={"/manager"}
                  element={<ManagerStore></ManagerStore>}
                ></Route>
              </Routes>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
