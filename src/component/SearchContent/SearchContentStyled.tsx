import styled from "styled-components";

interface SearchContentStyledProps {
  $searchPositionY: number;
}

const SearchContentStyled = styled.div<SearchContentStyledProps>`
  header {
    transition: all 1s;
    opacity: 100;
  }

  &.open header {
    opacity: 0;
  }

  section {
    transition: all 1s;
  }

  &.open section {
    transform: translateY(${(p) => "-" + (p.$searchPositionY - 21) + "px"});
  }

  .result {
    text-align: left;
    width: 100%;
    position: absolute;
    margin-top: 5px;
    display: none;
  }

  &.open .result {
    display: block;
  }
`;

export default SearchContentStyled;
