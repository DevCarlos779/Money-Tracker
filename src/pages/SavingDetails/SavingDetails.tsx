import { useContext, useEffect, useState } from "react";
import {
  SavingsContext,
  type SavingPostApi,
} from "../../contexts/SavingsContext";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  ContainerActionButtons,
  DeleteButton,
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

import { ArrowLeft, CreditCard, TableOfContents, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import { EditSavingModal } from "./components/EditSaving";

export function SavingDetails() {
  const { transactions } = useContext(TransactionContext);
  const { getSavingDetails, deleteSaving } = useContext(SavingsContext);
  const [saving, setSaving] = useState<SavingPostApi | undefined>(undefined);
  const { id } = useParams();
  const navigate = useNavigate();

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
    return;
  }

  const actualPercentProgressBar = Math.min((actualValue / saving.meta) * 100);

  async function handleDeleteSaving() {
    if (id) {
      await deleteSaving(id);
      toast.success("Saving deleted successfully!");
      navigate("/savings");
    } else {
      toast.dismiss("Saving Don't deleted!");
    }
  }

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
              <strong>{actualPercentProgressBar.toFixed(2)}% concluded</strong>
              <p>
                Missing R$
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
            <EditSavingModal
              saving={saving}
              actualValue={actualValue}
              getSaving={getSaving}
            />

            <DeleteButton onClick={handleDeleteSaving}>
              <Trash2 />
              Delete
            </DeleteButton>
          </ContainerActionButtons>
        </SavingContainer>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
