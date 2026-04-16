import { PiggyBank } from "lucide-react";
import {
  Card,
  HeaderCard,
  ProgressBarContainer,
  Progress,
} from "./SavingCardStyles";
import type { SavingApi } from "../../../contexts/SavingsContext";

interface SavingCardProps {
  saving: SavingApi;
}

export function SavingCard({ saving }: SavingCardProps) {
  const actualPercentProgressBar = Math.min(
    (saving.actualValue / saving.meta) * 100,
  );

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
        }).format(saving.actualValue)}{" "}
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
        }).format(saving.meta - saving.actualValue)}
      </p>
    </Card>
  );
}
