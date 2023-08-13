import { useState, MouseEventHandler } from "react";
import SearchInputStyled from "./SearchInputStyled";
import { ReactComponent as SearchIcon} from "../../asset/icon/Search.svg"

interface SearchInputProps {}

const SearchInput = (props: SearchInputProps) => {
  return (
    <SearchInputStyled>
      <SearchIcon/>
      <input
        type="text"
        id="name"
        placeholder="Cidade, bairro ou rua"
      />
    </SearchInputStyled>
  );
};

export default SearchInput;
