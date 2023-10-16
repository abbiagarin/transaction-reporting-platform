import React from "react";
import LoginPage from "./login/components/LoginPage";
import ResetPage from "./reset/components/ResetPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import "./App.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="forgot-password" element={<ResetPage />} />
      <Route path="*" element={<Navigate to="/login" replace={true} />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
