import { getCreatures } from '../services/magicData';

export const FETCH_LIST = 'FETCH_RATES';

export const fetchRates = () => ({
  type: FETCH_LIST,
  payload: getCreatures(),
});
