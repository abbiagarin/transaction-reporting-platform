import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import MuiTheme from "components/muiTheme/MuiTheme";
import CircularIndeterminate from "components/appLoader/AppLoader";
import { ErrorBoundary } from "react-error-boundary";
//import ErrorPage from "components/errorPage/ErrorPage";
import {
  ErrorComponent,
  ErrorLog,
} from "components/errorBoundary2/ErrorBoundary";
//import ErrorBoundary from "components/errorBoundary/ErrorBoundary";
import "scss/_index.scss";

const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <MuiTheme>
    <React.StrictMode>
      <ErrorBoundary FallbackComponent={ErrorComponent} onError={ErrorLog}>
        <Suspense fallback={<CircularIndeterminate />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>
  </MuiTheme>
);
