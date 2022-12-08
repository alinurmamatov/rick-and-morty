import React from 'react';
import AllCharactersTable from 'components/AllCharactersTable';
import SearchCharacter from 'components/SearchCharacter';
import Species from 'components/Species';
import 'styles/main.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Characters</h1>
        <div className="search-select-wrapper">
          <SearchCharacter />
          <Species />
        </div>
      </header>

      <AllCharactersTable />
    </div>
  );
}

export default App;
