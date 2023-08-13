import styled from "styled-components";

const SearchInputStyled = styled.div<any>`
  min-width: 200px;

  background: #f1f1f1;
  color: #838383;
  margin: 0 auto;
  padding: 10px 21px;
  border-radius: 16px;
  border: none;
  display: block;
  transition: all 0.3s;

  display: flex;
  align-items: center;

  input {
    font-size: 16px;
    outline: none;
    border: none;
    background: transparent;
    margin-left: 13px;

    &::placeholder {
      color: #838383;
      opacity: 1;
    }
  }

  &:hover {
    background: white;
    border: 2px solid black;
  }
`;

export default SearchInputStyled;
