import { useEffect, useState } from 'react';

import { api } from '../../configs/api';
import { SECTIONS } from '../../lib/constants';
import { IGuideSection } from '../../lib/interfaces/IGuideSection';

const useFetchGuideSection = (id: number) => {
  const [data, setData] = useState<IGuideSection>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        const { data: section } = await api.get(`${SECTIONS}/${id}`);
        setData(section);
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

export default useFetchGuideSection;
