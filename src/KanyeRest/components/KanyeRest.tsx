import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/RootState';
import { useKanyeRest } from '../hooks/useKanyeRest';
import '../styles/kanyeRest.scss'

export const KanyeRest = () => {
  const kanyeQuote = useSelector((state: RootState) => state.kanyeRest.quote);
  const { load } = useKanyeRest();

  useEffect(() => {
    load();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="kanye-rest">
      <h1>Kanye says:</h1>
      {kanyeQuote.loading && <div>Loading...</div>}
      {kanyeQuote.error && <div>Error.. {kanyeQuote.error}</div>}
      {kanyeQuote.data && <i>{kanyeQuote.data.quote}</i>}
    </div>
  );
};
