import { useContext } from 'react';

import { SearchContext } from './SearchContext';

function Search() {
  const { searchResult } = useContext(SearchContext);

  return (
    <>
      <h1>Search page, baby!</h1>
      {searchResult.length ? (
        <ul>
          {searchResult.map((user) => {
            const fullName = user.first_name + ' ' + user.last_name;

            return (
              <li key={user.id}>
                <figure>
                  <img src={user.photo} alt={`Photo profile of ${fullName}`} />

                  <figcaption>
                    <h3>{fullName}</h3>
                    <p>{user.email}</p>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

export default Search;
