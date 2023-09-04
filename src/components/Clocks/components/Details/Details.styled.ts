import { Button } from '@mui/material';
import { styled } from 'styled-components';

export const DetailsStyled = styled.div`
  .group {
    margin-right: 8px;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: ${({ theme }) => theme.lineHeight.lg};
  font-weight: ${({ theme }) => theme.fontWeight.high};
  margin-bottom: 4px;
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: ${({ theme }) => theme.lineHeight.md};
`;

export const Time = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: ${({ theme }) => theme.lineHeight.md};
  margin-bottom: 16px;
`;

export const DeleteButton = styled(Button)`
  top: 8px;
  right: 0px;
`;

export const RoteteButton = styled(Button)`
  top: 8px;
  right: 32px;
`;
