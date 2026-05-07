import { useContext, useEffect, useState } from "react";
import { SavingsContext, type SavingApi } from "../../contexts/SavingsContext";
import { NavLink, useParams } from "react-router-dom";
import {
  ContainerActionButtons,
  DeleteButton,
  EditButton,
  HeaderTransactionsPage,
  IconCreditCardConteiner,
  IconTransactionsTableConteiner,
  InfoSaving,
  Progress,
  ProgressBarContainer,
  SavingContainer,
  SavingInfoConteiner,
  SavingTransactionsTableContainer,
} from "./SavingDetailsStyles";
import { SavingTransactionsTable } from "./components/SavingTransactionsTable";
import { NewSavingTransactionModal } from "./components/NewSavingTransactionModal";
import { TransactionContext } from "../../contexts/TransactionsContext";

import {
  ArrowLeft,
  CreditCard,
  TableOfContents,
  Pencil,
  Trash2,
} from "lucide-react";

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
    <>
      {saving ? (
        <SavingContainer>
          <NavLink to="/savings">
            <ArrowLeft />
            Voltar
          </NavLink>

          <SavingInfoConteiner>
            <IconCreditCardConteiner>
              <CreditCard size={40} />
            </IconCreditCardConteiner>
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
          </SavingInfoConteiner>
          <SavingTransactionsTableContainer>
            <HeaderTransactionsPage>
              <div>
                <IconTransactionsTableConteiner>
                  <TableOfContents />
                </IconTransactionsTableConteiner>
                <h1>Transactions</h1>
              </div>

              <NewSavingTransactionModal saving={saving} />
            </HeaderTransactionsPage>
            <SavingTransactionsTable saving={saving} />
          </SavingTransactionsTableContainer>
          <ContainerActionButtons>
            <EditButton>
              <Pencil />
              editar
            </EditButton>
            <DeleteButton>
              <Trash2 />
              excluir
            </DeleteButton>
          </ContainerActionButtons>
        </SavingContainer>
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  );
}
