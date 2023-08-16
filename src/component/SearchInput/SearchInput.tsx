import SearchInputStyled from "./SearchInputStyled";
import { ReactComponent as SearchIcon } from "../../asset/icon/Search.svg";
import { IconButton } from "../IconButton";

import { ReactComponent as CloseSVG } from "../../asset/icon/Close.svg";
import { MouseEventHandler, useEffect, useState } from "react";

import { useRef } from "react";
import { Tag } from "../Tag";

interface SearchInputProps {
  onOpen?: Function;
  onClose?: Function;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  tagValue?: string;
}

const SearchInput = ({
  onOpen,
  onClose,
  value,
  onChange,
  tagValue,
}: SearchInputProps) => {
  const [isClose, setIsClose] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isClose) {
      onClose?.();
    } else {
      onOpen?.();
    }
  }, [isClose]);

  const onCloseButtonClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setIsClose(true);
  };

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    inputRef.current?.focus();
    setIsClose(false);
  };

  return (
    <SearchInputStyled
      tabIndex={1}
      className={isClose ? "" : "open"}
      onClick={onClick}
      style={{
        pointerEvents: !isClose ? "none" : undefined,
      }}
    >
      <div className="search-block">
        <SearchIcon />
        <input
          value={value}
          onChange={onChange}
          type="text"
          name="buscaluga-search"
          placeholder="Cidade, bairro ou rua"
          autoComplete="off"
          ref={inputRef}
          onBlur={() => {
            setIsClose(true);
          }}
        />
      </div>
      <div className="icon-button-block">
        <IconButton onClick={onCloseButtonClick} color={"gray"}>
          <CloseSVG />
        </IconButton>
      </div>
      <div className="tag-block">
        {tagValue && <Tag type="main">{tagValue}</Tag>}
      </div>
    </SearchInputStyled>
  );
};

export default SearchInput;
