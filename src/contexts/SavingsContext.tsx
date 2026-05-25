import { createContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../../lib/api";

export interface Saving {
  description: string;
  meta: number;
}

export interface SavingApi {
  id: string;
  description: string;
  meta: number;
}

export interface SavingPostApi {
  description: string;
  actualValue: number;
  meta: number;
  deposits: [];
  id: "UJ0GhhxmGAs";
}

interface SavingsContextBody {
  savings: SavingApi[];
  createNewSaving: (saving: Saving) => void;
  getSavingDetails: (id: string) => Promise<SavingPostApi | undefined>;
  updateActualValueSaving: (saving: SavingApi) => void;
  deleteSaving: (id: string) => void;
  editSaving: (saving: SavingPostApi) => void;
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

  async function updateActualValueSaving(saving: SavingApi) {
    await api.put(`/savings/${saving.id}`, {
      ...saving,
    });

    await getSavings();
  }

  async function deleteSaving(id: string) {
    await api.delete(`/savings/${id}`);
    await getSavings();
  }

  async function editSaving(saving: SavingPostApi) {
    await api.put(`/savings/${saving.id}`, {
      ...saving,
    });

    await getSavingDetails(saving.id);
    await getSavings();
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getSavings();
  }, [savings]);

  return (
    <SavingsContext.Provider
      value={{
        savings,
        createNewSaving,
        getSavingDetails,
        updateActualValueSaving,
        deleteSaving,
        editSaving,
      }}
    >
      {children}
    </SavingsContext.Provider>
  );
}
