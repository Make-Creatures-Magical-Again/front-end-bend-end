import { getCreatures } from '../services/magicData';

export const FETCH_LIST = 'FETCH_RATES';

export const fetchList = () => ({
  type: FETCH_LIST,
  payload: getCreatures(),
});
