import {useEffect, useState} from "react";

const useFetchDataArrayPromise = <T>(Path: string, filters: Record<string, string> = {}): UseFetchDataReturn<T[]> => {
    const [data, setData] = useState<T[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    if (!process.env.REACT_APP_MAKEUP_API_URL) {
        setError("Failed to read REACT_APP_MAKEUP_API_URL");
        setLoading(false);
        return {data: [], loading: false, error: "Failed to read REACT_APP_MAKEUP_API_URL"};
    }

    let url = new URL(process.env.REACT_APP_MAKEUP_API_URL);
    url.pathname = `${url.pathname}/${Path}`
    url.search = new URLSearchParams(filters).toString();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const errorHandler: ErrorHandler = (reason: any) => {
            setError(`Error: ${reason.message}`);
            setLoading(false);
        };

        fetch(url)
            .then(
                (response: Response) => {
                    if (!response.ok) {
                        const errorMsg = `Response is not ok: ${response.statusText}`;
                        setError(errorMsg);
                        return;
                    }
                    response.json()
                        .then((json: T[]) => {
                                setData(json);
                                setLoading(false);
                            }, errorHandler);
                },
                errorHandler
            )
    }, [url.toString()]);

    return {data, loading, error};
};

export default useFetchDataArrayPromise;
