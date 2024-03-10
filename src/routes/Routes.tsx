import React from "react";
import LoginPage from "pages/login/LoginPage";
import ResetPage from "pages/reset/ResetPage";
import BankPage from "pages/bank/BankPage";
import TerminalPage from "pages/terminals/TerminalPage";
import MerchantPage from "pages/merchants/MerchantPage";
import PwtTransactionsPage from "pages/pwtTransactions/PwtTransactionsPage";
import PosTransactionsPage from "pages/posTransactions/PosTransactionsPage";
import NotFound from "pages/notFound/NotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import RootLayout from "../pages/rootLayout/RootLayout";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Navigate to="/banks" replace={true} />} />{" "}
          {/* Set the default page to /banks */}
          <Route path="banks" element={<BankPage />} />
          <Route path="terminals" element={<TerminalPage />} />
          <Route path="merchants" element={<MerchantPage />} />
          <Route path="pos_transactions" element={<PosTransactionsPage />} />
          <Route path="pwt_transactions" element={<PwtTransactionsPage />} />
        </Route>
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="forgot_password" element={<ResetPage />} />
      <Route path="not_found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not_found" replace={true} />} />
    </Route>
  )
);

export default Router;
