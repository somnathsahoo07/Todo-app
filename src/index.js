import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Hello } from "./components/hello";
import { Login } from "./components/Login";
import { NumberBind } from "./components/data-binding/number-bind";
import { StringBind } from "./components/data-binding/string";
import { BooleanBind } from "./components/data-binding/boolean";
import { NullBind } from "./components/data-binding/null";
import { ArrayBind } from "./components/data-binding/array";
import { ObjectBind } from "./components/data-binding/ObjectBind";
import { DateBind } from "./components/data-binding/DateBind";
import { API, F_Api } from "./components/API/api-bind";
import { Ajax_api } from "./components/API/ajax";
import { JqueryFetch } from "./components/API/jquery";
import { AxiosFetch } from "./components/API/axios";
import { FormikHandle } from "./components/formik-library/formik";
import { YupHandle } from "./components/formik-library/yup";
import { HookForm } from "./components/formik-library/hookform";
import { MUI } from "./components/material_UI/react-mui";
import { Weather } from "./components/API/weather_api";
import { EmiCalculator } from "./components/emi-calculator/emi-cal";
import { MUIDemo } from "./components/material_UI/MUI-demo";
import { ToDoIndex } from "./To-Do/todo-index";
import { CookiesProvider } from "react-cookie";
import { Toaster } from "react-hot-toast";
// import { useCookies } from "react-cookie";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<CookiesProvider>
    <ToDoIndex/>
    <Toaster/>
</CookiesProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
