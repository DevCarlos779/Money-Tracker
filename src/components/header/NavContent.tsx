import { PanelsTopLeft, ArrowRightLeft, PiggyBank } from "lucide-react";
import {
  ContentContainer,
  Div,
  DivButtonsNavBar,
  NavButton,
} from "./NavContentStyles";

export function NavContent() {
  return (
    <ContentContainer>
      <Div>
        <h1>
          Money<strong>Tracker</strong>
        </h1>
        <DivButtonsNavBar>
          <NavButton to="/">
            <PanelsTopLeft size={20} strokeWidth={2} />
            Overview
          </NavButton>
          <NavButton to="/transactions">
            <ArrowRightLeft size={20} strokeWidth={2} />
            Transactions
          </NavButton>
          <NavButton to="/savings">
            <PiggyBank size={20} strokeWidth={2} />
            Savings
          </NavButton>
        </DivButtonsNavBar>
      </Div>
    </ContentContainer>
  );
}
