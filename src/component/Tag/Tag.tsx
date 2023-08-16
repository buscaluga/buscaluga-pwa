import TagStyled from "./TagStyled";
import { PropsWithChildren } from "react";
import { ExtraSmallText } from "../Text";

type TagType = "main" | "primary-button";

interface TagProps extends PropsWithChildren {
  type: TagType;
}

const Tag = ({ type, children }: TagProps) => {
  return (
    <TagStyled $type={type}>
      <ExtraSmallText>{children}</ExtraSmallText>
    </TagStyled>
  );
};

export default Tag;
