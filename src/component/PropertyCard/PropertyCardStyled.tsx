import { styled } from "styled-components";

const PropertyCardStyled = styled.div`
  overflow: hidden;
  // border: 1px solid red;
  border-radius: 32px;
  box-shadow: 0px 32px 64px rgba(17, 17, 17, 0.08);

  .card-image {
    border-radius: 30px;
    border-bottom: 1px solid #f3f3f3;

    user-select: none;

    &:hover {
      object-fit: contain !important;
    }
  }

  section {
    margin: 25px 30px 30px 30px;
  }

  sub {
    height: 50px;
    overflow: hidden;
  }

  h2 {
    height: 30px;
    overflow: hidden;
  }
`;

export default PropertyCardStyled
