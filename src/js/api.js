const SEARCH_ID_SERVER = 'https://front-test.beta.aviasales.ru/search';

const getSearchId = () => {
  fetch(SEARCH_ID_SERVER
    )
  .then((response) => response.json())
    .then((searchId) => {
      return searchId;
    });
}

export {getSearchId};
