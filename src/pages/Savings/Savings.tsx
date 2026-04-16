import { NewSavingModal } from "./components/NewSavingModal";
import {
  ContainerTransactions,
  HeaderTransactionsPage,
  SavingsContainer,
} from "./SavingsStyles";
import { useContext } from "react";
import { SavingsContext } from "../../contexts/SavingsContext";
import { SavingCard } from "./components/SavingCard";

export function Savings() {
  const { savings } = useContext(SavingsContext);

  return (
    <ContainerTransactions>
      <HeaderTransactionsPage>
        <h1>Savings</h1>
        <NewSavingModal />
      </HeaderTransactionsPage>
      <SavingsContainer>
        {savings.map((saving) => {
          return <SavingCard key={saving.id} saving={saving} />;
        })}
      </SavingsContainer>
    </ContainerTransactions>
  );
}
