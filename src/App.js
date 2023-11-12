import { RouterProvider } from "react-router-dom";
import Router from "./routes/Routes";
import "./App.scss";

function App() {
  return <>{<RouterProvider router={Router} />}</>;
}

// // function App() {
// //   // throw an error to test the error boundary
// //   throw new Error("Error occurred");

// //   //   return (
// //   //         // JSX goes here
// //   // )
// }

export default App;
