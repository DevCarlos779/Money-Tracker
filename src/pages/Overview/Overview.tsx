import { BanknoteArrowDown, BanknoteArrowUp, Receipt } from "lucide-react";
import {
  ContentOverview,
  ContainerCards,
  ContainerChart,
  ContainerRecentTransactions,
  DivInformacoesCard,
  CardSummaryGreen,
  CardSummaryRed,
} from "./OverviewStyles";
import { Chart } from "./components/Chart";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { RecentTransactions } from "./components/RecentTransactions";

export function Overview() {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const outcome = transactions
    .filter((t) => t.type === "outcome")
    .reduce((acc, t) => acc + t.amount, 0);

  const profit = income - outcome;

  const topCategories = Object.entries(
    transactions
      .filter((t) => t.type === "outcome")
      .reduce(
        (acc, transaction) => {
          const { category, amount } = transaction;

          acc[category] = (acc[category] || 0) + amount;

          return acc;
        },
        {} as Record<string, number>,
      ),
  )
    .map(([category, total]) => ({
      category,
      total,
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 3);

  return (
    <ContentOverview>
      <ContainerCards>
        <CardSummaryGreen>
          <h2>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(income)}
          </h2>
          <DivInformacoesCard>
            <p>Total Incomes</p>
            <BanknoteArrowUp size={20} strokeWidth={2} />
          </DivInformacoesCard>
        </CardSummaryGreen>

        <CardSummaryRed>
          <h2>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(outcome)}
          </h2>
          <DivInformacoesCard>
            <p>Total Outcomes</p>

            <BanknoteArrowDown size={20} strokeWidth={2} />
          </DivInformacoesCard>
        </CardSummaryRed>

        {profit >= 0 ? (
          <CardSummaryGreen>
            <h2>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(profit)}
            </h2>
            <DivInformacoesCard>
              <p>Total Profit</p>

              <Receipt size={20} strokeWidth={2} />
            </DivInformacoesCard>
          </CardSummaryGreen>
        ) : (
          <CardSummaryRed>
            <h2>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(profit)}
            </h2>
            <DivInformacoesCard>
              <p>Total Profit</p>
              <Receipt size={20} strokeWidth={2} />
            </DivInformacoesCard>
          </CardSummaryRed>
        )}
      </ContainerCards>
      <ContainerChart>
        <h3>Where Are You Most Spent</h3>
        <Chart data={topCategories} />
      </ContainerChart>
      <ContainerRecentTransactions>
        <h3>Last Transactions</h3>
        <RecentTransactions />
      </ContainerRecentTransactions>
    </ContentOverview>
  );
}
