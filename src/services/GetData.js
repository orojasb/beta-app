export const getData = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((response) =>
      response.map((response) => {
        return {
          key: response.id,
          ...response,
        };
      })
    );
