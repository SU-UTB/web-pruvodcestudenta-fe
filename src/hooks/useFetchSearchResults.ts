import { useEffect, useState } from 'react';

import { api } from '../configs/api';
import { API_ROUTE_SEARCH } from '../lib/constants';
import { IContent } from '../lib/interfaces/IContent';

const useFetchSearchResults = (searchQuery: string) => {
  const [data, setData] = useState<IContent>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await api.post(API_ROUTE_SEARCH, {
          query: searchQuery,
        });
        setData(data.topics);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Neznámá chyba.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery && searchQuery.length > 2) {
      setError(null);
      getData();
    } else {
      setData(undefined);
      setError(
        'Pro provedení vyhledávání je třeba zadat minimálně tři písmena.',
      );
    }

    return () => abortController.abort();
  }, [searchQuery]);

  return { data, isLoading, error };
};

export default useFetchSearchResults;
