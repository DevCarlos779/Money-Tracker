import styled from "styled-components";

export const ContentOverview = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ContainerCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const CardSummary = styled.div`
  min-height: 160px;
  border-radius: 16px;
  padding: 24px;

  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme["gray-200"]};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  box-shadow: 0 4px 20px rgba(16, 24, 40, 0.04);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(16, 24, 40, 0.08);
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin: 0;
    color: ${({ theme }) => theme["gray-800"]};
    letter-spacing: -0.01em;
  }
`;

export const DivInformacoesCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => theme["gray-500"]};
  }
`;

export const IconBadge = styled.span<{ $variant: "green" | "red" }>`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background-color: ({ $variant }) =>
    $variant === "green"
      ? "rgba(16, 185, 129, 0.12)"
      : "rgba(225, 29, 72, 0.10)";

  color: ${({ theme, $variant }) =>
    $variant === "green" ? theme["green-600"] : theme["red-600"]};
`;

export const CardSummaryGreen = styled(CardSummary)`
  h2 {
    color: ${({ theme }) => theme["green-700"]};
  }
`;

export const CardSummaryRed = styled(CardSummary)`
  h2 {
    color: ${({ theme }) => theme["red-600"]};
  }
`;

export const ContainerChart = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme["gray-200"]};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(16, 24, 40, 0.04);

  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 17px;
    font-weight: 700;
    margin: 0;
    color: ${({ theme }) => theme["gray-800"]};
  }
`;
export const ContainerRecentTransactions = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme["gray-200"]};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(16, 24, 40, 0.04);

  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;

  h3 {
    font-size: 17px;
    font-weight: 700;
    margin: 0;
    color: ${({ theme }) => theme["gray-800"]};
  }
`;
