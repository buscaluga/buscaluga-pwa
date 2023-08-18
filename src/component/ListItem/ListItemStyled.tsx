import styled from "styled-components";

interface SearchInputStyledProps {
    $horizontalMargin: string;
}

const ListItemStyled = styled.div<SearchInputStyledProps>`
  margin: 0 -${p => p.$horizontalMargin};
  width: calc(100% + ${p => p.$horizontalMargin} * 2);

  text-align: left;

  > div {
    padding: 8px 0;
  }

  .list-item-wrapper {
    margin: 0 ${p => p.$horizontalMargin};

    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      gap: 8px;
      display: flex;
      align-items: center;
    }

    .right {
      display: flex;
      align-items: center;
    }
  }

  .title-wrapper {
    text-align: left;
  }
`;

export default ListItemStyled;
