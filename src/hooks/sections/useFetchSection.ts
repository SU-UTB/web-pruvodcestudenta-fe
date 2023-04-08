import {useEffect, useState} from 'react';
import {Api} from '../../api/Api';
import {ISection} from "../../interfaces/ISection";

const useFetchSection = (id: number) => {
    const [data, setData] = useState<ISection>();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const abortController = new AbortController();

        const getData = async () => {
            try {
                const section = await Api.Instance.sections.getSection(id);
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

    return {data, isLoading, error};
};

export default useFetchSection;
