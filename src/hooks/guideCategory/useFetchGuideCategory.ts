import { useEffect, useState } from 'react';
import { Api } from '../../api/Api';
import { IGuideCategory } from '../../lib/interfaces/IGuideCategory';

const useFetchGuideCategory = (id: number) => {
  const [data, setData] = useState<IGuideCategory>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        const guideCategory = await Api.Instance.sections.getGuideCategory(id);
        setData(guideCategory);
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

export default useFetchGuideCategory;
