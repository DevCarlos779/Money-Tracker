import { useContext } from "react";
import { Table, TableWrapper } from "./RecentTransactionStyles";
import { TransactionContext } from "../../../contexts/TransactionsContext";

export function RecentTransactions() {
  const { lastTransactions } = useContext(TransactionContext);

  return (
    <TableWrapper>
      {lastTransactions.length > 0 ? (
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
      ) : (
        <h2>Don't have transactions</h2>
      )}
    </TableWrapper>
  );
}
