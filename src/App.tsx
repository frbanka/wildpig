import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
