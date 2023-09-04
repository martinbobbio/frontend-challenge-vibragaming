import { Paper, TextField } from '@mui/material';
import { styled } from 'styled-components';

export const SearchStyled = styled.div`
  margin: 0 auto;
  width: 75%;
`;

export const TextFieldCustom = styled(TextField)`
  label.Mui-focused,
  .MuiFormLabel-root,
  svg,
  input {
    color: ${({ theme }) => theme.palette.default.main};
  }

  .MuiInput-underline:after,
  .MuiOutlinedInput-root fieldset,
  .MuiOutlinedInput-root.Mui-focused fieldset,
  .MuiOutlinedInput-root:hover fieldset {
    border-color: ${({ theme }) => theme.palette.default.main};
  }
`;

export const WrapperAutocomplete = styled(Paper)`
  &.MuiAutocomplete-paper {
    background-color: ${({ theme }) => theme.palette.default.background2};
    color: ${({ theme }) => theme.palette.default.main};
  }
`;

export const GroupByItem = styled.div`
  background-color: ${({ theme }) => theme.palette.default.background1};
  color: ${({ theme }) => theme.palette.default.main};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
  padding: 8px 16px;
  text-align: left;
`;
