import { Dispatch, ReactNode, SetStateAction } from 'react';
import { AllCharactersDataI } from './interfaces';

// AllCharactersContext custom type
export type AllCharsContextT = {
  allCharacters: any[];
  fetchData: (param: string) => void;
  setAllCharacters: Dispatch<SetStateAction<any[]>>;
  howManyPages: number;
  pageNow: number;
  setPageNow: Dispatch<SetStateAction<number>>;
  howManyCharsPerPage: number;
  setInputSearchValue: Dispatch<SetStateAction<string>>;
  inputSearchValue: string;
  setHowManyPages: Dispatch<SetStateAction<number>>;
};

// AllCharactersProvider props custom type
export type AllCharsProvPropsT = {
  children: ReactNode;
};
