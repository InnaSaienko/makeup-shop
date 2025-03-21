import {useEffect, useState} from "react";

type FetchDataRequest = {
    url: URL,
    setLoading: (flag: boolean) => void,
    setData: (data: any) => void,
    setError: (message: any) => void,

};

type ErrorHandler = (reason: any) => void;

type UseFetchDataReturn<T> = {
    data: T[];
    loading: boolean;
    error: string | null;
}

const useFetchDataPromise = <T>(Path: string, filters: Record<string, string> = {}): UseFetchDataReturn<T> => {
    const [data, setData] = useState<T[]>([]);
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
        const errorHandler: ErrorHandler = (reason: any) => setError(`Error: ${reason.message}`);
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
                            console.log("Returned json succes ", json);
                            setData(json);
                            setLoading(false);
                            console.log("Setteled data: ", json);
                            },
                            errorHandler);
                },
                errorHandler
            )
            .catch(errorHandler)
            .finally(() => {
                setLoading(false);
                console.log("Setteled data finnaly: ", data);
            });
    }, [url.toString()]);

    return {data, loading, error};
};

export default useFetchDataPromise;
