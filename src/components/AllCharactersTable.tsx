import React, { useEffect } from 'react';
import { ImCheckboxUnchecked } from 'react-icons/im';
import { useAllCharacters } from 'context/AllCharactersContext';
import Pagination from './Pagination';
import {
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
  AiFillQuestionCircle,
} from 'react-icons/ai';

const AllCharactersTable = (): JSX.Element => {
  const {
    allCharacters,
    howManyCharsPerPage,
    pageNow,
    inputSearchValue,
    setHowManyPages,
  } = useAllCharacters();

  const filteredCharacters = allCharacters.filter(
    (char) =>
      (char = char.name.toLowerCase().includes(inputSearchValue.toLowerCase())),
  );
  const start: number = pageNow * howManyCharsPerPage;
  const end: number = start + howManyCharsPerPage;
  const charactersToShow = filteredCharacters.slice(start, end);

  useEffect(() => {
    setHowManyPages(Math.ceil(filteredCharacters.length / howManyCharsPerPage));
  }, [filteredCharacters]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="table-checkbox">
              <ImCheckboxUnchecked className="checkbox-icon" />
            </th>
            <th>Name</th>
            <th className="fixed-columns">Avatar</th>
            <th className="fixed-columns">Origin</th>
            <th className="fixed-columns">Gender</th>
            <th className="fixed-columns">Status</th>
          </tr>
        </thead>
        <tbody>
          {charactersToShow.map((char) => (
            <tr
              key={char.id}
              className={`${char.status === 'Dead' && 'dead-character'}`}>
              <td className="table-checkbox">
                <ImCheckboxUnchecked className="checkbox-icon" />
              </td>
              <td>
                <p className="td-name">{char.name}</p>
                <p className="td-species">{char.species}</p>
              </td>
              <td className="fixed-columns">
                <img src={char.image} alt={char.name} className="avatar" />
              </td>
              <td
                className={`fixed-columns ${
                  char.origin.name === 'unknown' && 'unknown-origin'
                }`}>
                {char.origin.name}
              </td>
              <td className="fixed-columns">{char.gender}</td>
              <td className="fixed-columns">
                {char.status === 'Alive' ? (
                  <AiOutlineCheckCircle style={{ color: 'green' }} />
                ) : char.status === 'Dead' ? (
                  <AiOutlineExclamationCircle style={{ color: 'red' }} />
                ) : (
                  <AiFillQuestionCircle style={{ color: 'grey' }} />
                )}{' '}
                {char.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </>
  );
};

export default AllCharactersTable;
