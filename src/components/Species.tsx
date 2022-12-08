import React, { ChangeEvent, useState } from 'react';
import { useAllCharacters } from 'context/AllCharactersContext';
import { IoIosArrowDown } from 'react-icons/io';
import { SPECIES_LIST } from 'utils/characterSpecies';
import { useEffect } from 'react';
import LoadingComponent from './LoadingComponent';

const Species = (): JSX.Element => {
  const { fetchData, setPageNow } = useAllCharacters();
  const [selected, setSelected] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    setPageNow(0);
  };

  useEffect(() => {
    const syncData = async () => {
      setIsLoading(true);
      try {
        fetchData(selected);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    syncData();
  }, [selected]);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="species-wrapper">
          <select
            name="Species"
            value={selected}
            onChange={handleChange}
            className="species-wrapper-select">
            <option value="">Species</option>
            <option value={SPECIES_LIST.human}>Human</option>
            <option value={SPECIES_LIST.alien}>Alien</option>
            <option value={SPECIES_LIST.creature}>Creature</option>
            <option value={SPECIES_LIST.animal}>Animal</option>
            <option value={SPECIES_LIST.cronenberg}>Cronenberg</option>
            <option value={SPECIES_LIST.robot}>Robot</option>
            <option value={SPECIES_LIST.poopybutthole}>Poopybutthole</option>
          </select>
          <IoIosArrowDown className="species-wrapper-icon" />
        </div>
      )}
    </>
  );
};

export default Species;
