import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.black};

  padding: 36px 0;

  font-family: "Inter", sans-serif;

  position: relative;

  @media (max-width: 1320px) {
    width: 100%;
    padding: 24px 32px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Div = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 44px;

  padding: 0 24px;

  text-align: center;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .logo-mark {
    width: 34px;
    height: 34px;
    border-radius: 9px;
    background: linear-gradient(135deg, ${({ theme }) => theme["green-500"]}, ${({ theme }) => theme["green-300"]});
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.black};
    flex-shrink: 0;
  }

  h1 {
    color: ${({ theme }) => theme.white};

    font-family: "Sora", sans-serif;
    font-size: 20px;
    font-weight: 700;

    letter-spacing: 0.2px;
  }

  strong {
    color: ${({ theme }) => theme["green-300"]};

    font-family: "Sora", sans-serif;
    font-size: 20px;
    font-weight: 700;

    letter-spacing: 0.2px;
  }

  @media (max-width: 1320px) {
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`;

export const MenuButton = styled.button`
  display: none;

  background: transparent;
  border: none;

  color: ${({ theme }) => theme.white};

  cursor: pointer;

  @media (max-width: 900px) {
    display: flex;

    align-items: center;
    justify-content: center;
  }
`;

interface DivButtonsNavBarProps {
  $isOpen: boolean;
}

export const DivButtonsNavBar = styled.div<DivButtonsNavBarProps>`
  display: flex;
  flex-direction: column;

  gap: 6px;

  @media (max-width: 1320px) {
    flex-direction: row;
  }

  @media (max-width: 900px) {
    position: absolute;

    top: 100%;
    left: 0;
    right: 0;

    background-color: ${({ theme }) => theme.black};
    border-top: 1px solid rgba(255, 255, 255, 0.06);

    padding: 20px 32px;

    flex-direction: column;

    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};

    z-index: 999;
  }
`;

export const NavButton = styled(NavLink)`
  width: 100%;
  max-width: 216px;
  height: 46px;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 0 16px;

  text-decoration: none;

  border-radius: 10px;

  color: ${({ theme }) => theme["gray-350"]};

  font-size: 14.5px;
  font-weight: 500;

  cursor: pointer;

  transition: all 0.2s ease;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);

    color: ${({ theme }) => theme.white};
  }

  &.active {
    background-color: ${({ theme }) => theme["green-500"]};

    color: ${({ theme }) => theme.black};

    font-weight: 700;

    position: relative;
  }

  &.active svg {
    color: ${({ theme }) => theme.black};
  }

  @media (max-width: 900px) {
    max-width: 100%;

    justify-content: center;
  }
`;
