import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Transaction } from "./TransactionsContext";
import { api } from "../../lib/api";

export interface Saving {
  description: string;
  actualValue: number;
  meta: number;
  deposits: Transaction[];
}

export interface SavingApi {
  id: string;
  description: string;
  actualValue: number;
  meta: number;
  deposits: Transaction[];
}

interface SavingsContextBody {
  savings: SavingApi[];
  createNewSaving: (saving: Saving) => void;
  getSavingDetails: (id: string) => Promise<SavingApi | undefined>;
}

interface SavingsContextProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const SavingsContext = createContext({} as SavingsContextBody);

export function SavingsContextProvider({
  children,
}: SavingsContextProviderProps) {
  const [savings, setSavings] = useState<SavingApi[]>([]);

  async function getSavings() {
    const response = await api.get("/savings");
    setSavings(response.data);
    console.log(response.data);
  }

  async function getSavingDetails(id: string) {
    const response = await api.get(`/savings/${id}`);
    return response.data;
  }

  async function createNewSaving(saving: Saving) {
    await api.post("/savings", saving);
    await getSavings();
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getSavings();
  }, []);

  return (
    <SavingsContext.Provider
      value={{ savings, createNewSaving, getSavingDetails }}
    >
      {children}
    </SavingsContext.Provider>
  );
}
