import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import MuiTheme from "UI/MuiTheme";
import CircularIndeterminate from "components/appLoader/AppLoader";
import ErrorPage from "components/errorPage/ErrorPage";
import ErrorBoundary from "components/errorBoundary/ErrorBoundary";
import "scss/_index.scss";

const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <MuiTheme>
    <React.StrictMode>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={<CircularIndeterminate />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>
  </MuiTheme>
);
