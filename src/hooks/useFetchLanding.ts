import {useEffect, useState} from 'react';
import {Api} from '../api/Api';
import {ILanding} from "../api/pages/ApiLanding";

const useFetchLanding = () => {
    const [data, setData] = useState<ILanding>();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const abortController = new AbortController();

        const getData = async () => {
            try {
                const {data} = await Api.Instance.pagesLanding.getLanding();
                setData(data);
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

    return {data, isLoading, error};
};

export default useFetchLanding;
