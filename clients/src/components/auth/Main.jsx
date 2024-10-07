import React from "react";
import "./main.css";
import { Input, Layout, Modal, message } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import { Button } from "antd";
import { Carousel } from "antd";
import { useState } from "react";

import { Form } from "antd";
import handelApi from "../../apis/handelApi";
import validateEmail from "../../configs/validate";
import { useDispatch } from "react-redux";
import { addAuth } from "../../reduxs/reducers/authReducer";
import { localDataNames } from "../../constants/appinfor";

const Main = () => {
  const [formRegister] = Form.useForm();
  const [formLogin] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showModalRegister, setShowModelRegister] = useState(false);
  const [showModalLogin, setShowModelLogin] = useState(false);
  const dispatch = useDispatch();
  const handelShowModel = () => {
    setShowModelRegister(true);
  };

  const handelCancel = () => {
    setShowModelRegister(false);
  };
  const handelShowModelLogin = () => {
    setShowModelLogin(true);
  };

  const handelCancelLogin = () => {
    setShowModelLogin(false);
  };
  const handelRegister = async (values) => {
    console.log(values);
    setIsLoading(true);
    try {
      const res = await handelApi("/auth/register", values, "post");
      console.log(res);
      if (res && res.data) {
        message.success("Đăng ký thành công");
        dispatch(addAuth(res.data));
      }
      // message.success("Đăng ký thành công");
      formRegister.resetFields();
      setShowModelRegister(false);
    } catch (error) {
      console.error(
        "API Error:",
        error.response ? error.response.data : error.message
      );
      message.error(
        error.response ? error.response.data.message : error.message
      );
    } finally {
      setIsLoading(false);
    }
  };
  const handleLogin = async (values) => {
    console.log(values);
    setIsLoading(true); // Đặt trạng thái loading
    try {
      const res = await handelApi("/auth/login", values, "post");
      console.log(res);
      res.data && dispatch(addAuth(res.data));
      message.success("Đăng nhập thành công");
      setShowModelLogin(false); // Đóng modal sau khi đăng nhập thành công
      formLogin.resetFields(); // Reset form login
    } catch (error) {
      console.error(
        "Login Error:",
        error.response ? error.response.data : error.message
      );
      message.error(
        error.response ? error.response.data.message : "Đăng nhập thất bại"
      );
    } finally {
      setIsLoading(false); // Kết thúc quá trình loading
    }
  };
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="header__image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/project-kanvan.appspot.com/o/808271258c41f304080a2bed1d411582.png?alt=media&token=df310bb5-7a03-44f5-b27f-3408301ad77a"
              alt=""
            />
          </div>
          <div className="header__button">
            <div className="header__button-register">
              <Button type="primary" onClick={handelShowModel}>
                Đăng ký
              </Button>
            </div>
            <div className="header__button-login">
              <Button type="primary" onClick={handelShowModelLogin}>
                Đăng nhập
              </Button>
            </div>
          </div>
        </Header>
        <Content className="content">
          <Carousel autoplay autoplaySpeed={3000} infinite>
            <div className="list_image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/project-kanvan.appspot.com/o/hongduc2.jpg?alt=media&token=09178012-1322-4ab6-8354-1ade7e6f7d5c"
                alt=""
              />
            </div>
            <div className="list_image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/project-kanvan.appspot.com/o/af5f83ff8d28380c635325ac09ecaf5b.jpg?alt=media&token=54b6698f-79f6-42f5-a1c6-8e3cdf1ff5cb"
                alt=""
              />
            </div>
            <div className="list_image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/project-kanvan.appspot.com/o/hongduc2.jpg?alt=media&token=09178012-1322-4ab6-8354-1ade7e6f7d5c"
                alt=""
              />
            </div>
            <div className="list_image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/project-kanvan.appspot.com/o/af5f83ff8d28380c635325ac09ecaf5b.jpg?alt=media&token=54b6698f-79f6-42f5-a1c6-8e3cdf1ff5cb"
                alt=""
              />
            </div>
          </Carousel>
        </Content>

        {/* model registe */}
        <Modal open={showModalRegister} onCancel={handelCancel} footer={null}>
          <div className="model__register">
            <div className="modal__logo-image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/project-kanvan.appspot.com/o/808271258c41f304080a2bed1d411582.png?alt=media&token=df310bb5-7a03-44f5-b27f-3408301ad77a"
                alt=""
              />
            </div>
          </div>
          <Form
            layout="vertical"
            form={formRegister}
            disabled={isLoading}
            onFinish={handelRegister}
          >
            <Form.Item
              name="email"
              type="email"
              rules={[
                { required: true, message: "Vui lòng nhập vào địa chỉ email" },
                () => ({
                  validator: (_, value) => {
                    if (value.length < 6) {
                      return Promise.reject(
                        new Error(`Mật khẩu có độ dài lớn hơn 6 ký tự`)
                      );
                    } else {
                      return Promise.resolve();
                    }
                  },
                }),
              ]}
            >
              <Input
                placeholder="Email"
                allowClear
                maxLength={100}
                style={{ padding: "7px" }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập vào mật khẩu" },
              ]}
            >
              <Input.Password
                placeholder="Nhập mật khẩu"
                allowClear
                maxLength={100}
                style={{ padding: "7px" }}
              />
            </Form.Item>
            <Form.Item
              name="confirmpassword"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu lại để xác nhận",
                },
              ]}
            >
              <Input.Password
                placeholder="Nhập lại mật khẩu"
                allowClear
                maxLength={100}
                style={{ padding: "7px" }}
              />
            </Form.Item>
            <Button
              isLoading
              type="primary"
              style={{ width: "100%", padding: "18px" }}
              onClick={() => formRegister.submit()}
            >
              Đăng ký
            </Button>
          </Form>
        </Modal>

        {/* model login */}
        <Modal open={showModalLogin} onCancel={handelCancelLogin} footer={null}>
          <div className="model__register">
            <div className="modal__logo-image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/project-kanvan.appspot.com/o/808271258c41f304080a2bed1d411582.png?alt=media&token=df310bb5-7a03-44f5-b27f-3408301ad77a"
                alt=""
              />
            </div>
          </div>
          <Form
            layout="vertical"
            form={formLogin}
            disabled={isLoading}
            onFinish={handleLogin}
          >
            <Form.Item name="email">
              <Input
                placeholder="Tên đăng nhập"
                allowClear
                maxLength={100}
                style={{ padding: "7px" }}
              />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                placeholder="Nhập mật khẩu"
                allowClear
                maxLength={100}
                style={{ padding: "7px" }}
              />
            </Form.Item>
            <Button
              isLoading
              type="primary"
              style={{ width: "100%", padding: "18px" }}
              onClick={() => formLogin.submit()}
            >
              Đăng nhập
            </Button>
          </Form>
        </Modal>
      </Layout>
    </div>
  );
};

export default Main;
