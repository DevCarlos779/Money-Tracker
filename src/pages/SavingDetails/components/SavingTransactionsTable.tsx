import {
  DeleteButton,
  Table,
  TableWrapper,
} from "./SavingTransactionsTableStyles";
import {
  TransactionContext,
  type TransactionApi,
} from "../../../contexts/TransactionsContext";
import { useContext } from "react";
import { Trash2 } from "lucide-react";
import { type SavingApi } from "../../../contexts/SavingsContext";
import { EditSavingTransactionModal } from "./EditSavingTransactionModal";

interface SavingTransactionsTableProps {
  saving: SavingApi;
}

export function SavingTransactionsTable({
  saving,
}: SavingTransactionsTableProps) {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  const filteredTransacitons = transactions.filter(
    (t) => t.description == saving.description,
  );

  async function handleDeleteTransaction(transaction: TransactionApi) {
    await deleteTransaction(transaction.id);
  }

  return (
    <TableWrapper>
      {filteredTransacitons.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransacitons.map((t) => (
              <tr key={t.id}>
                <td>{t.description}</td>
                <td>{t.category != "Other" ? t.category : t.customCategory}</td>
                <td>{new Date(t.date).toLocaleDateString("pt-BR")}</td>
                <td
                  style={{
                    color: t.type === "outcome" ? "red" : "green",
                  }}
                >
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(t.amount)}
                </td>
                <td>
                  <div>
                    <EditSavingTransactionModal
                      transaction={t}
                      saving={saving}
                    />
                    <DeleteButton onClick={() => handleDeleteTransaction(t)}>
                      <Trash2 size={20} strokeWidth={2} />
                    </DeleteButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h2>Don't have transactions</h2>
      )}
    </TableWrapper>
  );
}
