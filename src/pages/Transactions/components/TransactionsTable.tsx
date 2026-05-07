import {
  Conteiner,
  DeleteButton,
  DontHaveTransactionsConteiner,
  Table,
  TableWrapper,
} from "./TransactionsTableStyles";
import { TransactionContext } from "../../../contexts/TransactionsContext";
import { useContext } from "react";
import { Trash2, Wallet } from "lucide-react";
import { EditTransactionModal } from "./EditTransactionModal";

export function TransactionsTable() {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  async function handleDeleteTransaction(id: string) {
    await deleteTransaction(id);
  }

  return (
    <>
      {transactions.length > 0 ? (
        <TableWrapper>
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
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.description}</td>
                  <td>
                    {t.category != "Other" ? t.category : t.customCategory}
                  </td>
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
                      <EditTransactionModal transaction={t} />
                      <DeleteButton
                        onClick={() => handleDeleteTransaction(t.id)}
                      >
                        <Trash2 size={20} strokeWidth={2} />
                      </DeleteButton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      ) : (
        <Conteiner>
          <DontHaveTransactionsConteiner>
            <Wallet size={60} />
            <h2>Don't have transactions</h2>
            <p>Add your first transaction to get started.</p>
          </DontHaveTransactionsConteiner>
        </Conteiner>
      )}
    </>
  );
}
