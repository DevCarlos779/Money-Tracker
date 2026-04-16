import { createContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../../lib/api";

export interface Transaction {
  description: string;
  category: string;
  date: string;
  amount: number;
  type: "income" | "outcome";
}

export interface TransactionApi {
  id: string;
  description: string;
  category: string;
  customCategory: string;
  date: string;
  amount: number;
  type: "income" | "outcome";
}

interface TransactionContextBody {
  transactions: TransactionApi[];
  lastTransactions: Transaction[];
  createNewTransaction: (data: Transaction) => void;
  deleteTransaction: (id: string) => void;
  editTransaction: (transaction: TransactionApi) => void;
}

interface TransactionContextProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionContext = createContext({} as TransactionContextBody);

export function TransactionContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionApi[]>([]);
  const lastTransactions: Transaction[] = getLastTransactions();

  console.log(lastTransactions);

  async function getTransactions() {
    const response = await api.get("/transactions");
    setTransactions(response.data);
  }

  function getLastTransactions() {
    return transactions.slice(0, 5);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getTransactions();
    getLastTransactions();
  }, []);

  async function createNewTransaction(data: Transaction) {
    await api.post("/transactions", data);
    await getTransactions();
  }

  async function deleteTransaction(id: string) {
    await api.delete(`/transactions/${id}`);
    await getTransactions();
  }

  async function editTransaction(transaction: TransactionApi) {
    await api.put(`/transactions/${transaction.id}`, {
      ...transaction,
    });

    await getTransactions();
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        lastTransactions,
        createNewTransaction,
        deleteTransaction,
        editTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
