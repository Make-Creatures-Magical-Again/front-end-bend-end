export const getCreatures = () => {
  return fetch('https://peaceful-refuge-65936.herokuapp.com/api/v1/creatures/')
    .then(res => {
      if(!res.ok) throw 'Unable to get stuff bruh';

      return res.json();
    });
};
