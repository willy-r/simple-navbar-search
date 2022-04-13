import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { searchUsersByFirstName } from './api';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const getSearchResult = async (searchText) => {
    try {
      const usersData = await searchUsersByFirstName(searchText);
      setSearchResult(usersData);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const text = formData.get('search-text');

    await getSearchResult(text)

    form.reset();
    navigate('search/');
  }

  return (
    <SearchContext.Provider value={{ searchResult, handleSubmit }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
