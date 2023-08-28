import SuggestionsContentStyled from "./SuggestionsContentStyled";
import { PropsWithChildren } from "react";

interface SuggestionsContentProps extends PropsWithChildren {}

const SuggestionsContent = ({ children }: SuggestionsContentProps) => {
  return <SuggestionsContentStyled>{children}</SuggestionsContentStyled>;
};

export default SuggestionsContent;
