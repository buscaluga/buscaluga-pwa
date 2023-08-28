import CommentStyled from "./CommentStyled";
import { PropsWithChildren } from "react";
import { Paper } from "../Paper";

interface CommentProps extends PropsWithChildren {}

const Comment = ({ children }: CommentProps) => {
  return (
    <CommentStyled>
      <Paper>{children}</Paper>
    </CommentStyled>
  );
};

export default Comment;
