import styled from "styled-components";

const SearchInputStyled = styled.div`
  min-width: 200px;

  background: #f1f1f1;
  color: #838383;
  margin: 0 auto;
  padding: 10px 13px 10px 21px;
  border-radius: 16px;
  border: none;
  display: block;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon-button-block {
    // transition: all 0.3s;
    opacity: 0;
  }

  .search-block {
    display: flex;
    align-items: center;
    width: calc(100% - 30px - 8px);
  }

  input {
    transition: all 0.3s;
    padding: 0;
    font-size: 16px;
    outline: none;
    border: none;
    background: transparent;
    margin-left: 13px;
    width: 100%;

    &::placeholder {
      color: ${(p) => p.theme.color.gray};
      opacity: 1;
    }
  }

  &.open {
    color: ${(p) => p.theme.color.mainDarker};
    background: white;
    outline: 2px solid ${(p) => p.theme.color.mainDarker};

    .icon-button-block {
      opacity: 100;
    }

    ::placeholder {
      opacity: 0;
      color: transparent;
    }

    .search-block > svg > * {
      stroke: ${(p) => p.theme.color.mainDarker};
    }
  }
`;

export default SearchInputStyled;
