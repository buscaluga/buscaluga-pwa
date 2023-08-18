import { Ripple } from "../Ripple";
import { Tag } from "../Tag";
import { SmallText } from "../Text";
import ListItemStyled from "./ListItemStyled";

interface ListItemProps {
  icon?: any;
  title?: any;
  subTitle?: any;
  tagValue?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  iconButton?: any;
  horizontalMargin?: string;
  fillWidth?: boolean;
}

const ListItem = ({
  icon,
  title,
  subTitle,
  tagValue,
  iconButton,
  onClick,
  horizontalMargin = "21px",
}: ListItemProps) => {
  return (
    <ListItemStyled
      onClick={onClick}
      $horizontalMargin={horizontalMargin}
    >
      <Ripple>
        <div className="list-item-wrapper">
          <div className="left">
            {icon}
            <div className="title-wrapper">
              <SmallText>{title}</SmallText>
              <SmallText>{subTitle}</SmallText>
            </div>
            <Tag type="main">{tagValue}</Tag>
          </div>
          <div className="right">{iconButton}</div>
        </div>
      </Ripple>
    </ListItemStyled>
  );
};

export default ListItem;
