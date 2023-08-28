import styled from "styled-components";

interface LazyLoadStyledProps {}

const LazyLoadStyled = styled.div<LazyLoadStyledProps>`
  text-align: left;
  position: sticky;

  .rect {
    opacity: 0.8;
    background: linear-gradient(
      135deg,
      rgba(211, 223, 232, 0.5) 30%,
      rgba(169, 184, 197, 0.5) 38%,
      rgba(168, 182, 193, 0.6) 41%,
      rgba(168, 182, 193, 0.6) 50%,
      rgba(168, 182, 193, 0.6) 50%,
      rgba(169, 184, 197, 0.6) 51%,
      rgba(211, 223, 232, 0.6) 57%,
      rgba(211, 223, 232, 0.6) 80%,
      rgba(211, 223, 232, 0.6) 80%
    );
    background-size: calc(10 * 400%) calc(2 * 400%);

    animation: AnimationName 2s ease infinite reverse;
  }

  @keyframes AnimationName {
    0% {
      background-position: 0% 92%;
    }
    10% {
      background-position: 100% 9%;
    }
    100% {
      background-position: 0% 92%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 92%;
    }
    100% {
      background-position: 100% 9%;
    }
  }
`;

export default LazyLoadStyled;
