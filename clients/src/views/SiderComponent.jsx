import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom"; // Sửa lại cú pháp import
const { Sider } = Layout;
import { CiViewList } from "react-icons/ci";
import { MdOutlineInventory2 } from "react-icons/md";
import { Box, Chart, DocumentCode, Home2, ProfileCircle } from "iconsax-react";
import { appInfo } from "../constants/appinfor";
const SiderComponent = () => {
  const items = [
    {
      key: "Dashboard",
      label: <Link to="/">Dashboard</Link>,
      icon: <Home2 size={15} />,
    },
    {
      key: "inventory",
      label: <Link to="/inventory">Inventory</Link>,
      icon: <MdOutlineInventory2 size={15} />,
    },
    {
      key: "Report",
      label: <Link to="/report">Report</Link>,
      icon: <Chart size={15} />,
    },
    {
      key: "Suppliers",
      label: <Link to="/suppliers">Suppliers</Link>,
      icon: <ProfileCircle size={15} />,
    },
    {
      key: "Order",
      label: <Link to="/order">Order</Link>,
      icon: <Box size={15} />,
    },
    {
      key: "Manager Store",
      label: <Link to="/manager">Manager Store</Link>,
      icon: <CiViewList size={15} />,
    },
  ];

  return (
    <div>
      <Sider theme="light" style={{ height: "100vh" }}>
        <div className="p-2">
          <img src={appInfo.logo} alt="" width={183} height={40} />
        </div>
        <Menu items={items} theme="light"></Menu>
      </Sider>
    </div>
  );
};

export default SiderComponent;
