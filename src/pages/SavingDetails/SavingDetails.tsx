import { useContext, useEffect, useState } from "react";
import { SavingsContext, type SavingApi } from "../../contexts/SavingsContext";
import { NavLink, useParams } from "react-router-dom";
import {
  ContainerActionButtons,
  HeaderTransactionsPage,
  InfoSaving,
  Progress,
  ProgressBarContainer,
  SavingContainer,
  SavingDetailsContainer,
  SavingTransactionsTableContainer,
} from "./SavingDetailsStyles";
import { SavingTransactionsTable } from "./components/SavingTransactionsTable";
import { NewSavingTransactionModal } from "./components/NewSavingTransactionModal";
import { TransactionContext } from "../../contexts/TransactionsContext";

export function SavingDetails() {
  const { transactions } = useContext(TransactionContext);
  const { getSavingDetails } = useContext(SavingsContext);
  const [saving, setSaving] = useState<SavingApi | undefined>(undefined);
  const { id } = useParams();

  async function getSaving() {
    if (id) {
      const data = await getSavingDetails(id);
      setSaving(data);
    }
  }

  const filteredTransactions = transactions.filter(
    (t) => t.description === (saving?.description ?? ""),
  );
  const actualValue = filteredTransactions.reduce((acc, t) => {
    return acc + t.amount;
  }, 0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getSaving();
  }, [id]);

  if (!saving) {
    return <h1>Carregando...</h1>;
  }

  const actualPercentProgressBar = Math.min((actualValue / saving.meta) * 100);

  return (
    <div>
      {saving ? (
        <SavingContainer>
          <NavLink to="/savings">Voltar</NavLink>

          <SavingDetailsContainer>
            <InfoSaving>
              <h1>{saving.description}</h1>
              <p>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(actualValue)}{" "}
                /{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(saving.meta)}
              </p>
              <ProgressBarContainer>
                <Progress
                  progress={
                    actualPercentProgressBar > 100
                      ? 100
                      : actualPercentProgressBar
                  }
                />
              </ProgressBarContainer>
              <strong>{actualPercentProgressBar.toFixed(2)}% concluído</strong>
              <p>
                Faltam R$
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(saving.meta - actualValue)}
              </p>
            </InfoSaving>
            <SavingTransactionsTableContainer>
              <HeaderTransactionsPage>
                <h1>Transactions</h1>

                <NewSavingTransactionModal saving={saving} />
              </HeaderTransactionsPage>
              <SavingTransactionsTable saving={saving} />
            </SavingTransactionsTableContainer>
            <ContainerActionButtons>
              <button>editar</button>
              <button>excluir</button>
            </ContainerActionButtons>
          </SavingDetailsContainer>
        </SavingContainer>
      ) : (
        <h1>Carregando...</h1>
      )}
    </div>
  );
}
