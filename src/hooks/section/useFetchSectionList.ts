import { useEffect, useState } from 'react';

import { api } from '../../configs/api';
import { SECTIONS } from '../../lib/constants';
import { ISection } from '../../lib/interfaces/ISection';

const useFetchSectionList = () => {
  const [data, setData] = useState<ISection[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        const { data: sections } = await api.get(SECTIONS);
        setData(sections);
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

export default useFetchSectionList;
