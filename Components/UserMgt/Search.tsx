"use client";

import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/button";
import { useState, ChangeEvent } from "react";

type SearchProps = {
  button?: string;
  style?: string;
  container?: string;
  word?: string;
};

const Search: React.FC<SearchProps> = ({ button, style, container, word }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={container}>
      <div className={style}>
        <FaSearch size={20} />
        <Input
          type="text"
          placeholder=" Search"
          value={search}
          id="search"
          onChange={handleChange}
          className="border-none text-black"
        />
      </div>

      <Button className={button}>{word}</Button>
    </div>
  );
};

export default Search;
