import { styled } from 'styled-components';

export const AnimationsStyled = styled.div`
  .card {
    padding: 32px 24px 24px 24px;
    height: 224px;
    text-align: center;
    background-color: ${({ theme }) => theme.palette.default.background2};
    color: ${({ theme }) => theme.palette.default.main};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;
