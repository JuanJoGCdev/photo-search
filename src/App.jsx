import React from "react";
import Home from "./pages/Home";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <AppRoutes />
        </Router>
      </Provider>
    </>
  );
};

export default App;
