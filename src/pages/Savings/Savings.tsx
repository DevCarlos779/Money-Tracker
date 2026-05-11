import { NewSavingModal } from "./components/NewSavingModal";
import {
  ContainerTransactions,
  Conteiner,
  HeaderTransactionsPage,
  SavingsContainer,
} from "./SavingsStyles";
import { useContext } from "react";
import { SavingsContext } from "../../contexts/SavingsContext";
import { SavingCard } from "./components/SavingCard";
import { DontHaveTransactionsConteiner } from "../Transactions/components/TransactionsTableStyles";
import { PiggyBank } from "lucide-react";

export function Savings() {
  const { savings } = useContext(SavingsContext);

  return (
    <ContainerTransactions>
      <HeaderTransactionsPage>
        <h1>Savings</h1>
        <NewSavingModal />
      </HeaderTransactionsPage>
      {savings.length > 0 ? (
        <SavingsContainer>
          {savings.map((saving) => {
            return <SavingCard key={saving.id} saving={saving} />;
          })}
        </SavingsContainer>
      ) : (
        <Conteiner>
          <DontHaveTransactionsConteiner>
            <PiggyBank size={60} />
            <h2>You don't have any savings yet</h2>
            <p>Add your first saving to get started.</p>
          </DontHaveTransactionsConteiner>
        </Conteiner>
      )}
    </ContainerTransactions>
  );
}
