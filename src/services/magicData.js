export const getCreatures = () => {
  return fetch('')
    .then(res => {
      if(!res.ok) throw 'Unable to get stuff bruh';

      return res.json();
    });
};
