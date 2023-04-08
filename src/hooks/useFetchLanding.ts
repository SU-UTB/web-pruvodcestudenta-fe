import {useContext, useEffect, useState} from 'react';
import {Api} from '../api/Api';
import {ILanding} from "../api/pages/ApiLanding";
import {SectionsContext} from "../contexts/SectionsContext";

const useFetchLanding = () => {
    const [data, setData] = useState<ILanding>();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [sections, setSections] = useContext(SectionsContext);


    useEffect(() => {
        if (sections.length !== 0) {
            setIsLoading(false);
            return;
        }
        const abortController = new AbortController();

        const getData = async () => {
            try {
                const {data: landing} = await Api.Instance.pagesLanding.getLanding();
                setData(landing);
                setSections(landing.sections);
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
