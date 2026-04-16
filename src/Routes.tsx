import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Overview } from "./pages/Overview/Overview";
import { Transactions } from "./pages/Transactions/Transactions";
import { Savings } from "./pages/Savings/Savings";
import { SavingDetails } from "./pages/SavingDetails/SavingDetails";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/savings/:id" element={<SavingDetails />} />
      </Route>
    </Routes>
  );
}
