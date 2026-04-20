import { PiggyBank } from "lucide-react";
import {
  Card,
  HeaderCard,
  ProgressBarContainer,
  Progress,
} from "./SavingCardStyles";
import type { SavingApi } from "../../../contexts/SavingsContext";
import { TransactionContext } from "../../../contexts/TransactionsContext";
import { useContext } from "react";

interface SavingCardProps {
  saving: SavingApi;
}

export function SavingCard({ saving }: SavingCardProps) {
  const { transactions } = useContext(TransactionContext);

  const filteredTransactions = transactions.filter(
    (t) => t.description === (saving?.description ?? ""),
  );
  const actualValue = filteredTransactions.reduce((acc, t) => {
    return acc + t.amount;
  }, 0);

  const actualPercentProgressBar = Math.min((actualValue / saving.meta) * 100);

  return (
    <Card to={`/savings/${saving.id}`}>
      <HeaderCard>
        <h2>{saving.description}</h2>
        <PiggyBank />
      </HeaderCard>
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
            actualPercentProgressBar > 100 ? 100 : actualPercentProgressBar
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
    </Card>
  );
}
