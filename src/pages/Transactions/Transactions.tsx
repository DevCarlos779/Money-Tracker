import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsTable } from "./components/TransactionsTable";
import {
  ContainerTransactions,
  HeaderTransactionsPage,
} from "./TransactionsStyles";

export function Transactions() {
  return (
    <ContainerTransactions>
      <HeaderTransactionsPage>
        <h1>Transactions</h1>

        <NewTransactionModal />
      </HeaderTransactionsPage>

      <TransactionsTable />
    </ContainerTransactions>
  );
}
