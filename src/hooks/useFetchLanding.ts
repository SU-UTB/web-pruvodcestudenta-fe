import { useContext, useEffect, useState } from 'react';

import { api } from '../configs/api';
import { PAGES_LANDING } from '../lib/constants';
import { ILanding } from '../lib/interfaces/ILanding';
import { SectionListContext } from '../contexts/SectionListContext';

const useFetchLanding = () => {
  const [data, setData] = useState<ILanding>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sectonList, setSectionList] = useContext(
    SectionListContext,
  );

  useEffect(() => {
    if (sectonList.length !== 0) {
      setIsLoading(false);
      return;
    }
    const abortController = new AbortController();

    const getData = async () => {
      try {
        const { data: landing } = await api.get(PAGES_LANDING);
        setData(landing);
        setSectionList(landing.sections);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unexpected error');
        }
      } finally {
        setIsLoading(false);
      }
    };

    getData();
    return () => abortController.abort();
  }, []);

  return { data, isLoading, error };
};

export default useFetchLanding;
