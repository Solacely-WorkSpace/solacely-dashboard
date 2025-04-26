"use client";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";
import { Button } from "../ui/button";
import { useState } from "react";

const Search = ({ button, style, container, word }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
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
          className=" border-none text-black"
        />
      </div>

      <Button className={button}> {word} </Button>
    </div>
  );
};

export default Search;
