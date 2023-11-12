import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import CircularIndeterminate from "./components/appLoader/AppLoader";
import ErrorPage from "./components/errorPage/ErrorPage";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import "./scss/_index.scss";

const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<CircularIndeterminate />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
