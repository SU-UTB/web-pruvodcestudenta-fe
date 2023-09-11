import { useEffect, useState } from 'react';

import { api } from '../../configs/api';
import { TOPICS } from '../../lib/constants';
import { IContent } from '../../lib/interfaces/IContent';

const useFetchTopic = (slug: string) => {
  const [data, setData] = useState<IContent>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        const { data: topic } = await api.get(`${TOPICS}/${slug}`, {
          signal: abortController.signal,
        });
        setData(topic);
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

export default useFetchTopic;
