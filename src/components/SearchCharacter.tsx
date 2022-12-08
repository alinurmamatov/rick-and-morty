import React, { ChangeEvent, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useAllCharacters } from 'context/AllCharactersContext';

const SearchCharacter = (): JSX.Element => {
  const { setInputSearchValue, setPageNow } = useAllCharacters();
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setInputSearchValue(e.target.value);
    setPageNow(0);
  };

  return (
    <div className="search-characters">
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
      />
      <AiOutlineSearch className="search-characters-icon" />
    </div>
  );
};

export default SearchCharacter;
