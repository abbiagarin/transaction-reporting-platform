import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "routes/Routes";
import "./App.scss";

function App() {
  return <>{<RouterProvider router={Router} />}</>;
}

export default App;
