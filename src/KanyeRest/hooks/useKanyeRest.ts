import { useDispatch } from 'react-redux';
import { kanyeRestSlice } from '../state/kanyeRestSlice';

export const useKanyeRest = () => {
  const dispatch = useDispatch();

  const load = async () => {
    try {
      dispatch(kanyeRestSlice.actions.setLoader());

      const response = await fetch('https://api.kanye.rest/');
      const data = await response.json();

      dispatch(kanyeRestSlice.actions.setData(data));

    } catch (e) {
      dispatch(kanyeRestSlice.actions.setError(e.toString()));
    }
  };

  return {
    load
  };
};