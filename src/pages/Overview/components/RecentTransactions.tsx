import { useContext } from "react";
import {
  DontHaveTransactionsConteiner,
  Table,
  TableWrapper,
} from "./RecentTransactionStyles";
import { TransactionContext } from "../../../contexts/TransactionsContext";
import { Conteiner } from "../../Transactions/components/TransactionsTableStyles";
import { Wallet } from "lucide-react";

export function RecentTransactions() {
  const { lastTransactions } = useContext(TransactionContext);

  return (
    <>
      {lastTransactions.length > 0 ? (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Data</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {lastTransactions.map((t, index) => (
                <tr key={index}>
                  <td>{t.description}</td>
                  <td>{t.category}</td>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      ) : (
        <Conteiner>
          <DontHaveTransactionsConteiner>
            <Wallet size={40} />
            <h2>Don't have Recent transactions</h2>
            <p>Add your first transaction to get started.</p>
          </DontHaveTransactionsConteiner>
        </Conteiner>
      )}
    </>
  );
}
