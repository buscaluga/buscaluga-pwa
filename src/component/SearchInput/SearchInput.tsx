import SearchInputStyled from "./SearchInputStyled";
import { ReactComponent as SearchIcon } from "../../asset/icon/Search.svg";
import { IconButton } from "../IconButton";

import { ReactComponent as CloseSVG } from "../../asset/icon/Close.svg";
import { MouseEventHandler, useEffect, useState } from "react";

import { useRef } from "react";

interface SearchInputProps {
  onOpen?: Function;
  onClose?: Function;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchInput = ({
  onOpen,
  onClose,
  value,
  onChange,
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
    if (isClose) {
      return;
    }

    setIsClose(true);
  };

  const onClick = () => {
    inputRef.current?.focus();
    setIsClose(false);
  };

  return (
    <SearchInputStyled
      tabIndex={1}
      className={isClose ? "" : "open"}
      onClick={onClick}
      onBlur={() => setIsClose(true)}
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
        />
      </div>
      <div className="icon-button-block">
        <IconButton onClick={onCloseButtonClick} color={"gray"}>
          <CloseSVG />
        </IconButton>
      </div>
    </SearchInputStyled>
  );
};

export default SearchInput;
