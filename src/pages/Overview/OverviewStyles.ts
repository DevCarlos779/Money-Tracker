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
  gap: 32px;
`;

export const CardSummary = styled.div`
  min-height: 180px;
  border-radius: 12px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 28px;
    font-weight: 800;
    margin: 0;
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
  }
`;

export const CardSummaryGreen = styled(CardSummary)`
  background-color: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme.white};
`;

export const CardSummaryRed = styled(CardSummary)`
  background-color: ${({ theme }) => theme["red-600"]};
  color: ${({ theme }) => theme.white};
`;

export const ContainerChart = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme["gray-50"]};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => theme["gray-800"]};
  }
`;
export const ContainerRecentTransactions = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: ${({ theme }) => theme["gray-50"]};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => theme["gray-800"]};
  }
`;
