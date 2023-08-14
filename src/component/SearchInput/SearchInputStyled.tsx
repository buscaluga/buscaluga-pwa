import styled from "styled-components";

const SearchInputStyled = styled.div`
  min-width: 200px;

  background: #f1f1f1;
  color: #838383;
  margin: 0 auto;
  padding: 10px 21px;
  border-radius: 16px;
  border: none;
  display: block;
  // transition: all 0.3s;

  display: flex;
  align-items: center;

  input {
    padding: 0;
    font-size: 16px;
    outline: none;
    border: none;
    background: transparent;
    margin-left: 13px;

    &::placeholder {
      color: ${(p) => p.theme.color.gray};
      opacity: 1;
    }
  }

  &:hover {
    color: ${(p) => p.theme.color.mainDarker};
    background: white;
    outline: 2px solid ${(p) => p.theme.color.mainDarker};
    
    ::placeholder {
      opacity: 0;
      color: transparent
    }

    * {
      stroke: ${(p) => p.theme.color.mainDarker};
    }
  }
`;

export default SearchInputStyled;
