import { useState } from "react";
import {
  PanelsTopLeft,
  ArrowRightLeft,
  PiggyBank,
  Menu,
  X,
} from "lucide-react";

import {
  ContentContainer,
  Div,
  DivButtonsNavBar,
  NavButton,
  MenuButton,
} from "./NavContentStyles";

export function NavContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContentContainer>
      <Div>
        <h1>
          Money<strong>Tracker</strong>
        </h1>

        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </MenuButton>

        <DivButtonsNavBar $isOpen={isOpen}>
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
