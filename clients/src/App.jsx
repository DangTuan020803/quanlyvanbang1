import Main from "./components/auth/Main";
import { ConfigProvider } from "antd";
import Router from "./routers/Router";
import { Provider } from "react-redux";
import store from "./reduxs/store";
import "./App.css";
function App() {
  return (
    <>
      <ConfigProvider
        theme={{ token: { colorTextHeading: "#1570EF" }, components: {} }}
      >
        <Provider store={store}>
          <Router></Router>
        </Provider>
      </ConfigProvider>
    </>
  );
}

export default App;
