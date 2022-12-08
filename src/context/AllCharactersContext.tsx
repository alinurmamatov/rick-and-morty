import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AllCharsContextT, AllCharsProvPropsT } from '../utils/types';
import { AllCharactersDataI } from '../utils/interfaces';

const API_URL: string = 'https://rickandmortyapi.com/api/character';
const CHARS_AMOUNT_PER_PAGE: number = 5;

// All characters context
const AllCharactersContext = createContext({} as AllCharsContextT);

// Custom hook to use AllCharactersContext
export const useAllCharacters = () => {
  return useContext(AllCharactersContext);
};

// All characters context Provider
export const AllCharactersProvider = ({ children }: AllCharsProvPropsT) => {
  const [allCharacters, setAllCharacters] = useState<AllCharactersDataI[]>([]);
  const [howManyPages, setHowManyPages] = useState<number>(0);
  const [pageNow, setPageNow] = useState<number>(0);
  const [inputSearchValue, setInputSearchValue] = useState<string>('');
  const howManyCharsPerPage = CHARS_AMOUNT_PER_PAGE;

  const fetchData = async (param: string) => {
    const response = await axios.get(`${API_URL}?species=${param}`);
    setAllCharacters(response.data.results);
  };

  useEffect(() => {
    setHowManyPages(Math.ceil(allCharacters.length / howManyCharsPerPage));
  }, [allCharacters]);

  return (
    <AllCharactersContext.Provider
      value={{
        allCharacters,
        fetchData,
        setAllCharacters,
        howManyPages,
        pageNow,
        setPageNow,
        howManyCharsPerPage,
        inputSearchValue,
        setInputSearchValue,
        setHowManyPages,
      }}>
      {children}
    </AllCharactersContext.Provider>
  );
};
